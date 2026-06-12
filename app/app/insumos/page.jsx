"use client";

import { useEffect, useState } from "react";
import { db } from "../../../lib/fazendas-db";
import AppHeader from "../AppHeader";

const formInicial = {
  nome: "",
  nomeGenerico: "",
  tipo: "",
  unidadeMedida: "",
};

const entradaInicial = {
  insumoId: "",
  notaFiscal: "",
  quantidade: "",
  unidadeMedida: "",
  dataEntrada: "",
};

const tiposInsumo = ["Sanitário", "Alimentação", "Serviço"];
const unidadesMedida = ["mL", "L", "kg", "ton"];

export default function Insumos() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarEntrada, setMostrarEntrada] = useState(false);
  const [insumos, setInsumos] = useState([]);
  const [entradas, setEntradas] = useState([]);
  const [insumoEditando, setInsumoEditando] = useState(null);
  const [form, setForm] = useState(formInicial);
  const [entrada, setEntrada] = useState(entradaInicial);

  async function carregarInsumos() {
    const lista = await db.insumos.orderBy("createdAt").reverse().toArray();
    setInsumos(lista.filter((insumo) => insumo.status !== "deletado"));
  }

  async function carregarEntradas() {
    const lista = await db.insumoEntradas
      .orderBy("createdAt")
      .reverse()
      .toArray();
    setEntradas(lista);
  }

  async function carregarDados() {
    await Promise.all([carregarInsumos(), carregarEntradas()]);
  }

  useEffect(() => {
    let componenteAtivo = true;

    async function carregarListaInicial() {
      const [listaInsumos, listaEntradas] = await Promise.all([
        db.insumos.orderBy("createdAt").reverse().toArray(),
        db.insumoEntradas.orderBy("createdAt").reverse().toArray(),
      ]);

      if (componenteAtivo) {
        setInsumos(
          listaInsumos.filter((insumo) => insumo.status !== "deletado"),
        );
        setEntradas(listaEntradas);
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

  function atualizarEntrada(campo, valor) {
    setEntrada((entradaAtual) => ({
      ...entradaAtual,
      [campo]: valor,
    }));
  }

  function limparFormulario() {
    setForm(formInicial);
  }

  function limparEntrada() {
    setEntrada(entradaInicial);
  }

  async function salvarInsumo() {
    const dadosInsumo = {
      ...form,
      nome: form.nome.trim(),
      nomeGenerico: form.nomeGenerico.trim(),
      tipo: form.tipo.trim(),
      unidadeMedida: form.unidadeMedida.trim(),
    };

    if (
      !dadosInsumo.nome ||
      !dadosInsumo.nomeGenerico ||
      !dadosInsumo.tipo ||
      !dadosInsumo.unidadeMedida
    ) {
      alert("Preencha nome do insumo, nome genérico, tipo e unidade de medida.");
      return;
    }

    if (insumoEditando) {
      await db.insumos.update(insumoEditando.id, {
        ...dadosInsumo,
        estoque: insumoEditando.estoque || 0,
        status: insumoEditando.status || "ativo",
      });
      setInsumoEditando(null);
    } else {
      await db.insumos.add({
        ...dadosInsumo,
        estoque: 0,
        status: "ativo",
        createdAt: new Date().toISOString(),
      });
    }

    limparFormulario();
    setMostrarFormulario(false);
    carregarInsumos();
  }

  async function salvarEntrada() {
    const quantidade = Number(entrada.quantidade);
    const insumo = insumos.find(
      (item) => String(item.id) === String(entrada.insumoId),
    );
    const unidadeMedida = entrada.unidadeMedida || insumo?.unidadeMedida || "";

    if (!insumo || !entrada.notaFiscal.trim() || !quantidade || !unidadeMedida) {
      alert("Preencha insumo, nota fiscal, quantidade e unidade de medida.");
      return;
    }

    if (quantidade <= 0) {
      alert("A quantidade deve ser maior que zero.");
      return;
    }

    await db.insumoEntradas.add({
      insumoId: insumo.id,
      insumoNome: insumo.nome,
      notaFiscal: entrada.notaFiscal.trim(),
      quantidade,
      unidadeMedida,
      dataEntrada: entrada.dataEntrada || new Date().toISOString().slice(0, 10),
      createdAt: new Date().toISOString(),
    });

    await db.insumos.update(insumo.id, {
      estoque: Number(insumo.estoque || 0) + quantidade,
      unidadeMedida: insumo.unidadeMedida || unidadeMedida,
    });

    limparEntrada();
    setMostrarEntrada(false);
    carregarDados();
  }

  function editarInsumo(insumo) {
    setInsumoEditando(insumo);
    setForm({
      nome: insumo.nome || "",
      nomeGenerico: insumo.nomeGenerico || "",
      tipo: insumo.tipo || "",
      unidadeMedida: insumo.unidadeMedida || "",
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
          <div className="flex items-center justify-between gap-4 mb-10">
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

            <div className="flex gap-3">
              <button
                onClick={() => {
                  limparEntrada();
                  setMostrarEntrada(true);
                }}
                className="bg-white hover:bg-green-50 text-green-800 border border-green-200 px-6 py-3 rounded-2xl font-semibold shadow-sm transition-all"
              >
                + Cadastro Nota Fiscal
              </button>

              <button
                onClick={() => {
                  setInsumoEditando(null);
                  limparFormulario();
                  setMostrarFormulario(true);
                }}
                className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg transition-all"
              >
                + Cadastro de Insumos
              </button>
            </div>
          </div>

          {mostrarFormulario && (
            <div className="bg-white rounded-3xl shadow-md p-8 border border-green-100 mb-10">
              <h2 className="text-2xl font-bold text-green-900 mb-6">
                {insumoEditando ? "Editar Insumo" : "Cadastro de Insumo"}
              </h2>

              <div className="grid md:grid-cols-4 gap-6">
                <input
                  type="text"
                  placeholder="Nome do insumo *"
                  value={form.nome}
                  onChange={(e) => atualizarCampo("nome", e.target.value)}
                  required
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />

                <input
                  type="text"
                  placeholder="Nome genérico *"
                  value={form.nomeGenerico}
                  onChange={(e) =>
                    atualizarCampo("nomeGenerico", e.target.value)
                  }
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

                <select
                  value={form.unidadeMedida}
                  onChange={(e) =>
                    atualizarCampo("unidadeMedida", e.target.value)
                  }
                  required
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700 bg-white"
                >
                  <option value="" disabled hidden>
                    Unidade de medida *
                  </option>
                  {unidadesMedida.map((unidade) => (
                    <option key={unidade} value={unidade}>
                      {unidade}
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

          {mostrarEntrada && (
            <div className="bg-white rounded-3xl shadow-md p-8 border border-green-100 mb-10">
              <h2 className="text-2xl font-bold text-green-900 mb-6">
                Cadastro Nota Fiscal
              </h2>

              <div className="grid md:grid-cols-5 gap-6">
                <select
                  value={entrada.insumoId}
                  onChange={(e) => {
                    const insumoSelecionado = insumos.find(
                      (insumo) => String(insumo.id) === e.target.value,
                    );

                    setEntrada((entradaAtual) => ({
                      ...entradaAtual,
                      insumoId: e.target.value,
                      unidadeMedida: insumoSelecionado?.unidadeMedida || "",
                    }));
                  }}
                  required
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700 bg-white"
                >
                  <option value="" disabled hidden>
                    Insumo *
                  </option>
                  {insumos.map((insumo) => (
                    <option key={insumo.id} value={insumo.id}>
                      {insumo.nome} - {insumo.nomeGenerico || "sem genérico"}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  placeholder="Nota fiscal *"
                  value={entrada.notaFiscal}
                  onChange={(e) =>
                    atualizarEntrada("notaFiscal", e.target.value)
                  }
                  required
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="Quantidade *"
                  value={entrada.quantidade}
                  onChange={(e) =>
                    atualizarEntrada("quantidade", e.target.value)
                  }
                  required
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />

                <select
                  value={entrada.unidadeMedida}
                  onChange={(e) =>
                    atualizarEntrada("unidadeMedida", e.target.value)
                  }
                  required
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700 bg-white"
                >
                  <option value="" disabled hidden>
                    Unidade *
                  </option>
                  {unidadesMedida.map((unidade) => (
                    <option key={unidade} value={unidade}>
                      {unidade}
                    </option>
                  ))}
                </select>

                <input
                  type="date"
                  value={entrada.dataEntrada}
                  onChange={(e) =>
                    atualizarEntrada("dataEntrada", e.target.value)
                  }
                  className="border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700"
                />
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={salvarEntrada}
                  className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-2xl font-semibold"
                >
                  Salvar Entrada
                </button>

                <button
                  onClick={() => {
                    setMostrarEntrada(false);
                    limparEntrada();
                  }}
                  className="bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-2xl font-semibold"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}

          <div className="bg-white rounded-3xl shadow-md p-8 border border-green-100 mb-10">
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

                    <p className="text-gray-600 mt-2">
                      Nome genérico: {insumo.nomeGenerico || "Não informado"}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <p className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                        {insumo.tipo}
                      </p>

                      <p className="inline-block bg-white text-green-900 border border-green-200 px-4 py-2 rounded-full text-sm font-semibold">
                        Estoque: {Number(insumo.estoque || 0)}{" "}
                        {insumo.unidadeMedida || ""}
                      </p>
                    </div>

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

          <div className="bg-white rounded-3xl shadow-md p-8 border border-green-100">
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Entradas por Nota Fiscal
            </h2>

            {entradas.length === 0 ? (
              <p className="text-gray-600">Nenhuma entrada cadastrada ainda.</p>
            ) : (
              <div className="grid md:grid-cols-3 gap-6">
                {entradas.map((item) => (
                  <div
                    key={item.id}
                    className="border border-green-100 rounded-3xl p-6 bg-[#f8faf6]"
                  >
                    <h3 className="text-xl font-bold text-green-900">
                      {item.insumoNome}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Nota fiscal: {item.notaFiscal}
                    </p>

                    <p className="text-gray-600 mt-1">
                      Quantidade: {item.quantidade} {item.unidadeMedida || ""}
                    </p>

                    <p className="text-gray-600 mt-1">
                      Data: {item.dataEntrada || "Não informada"}
                    </p>
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
