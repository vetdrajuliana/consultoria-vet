"use client";

import { liveQuery } from "dexie";
import { useEffect, useMemo, useState } from "react";
import AppHeader from "../../AppHeader";
import { db } from "../../../../lib/fazendas-db";

function hojeISO() {
  return new Date().toISOString().slice(0, 10);
}

function numero(valor, casas = 2) {
  const valorNumerico = Number(valor);

  if (!Number.isFinite(valorNumerico)) {
    return "0";
  }

  return valorNumerico.toLocaleString("pt-BR", {
    minimumFractionDigits: casas,
    maximumFractionDigits: casas,
  });
}

function normalizarTexto(valor) {
  return String(valor || "")
    .trim()
    .toLowerCase();
}

function nomeLote(lote) {
  return lote?.numeroLote ? `Lote ${lote.numeroLote}` : lote?.nome || "Lote";
}

function nomePiquete(piquete) {
  return piquete?.nome || "Sem piquete";
}

function loteEstaNoPiquete(lote, piquete) {
  if (!lote) {
    return false;
  }

  if (!piquete) {
    return !lote.piquete && !lote.piqueteId;
  }

  return (
    String(lote.piqueteId || "") === String(piquete.id || "") ||
    normalizarTexto(lote.piquete) === normalizarTexto(piquete.nome)
  );
}

function animaisDoLote(lote, animais) {
  const identificadores = [lote?.numeroLote, lote?.nome]
    .filter(Boolean)
    .map(normalizarTexto);

  return animais.filter(
    (animal) =>
      animal.status !== "deletado" &&
      identificadores.includes(normalizarTexto(animal.lote)),
  );
}

function calcularConsumo(animais, percentualPesoVivo, percentualMateriaSeca) {
  const animaisComPeso = animais
    .map((animal) => Number(animal.peso))
    .filter((peso) => Number.isFinite(peso) && peso > 0);

  const pesoVivoTotal = animaisComPeso.reduce((total, peso) => total + peso, 0);
  const consumoMsLote = pesoVivoTotal * (Number(percentualPesoVivo) / 100 || 0);
  const fracaoMateriaSeca = Number(percentualMateriaSeca) / 100 || 0;
  const consumoMnLote =
    fracaoMateriaSeca > 0 ? consumoMsLote / fracaoMateriaSeca : 0;
  const quantidadeComPeso = animaisComPeso.length;

  return {
    consumoMnAnimal:
      quantidadeComPeso > 0 ? consumoMnLote / quantidadeComPeso : 0,
    consumoMnLote,
    consumoMsAnimal:
      quantidadeComPeso > 0 ? consumoMsLote / quantidadeComPeso : 0,
    consumoMsLote,
    pesoVivoMedio:
      quantidadeComPeso > 0 ? pesoVivoTotal / quantidadeComPeso : 0,
    pesoVivoTotal,
    quantidadeComPeso,
  };
}

function gerarTratos(consumoMsLote, consumoMnLote, tratosPorDia) {
  const quantidadeTratos = Number(tratosPorDia) || 1;

  return Array.from({ length: quantidadeTratos }, (_, indice) => ({
    numero: indice + 1,
    consumoMn: consumoMnLote / quantidadeTratos,
    consumoMs: consumoMsLote / quantidadeTratos,
  }));
}

export default function ConsumoLotePage() {
  const [lotes, setLotes] = useState([]);
  const [piquetes, setPiquetes] = useState([]);
  const [animais, setAnimais] = useState([]);
  const [consumos, setConsumos] = useState([]);
  const [loteSelecionadoId, setLoteSelecionadoId] = useState(null);
  const [form, setForm] = useState({
    data: hojeISO(),
    percentualMateriaSeca: "50",
    percentualPesoVivo: "2.5",
    tratosPorDia: "1",
    observacoes: "",
  });

  useEffect(() => {
    const assinatura = liveQuery(async () => {
      const [lotesDb, piquetesDb, animaisDb, consumosDb] = await Promise.all([
        db.lotes.orderBy("createdAt").reverse().toArray(),
        db.piquetes.orderBy("nome").toArray(),
        db.animais.orderBy("createdAt").reverse().toArray(),
        db.consumosLote.orderBy("data").reverse().toArray(),
      ]);

      return {
        animais: animaisDb.filter((animal) => animal.status !== "deletado"),
        consumos: consumosDb,
        lotes: lotesDb.filter((lote) => lote.status !== "deletado"),
        piquetes: piquetesDb.filter((piquete) => piquete.status !== "deletado"),
      };
    }).subscribe(({ lotes, piquetes, animais, consumos }) => {
      setLotes(lotes);
      setPiquetes(piquetes);
      setAnimais(animais);
      setConsumos(consumos);
      setLoteSelecionadoId((idAtual) => idAtual || lotes[0]?.id || null);
    });

    return () => {
      assinatura.unsubscribe();
    };
  }, []);

  const loteSelecionado = useMemo(
    () => lotes.find((lote) => String(lote.id) === String(loteSelecionadoId)),
    [loteSelecionadoId, lotes],
  );

  const animaisSelecionados = useMemo(
    () => (loteSelecionado ? animaisDoLote(loteSelecionado, animais) : []),
    [animais, loteSelecionado],
  );

  const piqueteSelecionado = useMemo(
    () => piquetes.find((piquete) => loteEstaNoPiquete(loteSelecionado, piquete)),
    [loteSelecionado, piquetes],
  );

  const piquetesComLotes = useMemo(() => {
    const grupos = piquetes.map((piquete) => ({
      id: `piquete-${piquete.id}`,
      nome: nomePiquete(piquete),
      piquete,
      lotes: lotes.filter((lote) => loteEstaNoPiquete(lote, piquete)),
    }));

    const lotesSemPiquete = lotes.filter(
      (lote) => !piquetes.some((piquete) => loteEstaNoPiquete(lote, piquete)),
    );

    if (lotesSemPiquete.length > 0) {
      grupos.push({
        id: "sem-piquete",
        nome: "Sem piquete",
        piquete: null,
        lotes: lotesSemPiquete,
      });
    }

    return grupos;
  }, [lotes, piquetes]);

  const consumoCalculado = useMemo(
    () =>
      calcularConsumo(
        animaisSelecionados,
        form.percentualPesoVivo,
        form.percentualMateriaSeca,
      ),
    [animaisSelecionados, form.percentualMateriaSeca, form.percentualPesoVivo],
  );

  const consumosDoLote = useMemo(
    () =>
      consumos
        .filter((consumo) => String(consumo.loteId) === String(loteSelecionadoId))
        .slice(0, 8),
    [consumos, loteSelecionadoId],
  );

  const tratosDoDia = useMemo(
    () =>
      gerarTratos(
        consumoCalculado.consumoMsLote,
        consumoCalculado.consumoMnLote,
        form.tratosPorDia,
      ),
    [consumoCalculado.consumoMnLote, consumoCalculado.consumoMsLote, form.tratosPorDia],
  );

  function atualizarCampo(campo, valor) {
    setForm((formAtual) => ({
      ...formAtual,
      [campo]: valor,
    }));
  }

  async function salvarConsumo() {
    if (!loteSelecionado) {
      alert("Selecione um lote.");
      return;
    }

    if (animaisSelecionados.length === 0) {
      alert("Este lote esta vazio. Cadastre animais no lote antes de salvar consumo.");
      return;
    }

    if (consumoCalculado.quantidadeComPeso === 0) {
      alert("Informe o peso dos animais deste lote para calcular o consumo.");
      return;
    }

    await db.consumosLote.add({
      ...consumoCalculado,
      data: form.data,
      loteId: loteSelecionado.id,
      loteNumero: loteSelecionado.numeroLote || loteSelecionado.nome || "",
      piqueteId: piqueteSelecionado?.id || loteSelecionado.piqueteId || "",
      piqueteNome: piqueteSelecionado?.nome || loteSelecionado.piquete || "",
      observacoes: form.observacoes,
      percentualMateriaSeca: Number(form.percentualMateriaSeca),
      percentualPesoVivo: Number(form.percentualPesoVivo),
      quantidadeAnimais: animaisSelecionados.length,
      tratos: tratosDoDia,
      tratosPorDia: Number(form.tratosPorDia),
      createdAt: new Date().toISOString(),
    });

    setForm((formAtual) => ({
      ...formAtual,
      data: hojeISO(),
      observacoes: "",
    }));
  }

  return (
    <>
      <AppHeader />

      <main className="min-h-screen bg-[#f5f7f2] p-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="font-semibold text-green-700">Nutricao</p>

            <h1
              className="mt-2 text-4xl font-bold text-green-900"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Consumo por lote
            </h1>
            <p className="mt-3 max-w-3xl text-gray-600">
              Lance o consumo diario do lote e escolha quantos tratos serao
              fornecidos no dia.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
            <aside className="rounded-3xl border border-green-100 bg-white p-5 shadow-md">
              <h2 className="text-xl font-bold text-green-950">
                Piquetes e lotes
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Escolha o piquete e depois o lote para lancar o consumo.
              </p>

              <div className="mt-5 space-y-4">
                {lotes.length === 0 ? (
                  <p className="rounded-2xl bg-green-50 p-4 text-sm text-green-900">
                    Nenhum lote cadastrado ainda.
                  </p>
                ) : (
                  piquetesComLotes.map((grupo) => (
                    <div
                      key={grupo.id}
                      className="rounded-2xl border border-green-100 bg-[#f8faf6] p-3"
                    >
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <h3 className="font-bold text-green-950">{grupo.nome}</h3>
                        <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-green-800">
                          {grupo.lotes.length} lote{grupo.lotes.length === 1 ? "" : "s"}
                        </span>
                      </div>

                      {grupo.lotes.length === 0 ? (
                        <p className="rounded-xl bg-white p-3 text-sm text-gray-500">
                          Nenhum lote neste piquete.
                        </p>
                      ) : (
                        <div className="space-y-2">
                          {grupo.lotes.map((lote) => {
                            const animaisLote = animaisDoLote(lote, animais);
                            const ativo =
                              String(lote.id) === String(loteSelecionadoId);

                            return (
                              <button
                                key={lote.id}
                                type="button"
                                onClick={() => setLoteSelecionadoId(lote.id)}
                                className={`w-full rounded-xl border px-4 py-3 text-left transition ${
                                  ativo
                                    ? "border-green-700 bg-green-900 text-white shadow-md"
                                    : "border-green-100 bg-white text-green-950 hover:border-green-300"
                                }`}
                              >
                                <span className="block font-bold">
                                  {nomeLote(lote)}
                                </span>
                                <span
                                  className={
                                    ativo
                                      ? "text-sm text-white/75"
                                      : "text-sm text-gray-500"
                                  }
                                >
                                  {animaisLote.length > 0
                                    ? `${animaisLote.length} animais`
                                    : "Vazio"}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </aside>

            <section className="space-y-6">
              <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
                      Lote selecionado
                    </p>
                    <h2 className="mt-1 text-3xl font-bold text-green-950">
                      {loteSelecionado ? nomeLote(loteSelecionado) : "Selecione um lote"}
                    </h2>
                    <p className="mt-2 text-gray-600">
                      {loteSelecionado?.fazenda || "Fazenda nao informada"}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-green-700">
                      Piquete:{" "}
                      {piqueteSelecionado?.nome ||
                        loteSelecionado?.piquete ||
                        "Nao informado"}
                    </p>
                  </div>

                  <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-800">
                    {animaisSelecionados.length > 0
                      ? `${animaisSelecionados.length} animais`
                      : "Vazio"}
                  </span>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-4">
                  <div className="rounded-2xl bg-[#f8faf6] p-4">
                    <p className="text-sm font-semibold text-gray-500">
                      Peso vivo total
                    </p>
                    <p className="mt-2 text-2xl font-bold text-green-950">
                      {numero(consumoCalculado.pesoVivoTotal, 0)} kg
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f8faf6] p-4">
                    <p className="text-sm font-semibold text-gray-500">
                      Peso medio
                    </p>
                    <p className="mt-2 text-2xl font-bold text-green-950">
                      {numero(consumoCalculado.pesoVivoMedio, 0)} kg
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f8faf6] p-4">
                    <p className="text-sm font-semibold text-gray-500">
                      Consumo MS animal
                    </p>
                    <p className="mt-2 text-2xl font-bold text-green-950">
                      {numero(consumoCalculado.consumoMsAnimal)} kg
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#f8faf6] p-4">
                    <p className="text-sm font-semibold text-gray-500">
                      Consumo MN animal
                    </p>
                    <p className="mt-2 text-2xl font-bold text-green-950">
                      {numero(consumoCalculado.consumoMnAnimal)} kg
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
                <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-md">
                  <h2 className="text-2xl font-bold text-green-950">
                    Lancamento diario
                  </h2>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <label>
                      <span className="mb-2 block text-sm font-semibold text-gray-600">
                        Data
                      </span>
                      <input
                        type="date"
                        value={form.data}
                        onChange={(event) => atualizarCampo("data", event.target.value)}
                        className="w-full rounded-2xl border border-gray-200 bg-white p-4 outline-none focus:border-green-700"
                      />
                    </label>

                    <label>
                      <span className="mb-2 block text-sm font-semibold text-gray-600">
                        % Peso Vivo
                      </span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={form.percentualPesoVivo}
                        onChange={(event) =>
                          atualizarCampo("percentualPesoVivo", event.target.value)
                        }
                        className="w-full rounded-2xl border border-gray-200 bg-white p-4 outline-none focus:border-green-700"
                      />
                    </label>

                    <label>
                      <span className="mb-2 block text-sm font-semibold text-gray-600">
                        % Materia seca da dieta
                      </span>
                      <input
                        type="number"
                        min="0"
                        max="100"
                        step="0.01"
                        value={form.percentualMateriaSeca}
                        onChange={(event) =>
                          atualizarCampo("percentualMateriaSeca", event.target.value)
                        }
                        className="w-full rounded-2xl border border-gray-200 bg-white p-4 outline-none focus:border-green-700"
                      />
                    </label>

                    <div>
                      <span className="mb-2 block text-sm font-semibold text-gray-600">
                        Tratos por dia
                      </span>
                      <div className="grid grid-cols-4 gap-2">
                        {[1, 2, 3, 4].map((quantidade) => {
                          const ativo = String(form.tratosPorDia) === String(quantidade);

                          return (
                            <button
                              key={quantidade}
                              type="button"
                              onClick={() =>
                                atualizarCampo("tratosPorDia", String(quantidade))
                              }
                              className={`rounded-2xl border p-4 text-center font-bold transition ${
                                ativo
                                  ? "border-green-700 bg-green-900 text-white shadow-md"
                                  : "border-gray-200 bg-white text-green-950 hover:border-green-300"
                              }`}
                            >
                              {quantidade}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <label>
                      <span className="mb-2 block text-sm font-semibold text-gray-600">
                        Observacoes
                      </span>
                      <input
                        type="text"
                        value={form.observacoes}
                        onChange={(event) =>
                          atualizarCampo("observacoes", event.target.value)
                        }
                        className="w-full rounded-2xl border border-gray-200 bg-white p-4 outline-none focus:border-green-700"
                        placeholder="Opcional"
                      />
                    </label>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl bg-green-50 p-5">
                      <p className="text-sm font-semibold text-green-700">
                        Consumo total em MS
                      </p>
                      <p className="mt-2 text-3xl font-bold text-green-950">
                        {numero(consumoCalculado.consumoMsLote)} kg
                      </p>
                    </div>

                    <div className="rounded-2xl bg-green-50 p-5">
                      <p className="text-sm font-semibold text-green-700">
                        Consumo total em MN
                      </p>
                      <p className="mt-2 text-3xl font-bold text-green-950">
                        {numero(consumoCalculado.consumoMnLote)} kg
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-lg font-bold text-green-950">
                      Divisao dos tratos
                    </h3>
                    <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                      {tratosDoDia.map((trato) => (
                        <div
                          key={trato.numero}
                          className="rounded-2xl border border-green-100 bg-[#f8faf6] p-4"
                        >
                          <p className="text-sm font-semibold text-green-700">
                            Trato {trato.numero}
                          </p>
                          <p className="mt-2 font-bold text-green-950">
                            {numero(trato.consumoMn)} kg MN
                          </p>
                          <p className="text-sm text-gray-600">
                            {numero(trato.consumoMs)} kg MS
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {animaisSelecionados.length > consumoCalculado.quantidadeComPeso && (
                    <p className="mt-4 rounded-2xl bg-yellow-50 p-4 text-sm font-semibold text-yellow-800">
                      Existem animais sem peso informado neste lote. Eles aparecem na
                      contagem, mas nao entram no calculo de consumo.
                    </p>
                  )}

                  <button
                    type="button"
                    onClick={salvarConsumo}
                    disabled={!loteSelecionado || animaisSelecionados.length === 0}
                    className="mt-6 rounded-2xl bg-green-700 px-6 py-3 font-bold text-white shadow-md transition hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-300"
                  >
                    Salvar consumo diario
                  </button>
                </div>

                <aside className="rounded-3xl border border-green-100 bg-white p-6 shadow-md">
                  <h2 className="text-xl font-bold text-green-950">
                    Historico recente
                  </h2>

                  {consumosDoLote.length === 0 ? (
                    <p className="mt-4 rounded-2xl bg-[#f8faf6] p-4 text-sm text-gray-600">
                      Nenhum consumo salvo para este lote.
                    </p>
                  ) : (
                    <div className="mt-4 space-y-3">
                      {consumosDoLote.map((consumo) => (
                        <div
                          key={consumo.id}
                          className="rounded-2xl border border-green-100 bg-[#f8faf6] p-4"
                        >
                          <p className="font-bold text-green-950">
                            {new Date(`${consumo.data}T00:00:00`).toLocaleDateString(
                              "pt-BR",
                            )}
                          </p>
                          <p className="mt-1 text-sm text-gray-600">
                            MS lote: {numero(consumo.consumoMsLote)} kg
                          </p>
                          <p className="text-sm text-gray-600">
                            MN lote: {numero(consumo.consumoMnLote)} kg
                          </p>
                          <p className="text-sm text-gray-600">
                            %PV: {numero(consumo.percentualPesoVivo)}%
                          </p>
                          <p className="text-sm text-gray-600">
                            Tratos: {consumo.tratosPorDia || 1} por dia
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </aside>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
