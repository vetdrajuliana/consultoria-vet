"use client";

import { useEffect, useState } from "react";
import { db } from "../../../lib/fazendas-db";
import AppHeader from "../AppHeader";

const formInicial = {
  nome: "",
  tipo: "",
  funcao: "",
  telefone: "",
  email: "",
  documento: "",
  cidade: "",
  estado: "",
  observacoes: "",
};

export default function Pessoas() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [pessoas, setPessoas] = useState([]);
  const [pessoaEditando, setPessoaEditando] = useState(null);
  const [form, setForm] = useState(formInicial);

  async function carregarPessoas() {
    const lista = await db.pessoas.orderBy("createdAt").reverse().toArray();
    setPessoas(lista.filter((pessoa) => pessoa.status !== "deletado"));
  }

  useEffect(() => {
    let componenteAtivo = true;

    async function carregarListaInicial() {
      const lista = await db.pessoas.orderBy("createdAt").reverse().toArray();

      if (componenteAtivo) {
        setPessoas(lista.filter((pessoa) => pessoa.status !== "deletado"));
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

  async function salvarPessoa() {
    if (!form.nome) {
      alert("Preencha o nome da pessoa.");
      return;
    }

    if (pessoaEditando) {
      await db.pessoas.update(pessoaEditando.id, {
        ...form,
        status: pessoaEditando.status || "ativa",
      });
      setPessoaEditando(null);
    } else {
      await db.pessoas.add({
        ...form,
        status: "ativa",
        createdAt: new Date().toISOString(),
      });
    }

    limparFormulario();
    setMostrarFormulario(false);
    carregarPessoas();
  }

  function editarPessoa(pessoa) {
    setPessoaEditando(pessoa);
    setForm({
      nome: pessoa.nome || "",
      tipo: pessoa.tipo || "",
      funcao: pessoa.funcao || "",
      telefone: pessoa.telefone || "",
      email: pessoa.email || "",
      documento: pessoa.documento || "",
      cidade: pessoa.cidade || "",
      estado: pessoa.estado || "",
      observacoes: pessoa.observacoes || "",
    });
    setMostrarFormulario(true);
  }

  async function excluirPessoa(id) {
    const confirmar = confirm("Deseja excluir esta pessoa?");
    if (!confirmar) return;

    await db.pessoas.update(id, {
      status: "deletado",
    });

    carregarPessoas();
  }

  return (
    <>
      <AppHeader />

      <main className="min-h-screen bg-[#f5f7f2] p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-green-700 font-semibold">
                Cadastro e Contatos
              </p>

              <h1
                className="text-4xl font-bold text-green-900 mt-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Pessoas
              </h1>
            </div>

            <button
              onClick={() => {
                setPessoaEditando(null);
                limparFormulario();
                setMostrarFormulario(true);
              }}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all"
            >
              + Nova Pessoa
            </button>
          </div>

          {mostrarFormulario && (
            <div className="bg-white rounded-3xl shadow-md p-8 border border-green-100 mb-10">
              <h2 className="text-2xl font-bold text-green-900 mb-6">
                {pessoaEditando ? "Editar Pessoa" : "Cadastro de Pessoa"}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nome completo"
                  value={form.nome}
                  onChange={(e) => atualizarCampo("nome", e.target.value)}
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />

                <select
                  value={form.tipo}
                  onChange={(e) => atualizarCampo("tipo", e.target.value)}
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700 bg-white"
                >
                  <option value="" disabled hidden>
                    Tipo de pessoa
                  </option>
                  <option value="Cliente">Cliente</option>
                  <option value="Proprietario">Proprietario</option>
                  <option value="Funcionario">Funcionario</option>
                  <option value="Fornecedor">Fornecedor</option>
                  <option value="Tecnico">Tecnico</option>
                  <option value="Outro">Outro</option>
                </select>

                <input
                  type="text"
                  placeholder="Funcao / cargo"
                  value={form.funcao}
                  onChange={(e) => atualizarCampo("funcao", e.target.value)}
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />

                <input
                  type="text"
                  placeholder="Telefone / WhatsApp"
                  value={form.telefone}
                  onChange={(e) => atualizarCampo("telefone", e.target.value)}
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
                  placeholder="CPF/CNPJ ou documento"
                  value={form.documento}
                  onChange={(e) => atualizarCampo("documento", e.target.value)}
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />

                <input
                  type="text"
                  placeholder="Cidade"
                  value={form.cidade}
                  onChange={(e) => atualizarCampo("cidade", e.target.value)}
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />

                <input
                  type="text"
                  placeholder="Estado"
                  value={form.estado}
                  onChange={(e) => atualizarCampo("estado", e.target.value)}
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />

                <textarea
                  placeholder="Observacoes"
                  value={form.observacoes}
                  onChange={(e) => atualizarCampo("observacoes", e.target.value)}
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700 md:col-span-2 min-h-[120px]"
                ></textarea>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={salvarPessoa}
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl font-semibold"
                >
                  {pessoaEditando ? "Salvar Alteracoes" : "Salvar Pessoa"}
                </button>

                <button
                  onClick={() => {
                    setMostrarFormulario(false);
                    setPessoaEditando(null);
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
              Pessoas Cadastradas
            </h2>

            {pessoas.length === 0 ? (
              <p className="text-gray-600">Nenhuma pessoa cadastrada ainda.</p>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {pessoas.map((pessoa) => (
                  <div
                    key={pessoa.id}
                    className="border border-green-100 rounded-3xl p-6 bg-[#f8faf6]"
                  >
                    <h3 className="text-xl font-bold text-green-900">
                      {pessoa.nome}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Tipo: {pessoa.tipo || "Nao informado"}
                    </p>

                    <p className="text-gray-600 mt-1">
                      Funcao: {pessoa.funcao || "Nao informada"}
                    </p>

                    <p className="text-gray-600 mt-1">
                      Telefone: {pessoa.telefone || "Nao informado"}
                    </p>

                    <p className="text-gray-600 mt-1">
                      Cidade: {pessoa.cidade || "Nao informada"}
                    </p>

                    <p className="mt-4 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                      {pessoa.status || "ativa"}
                    </p>

                    <div className="flex gap-3 mt-6">
                      <button
                        onClick={() => editarPessoa(pessoa)}
                        className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-xl font-semibold text-sm transition-all"
                      >
                        Editar
                      </button>

                      <button
                        onClick={() => excluirPessoa(pessoa.id)}
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
