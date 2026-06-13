"use client";

import { liveQuery } from "dexie";
import { useEffect, useMemo, useState } from "react";
import { db } from "../../../lib/fazendas-db";
import AppHeader from "../AppHeader";

const formLoteInicial = {
  numeroLote: "",
  fazenda: "",
  dataCriacao: "",
  finalidade: "",
  piquete: "",
  observacoes: "",
};

const formPiqueteInicial = {
  nome: "",
  fazenda: "",
  lote: "",
  area: "",
  capacidade: "",
  observacoes: "",
};

const inputClass =
  "border border-gray-200 rounded-2xl p-4 outline-none focus:border-green-700 bg-white";

const finalidades = ["Entrada", "Saida", "Movimentacao", "Morte"];

export default function LotesPiquetes() {
  const [fazendas, setFazendas] = useState([]);
  const [lotes, setLotes] = useState([]);
  const [piquetes, setPiquetes] = useState([]);
  const [animais, setAnimais] = useState([]);
  const [mostrarFormularioLote, setMostrarFormularioLote] = useState(false);
  const [mostrarFormularioPiquete, setMostrarFormularioPiquete] =
    useState(false);
  const [loteEditando, setLoteEditando] = useState(null);
  const [piqueteEditando, setPiqueteEditando] = useState(null);
  const [formLote, setFormLote] = useState(formLoteInicial);
  const [formPiquete, setFormPiquete] = useState(formPiqueteInicial);

  const lotesDisponiveis = useMemo(() => {
    if (!formPiquete.fazenda) return lotes;
    return lotes.filter((lote) => lote.fazenda === formPiquete.fazenda);
  }, [formPiquete.fazenda, lotes]);

  const piquetesDisponiveisParaLote = useMemo(() => {
    if (!formLote.fazenda) return piquetes;
    return piquetes.filter((piquete) => piquete.fazenda === formLote.fazenda);
  }, [formLote.fazenda, piquetes]);

  const quantidadeAnimaisPorLote = useMemo(() => {
    return lotes.reduce((mapa, lote) => {
      const identificadores = [lote.nome, lote.numeroLote].filter(Boolean);
      const quantidade = animais.filter(
        (animal) =>
          animal.status !== "deletado" && identificadores.includes(animal.lote),
      ).length;

      mapa[lote.id] = quantidade;
      return mapa;
    }, {});
  }, [animais, lotes]);

  async function carregarDados() {
    const [fazendasLista, lotesLista, piquetesLista, animaisLista] =
      await Promise.all([
        db.fazendas.orderBy("createdAt").reverse().toArray(),
        db.lotes.orderBy("createdAt").reverse().toArray(),
        db.piquetes.orderBy("createdAt").reverse().toArray(),
        db.animais.orderBy("createdAt").reverse().toArray(),
      ]);

    setFazendas(fazendasLista.filter((fazenda) => fazenda.status !== "deletado"));
    setLotes(lotesLista.filter((lote) => lote.status !== "deletado"));
    setPiquetes(
      piquetesLista.filter((piquete) => piquete.status !== "deletado"),
    );
    setAnimais(animaisLista.filter((animal) => animal.status !== "deletado"));
  }

  useEffect(() => {
    const assinatura = liveQuery(async () => {
      const [fazendasLista, lotesLista, piquetesLista, animaisLista] =
        await Promise.all([
          db.fazendas.orderBy("createdAt").reverse().toArray(),
          db.lotes.orderBy("createdAt").reverse().toArray(),
          db.piquetes.orderBy("createdAt").reverse().toArray(),
          db.animais.orderBy("createdAt").reverse().toArray(),
        ]);

      return {
        fazendas: fazendasLista.filter(
          (fazenda) => fazenda.status !== "deletado",
        ),
        lotes: lotesLista.filter((lote) => lote.status !== "deletado"),
        piquetes: piquetesLista.filter(
          (piquete) => piquete.status !== "deletado",
        ),
        animais: animaisLista.filter((animal) => animal.status !== "deletado"),
      };
    }).subscribe(({ fazendas, lotes, piquetes, animais }) => {
      setFazendas(fazendas);
      setLotes(lotes);
      setPiquetes(piquetes);
      setAnimais(animais);
    });

    return () => {
      assinatura.unsubscribe();
    };
  }, []);

  function atualizarLote(campo, valor) {
    setFormLote((formAtual) => ({
      ...formAtual,
      [campo]: valor,
      ...(campo === "fazenda" ? { piquete: "" } : {}),
    }));
  }

  function atualizarPiquete(campo, valor) {
    setFormPiquete((formAtual) => ({
      ...formAtual,
      [campo]: valor,
      ...(campo === "fazenda" ? { lote: "" } : {}),
    }));
  }

  function limparFormularioLote() {
    setFormLote(formLoteInicial);
  }

  function limparFormularioPiquete() {
    setFormPiquete(formPiqueteInicial);
  }

  async function salvarLote() {
    if (!formLote.numeroLote) {
      alert("Preencha o numero do lote.");
      return;
    }

    if (loteEditando) {
      await db.lotes.update(loteEditando.id, {
        ...formLote,
        nome: "",
        status: loteEditando.status || "ativo",
      });
      setLoteEditando(null);
    } else {
      await db.lotes.add({
        ...formLote,
        nome: "",
        status: "ativo",
        createdAt: new Date().toISOString(),
      });
    }

    limparFormularioLote();
    setMostrarFormularioLote(false);
    carregarDados();
  }

  async function salvarPiquete() {
    if (!formPiquete.nome) {
      alert("Preencha o nome do piquete.");
      return;
    }

    if (piqueteEditando) {
      await db.piquetes.update(piqueteEditando.id, {
        ...formPiquete,
        status: piqueteEditando.status || "ativo",
      });
      setPiqueteEditando(null);
    } else {
      await db.piquetes.add({
        ...formPiquete,
        status: "ativo",
        createdAt: new Date().toISOString(),
      });
    }

    limparFormularioPiquete();
    setMostrarFormularioPiquete(false);
    carregarDados();
  }

  function editarLote(lote) {
    setLoteEditando(lote);
    setFormLote({
      numeroLote: lote.numeroLote || "",
      fazenda: lote.fazenda || "",
      dataCriacao: lote.dataCriacao || "",
      finalidade: lote.finalidade || "",
      piquete: lote.piquete || "",
      observacoes: lote.observacoes || "",
    });
    setMostrarFormularioLote(true);
  }

  function editarPiquete(piquete) {
    setPiqueteEditando(piquete);
    setFormPiquete({
      nome: piquete.nome || "",
      fazenda: piquete.fazenda || "",
      lote: piquete.lote || "",
      area: piquete.area || "",
      capacidade: piquete.capacidade || "",
      observacoes: piquete.observacoes || "",
    });
    setMostrarFormularioPiquete(true);
  }

  async function excluirLote(id) {
    const confirmar = confirm("Deseja excluir este lote?");
    if (!confirmar) return;

    await db.lotes.update(id, {
      status: "deletado",
    });

    carregarDados();
  }

  async function excluirPiquete(id) {
    const confirmar = confirm("Deseja excluir este piquete?");
    if (!confirmar) return;

    await db.piquetes.update(id, {
      status: "deletado",
    });

    carregarDados();
  }

  return (
    <>
      <AppHeader />

      <main className="min-h-screen bg-[#f5f7f2] p-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-green-700">
                Gestao de Pastagens
              </p>

              <h1
                className="mt-2 text-4xl font-bold text-green-900"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Lotes e Piquetes
              </h1>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => {
                  setLoteEditando(null);
                  limparFormularioLote();
                  setMostrarFormularioLote(true);
                }}
                className="rounded-2xl bg-green-700 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-green-800"
              >
                + Novo Lote
              </button>

              <button
                onClick={() => {
                  setPiqueteEditando(null);
                  limparFormularioPiquete();
                  setMostrarFormularioPiquete(true);
                }}
                className="rounded-2xl bg-emerald-700 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-emerald-800"
              >
                + Novo Piquete
              </button>
            </div>
          </div>

          {mostrarFormularioLote && (
            <section className="mb-10 rounded-3xl border border-green-100 bg-white p-8 shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-green-900">
                {loteEditando ? "Editar Lote" : "Cadastro de Lote"}
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Numero do lote"
                  value={formLote.numeroLote}
                  onChange={(e) =>
                    atualizarLote("numeroLote", e.target.value)
                  }
                  className={inputClass}
                />

                <select
                  value={formLote.fazenda}
                  onChange={(e) => atualizarLote("fazenda", e.target.value)}
                  className={inputClass}
                >
                  <option value="" disabled hidden>
                    Fazenda
                  </option>

                  {fazendas.map((fazenda) => (
                    <option key={fazenda.id} value={fazenda.nome}>
                      {fazenda.nome}
                    </option>
                  ))}
                </select>

                <input
                  type="date"
                  value={formLote.dataCriacao}
                  onChange={(e) =>
                    atualizarLote("dataCriacao", e.target.value)
                  }
                  className={inputClass}
                />

                <select
                  value={formLote.finalidade}
                  onChange={(e) => atualizarLote("finalidade", e.target.value)}
                  className={inputClass}
                >
                  <option value="" disabled hidden>
                    Finalidade
                  </option>

                  {finalidades.map((finalidade) => (
                    <option key={finalidade} value={finalidade}>
                      {finalidade}
                    </option>
                  ))}
                </select>

                <select
                  value={formLote.piquete}
                  onChange={(e) => atualizarLote("piquete", e.target.value)}
                  className={inputClass}
                >
                  <option value="" disabled hidden>
                    Piquete atual
                  </option>

                  {piquetesDisponiveisParaLote.map((piquete) => (
                    <option key={piquete.id} value={piquete.nome}>
                      {piquete.nome}
                    </option>
                  ))}
                </select>

                <textarea
                  placeholder="Observacoes"
                  value={formLote.observacoes}
                  onChange={(e) => atualizarLote("observacoes", e.target.value)}
                  className={`${inputClass} min-h-[120px] md:col-span-2`}
                ></textarea>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={salvarLote}
                  className="rounded-2xl bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
                >
                  {loteEditando ? "Salvar Alteracoes" : "Salvar Lote"}
                </button>

                <button
                  onClick={() => {
                    setMostrarFormularioLote(false);
                    setLoteEditando(null);
                    limparFormularioLote();
                  }}
                  className="rounded-2xl bg-gray-200 px-6 py-3 font-semibold hover:bg-gray-300"
                >
                  Cancelar
                </button>
              </div>
            </section>
          )}

          {mostrarFormularioPiquete && (
            <section className="mb-10 rounded-3xl border border-green-100 bg-white p-8 shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-green-900">
                {piqueteEditando ? "Editar Piquete" : "Cadastro de Piquete"}
              </h2>

              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Nome do piquete"
                  value={formPiquete.nome}
                  onChange={(e) => atualizarPiquete("nome", e.target.value)}
                  className={inputClass}
                />

                <select
                  value={formPiquete.fazenda}
                  onChange={(e) => atualizarPiquete("fazenda", e.target.value)}
                  className={inputClass}
                >
                  <option value="" disabled hidden>
                    Fazenda
                  </option>

                  {fazendas.map((fazenda) => (
                    <option key={fazenda.id} value={fazenda.nome}>
                      {fazenda.nome}
                    </option>
                  ))}
                </select>

                <select
                  value={formPiquete.lote}
                  onChange={(e) => atualizarPiquete("lote", e.target.value)}
                  className={inputClass}
                >
                  <option value="" disabled hidden>
                    Lote
                  </option>

                  {lotesDisponiveis.map((lote) => (
                    <option
                      key={lote.id}
                      value={lote.numeroLote || lote.nome || ""}
                    >
                      Lote {lote.numeroLote || lote.nome}
                    </option>
                  ))}
                </select>

                <input
                  type="number"
                  min="0"
                  placeholder="Area em hectares"
                  value={formPiquete.area}
                  onChange={(e) => atualizarPiquete("area", e.target.value)}
                  className={inputClass}
                />

                <input
                  type="number"
                  min="0"
                  placeholder="Capacidade estimada"
                  value={formPiquete.capacidade}
                  onChange={(e) =>
                    atualizarPiquete("capacidade", e.target.value)
                  }
                  className={inputClass}
                />

                <textarea
                  placeholder="Observacoes"
                  value={formPiquete.observacoes}
                  onChange={(e) =>
                    atualizarPiquete("observacoes", e.target.value)
                  }
                  className={`${inputClass} min-h-[120px] md:col-span-2`}
                ></textarea>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={salvarPiquete}
                  className="rounded-2xl bg-green-700 px-6 py-3 font-semibold text-white hover:bg-green-800"
                >
                  {piqueteEditando ? "Salvar Alteracoes" : "Salvar Piquete"}
                </button>

                <button
                  onClick={() => {
                    setMostrarFormularioPiquete(false);
                    setPiqueteEditando(null);
                    limparFormularioPiquete();
                  }}
                  className="rounded-2xl bg-gray-200 px-6 py-3 font-semibold hover:bg-gray-300"
                >
                  Cancelar
                </button>
              </div>
            </section>
          )}

          <div className="grid gap-8 lg:grid-cols-2">
            <section className="rounded-3xl border border-green-100 bg-white p-8 shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-green-900">
                Lotes Cadastrados
              </h2>

              {lotes.length === 0 ? (
                <p className="text-gray-600">Nenhum lote cadastrado ainda.</p>
              ) : (
                <div className="grid gap-5">
                  {lotes.map((lote) => {
                    const quantidadeAnimais =
                      quantidadeAnimaisPorLote[lote.id] || 0;

                    return (
                      <article
                        key={lote.id}
                        className="rounded-3xl border border-green-100 bg-[#f8faf6] p-6"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
                              Lote {lote.numeroLote || "sem numero"}
                            </p>
                          </div>

                          <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-green-900 shadow-sm">
                            {quantidadeAnimais > 0
                              ? `${quantidadeAnimais} animais`
                              : "Vazio"}
                          </span>
                        </div>

                        <p className="mt-4 text-gray-600">
                          Fazenda: {lote.fazenda || "Nao informada"}
                        </p>

                        <p className="mt-1 text-gray-600">
                          Data de criacao:{" "}
                          {lote.dataCriacao || "Nao informada"}
                        </p>

                        <p className="mt-1 text-gray-600">
                          Finalidade: {lote.finalidade || "Nao informada"}
                        </p>

                        <p className="mt-1 text-gray-600">
                          Piquete atual: {lote.piquete || "Sem piquete"}
                        </p>

                        {lote.observacoes && (
                          <p className="mt-1 text-gray-600">
                            Observacoes: {lote.observacoes}
                          </p>
                        )}

                        <p className="mt-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
                          {lote.status || "ativo"}
                        </p>

                        <div className="mt-6 flex gap-3">
                          <button
                            onClick={() => editarLote(lote)}
                            className="rounded-xl bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800 transition-all hover:bg-blue-200"
                          >
                            Editar
                          </button>

                          <button
                            onClick={() => excluirLote(lote.id)}
                            className="rounded-xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-800 transition-all hover:bg-red-200"
                          >
                            Excluir Lote
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </section>

            <section className="rounded-3xl border border-green-100 bg-white p-8 shadow-md">
              <h2 className="mb-6 text-2xl font-bold text-green-900">
                Piquetes Cadastrados
              </h2>

              {piquetes.length === 0 ? (
                <p className="text-gray-600">
                  Nenhum piquete cadastrado ainda.
                </p>
              ) : (
                <div className="grid gap-5">
                  {piquetes.map((piquete) => (
                    <article
                      key={piquete.id}
                      className="rounded-3xl border border-green-100 bg-[#f8faf6] p-6"
                    >
                      <h3 className="text-xl font-bold text-green-900">
                        {piquete.nome}
                      </h3>

                      <p className="mt-2 text-gray-600">
                        Fazenda: {piquete.fazenda || "Nao informada"}
                      </p>

                      <p className="mt-1 text-gray-600">
                        Lote: {piquete.lote || "Nao informado"}
                      </p>

                      <p className="mt-1 text-gray-600">
                        Area:{" "}
                        {piquete.area ? `${piquete.area} ha` : "Nao informada"}
                      </p>

                      <p className="mt-1 text-gray-600">
                        Capacidade: {piquete.capacidade || "Nao informada"}
                      </p>

                      <p className="mt-4 inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-800">
                        {piquete.status || "ativo"}
                      </p>

                      <div className="mt-6 flex gap-3">
                        <button
                          onClick={() => editarPiquete(piquete)}
                          className="rounded-xl bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800 transition-all hover:bg-blue-200"
                        >
                          Editar
                        </button>

                        <button
                          onClick={() => excluirPiquete(piquete.id)}
                          className="rounded-xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-800 transition-all hover:bg-red-200"
                        >
                          Excluir Piquete
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
