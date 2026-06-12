"use client";

import { useEffect, useState } from "react";
import { db } from "../../../lib/fazendas-db";
import AppHeader from "../AppHeader";

const formInicial = {
  nome: "",
  tipo: "",
};

const tiposInsumo = ["Sanitário", "Alimentação", "Serviço"];

export default function Insumos() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [insumos, setInsumos] = useState([]);
  const [insumoEditando, setInsumoEditando] = useState(null);
  const [form, setForm] = useState(formInicial);

  async function carregarInsumos() {
    const lista = await db.insumos.orderBy("createdAt").reverse().toArray();
    setInsumos(lista.filter((insumo) => insumo.status !== "deletado"));
  }

  useEffect(() => {
    let componenteAtivo = true;

    async function carregarListaInicial() {
      const lista = await db.insumos.orderBy("createdAt").reverse().toArray();

      if (componenteAtivo) {
        setInsumos(lista.filter((insumo) => insumo.status !== "deletado"));
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

  async function salvarInsumo() {
    const dadosInsumo = {
      ...form,
      nome: form.nome.trim(),
      tipo: form.tipo.trim(),
    };

    if (!dadosInsumo.nome || !dadosInsumo.tipo) {
      alert("Preencha nome do insumo e tipo.");
      return;
    }

    if (insumoEditando) {
      await db.insumos.update(insumoEditando.id, {
        ...dadosInsumo,
        status: insumoEditando.status || "ativo",
      });
      setInsumoEditando(null);
    } else {
      await db.insumos.add({
        ...dadosInsumo,
        status: "ativo",
        createdAt: new Date().toISOString(),
      });
    }

    limparFormulario();
    setMostrarFormulario(false);
    carregarInsumos();
  }

  function editarInsumo(insumo) {
    setInsumoEditando(insumo);
    setForm({
      nome: insumo.nome || "",
      tipo: insumo.tipo || "",
    });
    setMostrarFormulario(true);
  }

  async function excluirInsumo(id) {
    const confirmar = confirm("Deseja excluir este insumo?");
    if (!confirmar) return;

    await db.insumos.update(id, {
      status: "deletado",
    });

    carregarInsumos();
  }

  return (
    <>
      <AppHeader />

      <main className="min-h-screen bg-[#f5f7f2] p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-green-700 font-semibold">
                Cadastro de Insumos
              </p>

              <h1
                className="text-4xl font-bold text-green-900 mt-2"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Insumos
              </h1>
            </div>

            <button
              onClick={() => {
                setInsumoEditando(null);
                limparFormulario();
                setMostrarFormulario(true);
              }}
              className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all"
            >
              + Novo Insumo
            </button>
          </div>

          {mostrarFormulario && (
            <div className="bg-white rounded-3xl shadow-md p-8 border border-green-100 mb-10">
              <h2 className="text-2xl font-bold text-green-900 mb-6">
                {insumoEditando ? "Editar Insumo" : "Cadastro de Insumo"}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nome do insumo *"
                  value={form.nome}
                  onChange={(e) => atualizarCampo("nome", e.target.value)}
                  required
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />

                <select
                  value={form.tipo}
                  onChange={(e) => atualizarCampo("tipo", e.target.value)}
                  required
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700 bg-white"
                >
                  <option value="" disabled hidden>
                    Tipo *
                  </option>
                  {tiposInsumo.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={salvarInsumo}
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl font-semibold"
                >
                  {insumoEditando ? "Salvar Alterações" : "Salvar Insumo"}
                </button>

                <button
                  onClick={() => {
                    setMostrarFormulario(false);
                    setInsumoEditando(null);
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
              Insumos Cadastrados
            </h2>

            {insumos.length === 0 ? (
              <p className="text-gray-600">Nenhum insumo cadastrado ainda.</p>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {insumos.map((insumo) => (
                  <div
                    key={insumo.id}
                    className="border border-green-100 rounded-3xl p-6 bg-[#f8faf6]"
                  >
                    <h3 className="text-xl font-bold text-green-900">
                      {insumo.nome}
                    </h3>

                    <p className="mt-4 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                      {insumo.tipo}
                    </p>

                    <div className="flex gap-3 mt-6">
                      <button
                        onClick={() => editarInsumo(insumo)}
                        className="bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-xl font-semibold text-sm transition-all"
                      >
                        Editar
                      </button>

                      <button
                        onClick={() => excluirInsumo(insumo.id)}
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
