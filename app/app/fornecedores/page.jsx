"use client";

import { useEffect, useState } from "react";
import { db } from "../../../lib/fazendas-db";
import AppHeader from "../AppHeader";

const formInicial = {
  nome: "",
  cnpj: "",
  email: "",
  telefone: "",
  tipoProduto: "",
};

const tiposProduto = [
  "Insumo - alimentação",
  "Insumo - sanitário",
  "Animais",
];

export default function Fornecedores() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [fornecedores, setFornecedores] = useState([]);
  const [fornecedorEditando, setFornecedorEditando] = useState(null);
  const [form, setForm] = useState(formInicial);

  async function carregarFornecedores() {
    const lista = await db.fornecedores.orderBy("createdAt").reverse().toArray();
    setFornecedores(
      lista.filter((fornecedor) => fornecedor.status !== "deletado"),
    );
  }

  useEffect(() => {
    let componenteAtivo = true;

    async function carregarListaInicial() {
      const lista = await db.fornecedores
        .orderBy("createdAt")
        .reverse()
        .toArray();

      if (componenteAtivo) {
        setFornecedores(
          lista.filter((fornecedor) => fornecedor.status !== "deletado"),
        );
      }
    }

    carregarListaInicial();

    return () => {
      componenteAtivo = false;
    };
  }, []);

  function atualizarCampo(campo, valor) {
    setForm((formAtual) => ({
      ...formAtual,
      [campo]: valor,
    }));
  }

  function limparFormulario() {
    setForm(formInicial);
  }

  async function salvarFornecedor() {
    const dadosFornecedor = {
      ...form,
      nome: form.nome.trim(),
      cnpj: form.cnpj.trim(),
      email: form.email.trim(),
      telefone: form.telefone.trim(),
      tipoProduto: form.tipoProduto.trim(),
    };

    if (!dadosFornecedor.nome || !dadosFornecedor.tipoProduto) {
      alert("Preencha nome do fornecedor e tipo de produto.");
      return;
    }

    if (fornecedorEditando) {
      await db.fornecedores.update(fornecedorEditando.id, {
        ...dadosFornecedor,
        status: fornecedorEditando.status || "ativo",
      });
      setFornecedorEditando(null);
    } else {
      await db.fornecedores.add({
        ...dadosFornecedor,
        status: "ativo",
        createdAt: new Date().toISOString(),
      });
    }

    limparFormulario();
    setMostrarFormulario(false);
    carregarFornecedores();
  }

  function editarFornecedor(fornecedor) {
    setFornecedorEditando(fornecedor);
    setForm({
      nome: fornecedor.nome || "",
      cnpj: fornecedor.cnpj || "",
      email: fornecedor.email || "",
      telefone: fornecedor.telefone || "",
      tipoProduto: fornecedor.tipoProduto || "",
    });
    setMostrarFormulario(true);
  }

  async function excluirFornecedor(id) {
    const confirmar = confirm(
      "Tem certeza que deseja remover? Os dados serão perdidos.",
    );
    if (!confirmar) return;

    await db.fornecedores.update(id, {
      status: "deletado",
    });

    carregarFornecedores();
  }

  return (
    <>
      <AppHeader />

      <main className="min-h-screen bg-[#f5f7f2] p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-green-700 font-semibold">
                Cadastro de Parceiros
              </p>

              <h1
                className="text-4xl font-bold text-green-900 mt-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Fornecedores
              </h1>
            </div>

            <button
              onClick={() => {
                setFornecedorEditando(null);
                limparFormulario();
                setMostrarFormulario(true);
              }}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all"
            >
              + Novo Fornecedor
            </button>
          </div>

          {mostrarFormulario && (
            <div className="bg-white rounded-3xl shadow-md p-8 border border-green-100 mb-10">
              <h2 className="text-2xl font-bold text-green-900 mb-6">
                {fornecedorEditando
                  ? "Editar Fornecedor"
                  : "Cadastro de Fornecedor"}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nome do fornecedor *"
                  value={form.nome}
                  onChange={(e) => atualizarCampo("nome", e.target.value)}
                  required
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />

                <input
                  type="text"
                  placeholder="CNPJ"
                  value={form.cnpj}
                  onChange={(e) => atualizarCampo("cnpj", e.target.value)}
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />

                <input
                  type="email"
                  placeholder="E-mail"
                  value={form.email}
                  onChange={(e) => atualizarCampo("email", e.target.value)}
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />

                <input
                  type="text"
                  placeholder="Telefone"
                  value={form.telefone}
                  onChange={(e) => atualizarCampo("telefone", e.target.value)}
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />

                <select
                  value={form.tipoProduto}
                  onChange={(e) =>
                    atualizarCampo("tipoProduto", e.target.value)
                  }
                  required
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700 bg-white md:col-span-2"
                >
                  <option value="" disabled hidden>
                    Tipo de produto *
                  </option>
                  {tiposProduto.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={salvarFornecedor}
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl font-semibold"
                >
                  {fornecedorEditando
                    ? "Salvar Alterações"
                    : "Salvar Fornecedor"}
                </button>

                <button
                  onClick={() => {
                    setMostrarFormulario(false);
                    setFornecedorEditando(null);
                    limparFormulario();
                  }}
                  className="bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-2xl font-semibold"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}

          <div className="bg-white rounded-3xl shadow-md p-8 border border-green-100">
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Fornecedores Cadastrados
            </h2>

            {fornecedores.length === 0 ? (
              <p className="text-gray-600">
                Nenhum fornecedor cadastrado ainda.
              </p>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {fornecedores.map((fornecedor) => (
                  <div
                    key={fornecedor.id}
                    className="border border-green-100 rounded-3xl p-6 bg-[#f8faf6]"
                  >
                    <h3 className="text-xl font-bold text-green-900">
                      {fornecedor.nome}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      CNPJ: {fornecedor.cnpj || "Não informado"}
                    </p>

                    <p className="text-gray-600 mt-1">
                      E-mail: {fornecedor.email || "Não informado"}
                    </p>

                    <p className="text-gray-600 mt-1">
                      Telefone: {fornecedor.telefone || "Não informado"}
                    </p>

                    <p className="mt-4 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                      {fornecedor.tipoProduto}
                    </p>

                    <div className="flex gap-3 mt-6">
                      <button
                        onClick={() => editarFornecedor(fornecedor)}
                        className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-xl font-semibold text-sm transition-all"
                      >
                        Editar
                      </button>

                      <button
                        onClick={() => excluirFornecedor(fornecedor.id)}
                        className="bg-red-100 hover:bg-red-200 text-red-800 px-4 py-2 rounded-xl font-semibold text-sm transition-all"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
