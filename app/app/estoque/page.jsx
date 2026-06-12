"use client";

import { useEffect, useState } from "react";
import { db } from "../../../lib/fazendas-db";
import AppHeader from "../AppHeader";

export default function Estoque() {
  const [insumos, setInsumos] = useState([]);
  const [entradas, setEntradas] = useState([]);

  useEffect(() => {
    let componenteAtivo = true;

    async function carregarEstoque() {
      const [listaInsumos, listaEntradas] = await Promise.all([
        db.insumos.orderBy("nome").toArray(),
        db.insumoEntradas.orderBy("createdAt").reverse().toArray(),
      ]);

      if (componenteAtivo) {
        setInsumos(
          listaInsumos.filter((insumo) => insumo.status !== "deletado"),
        );
        setEntradas(listaEntradas);
      }
    }

    carregarEstoque();

    return () => {
      componenteAtivo = false;
    };
  }, []);

  return (
    <>
      <AppHeader />

      <main className="min-h-screen bg-[#f5f7f2] p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-green-700 font-semibold">
              Controle de Insumos
            </p>

            <h1
              className="text-4xl font-bold text-green-900 mt-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Estoque
            </h1>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-8 border border-green-100 mb-10">
            <h2 className="text-2xl font-bold text-green-900 mb-6">
              Estoque Atual
            </h2>

            {insumos.length === 0 ? (
              <p className="text-gray-600">
                Nenhum insumo cadastrado no estoque ainda.
              </p>
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

                    <p className="text-gray-600 mt-1">
                      Tipo: {insumo.tipo || "Não informado"}
                    </p>

                    <p className="mt-4 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                      Estoque: {Number(insumo.estoque || 0)}
                    </p>
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
                {entradas.map((entrada) => (
                  <div
                    key={entrada.id}
                    className="border border-green-100 rounded-3xl p-6 bg-[#f8faf6]"
                  >
                    <h3 className="text-xl font-bold text-green-900">
                      {entrada.insumoNome}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Quantidade: {entrada.quantidade}
                    </p>

                    <p className="text-gray-600 mt-1">
                      Data de entrada:{" "}
                      {entrada.dataEntrada || "Não informada"}
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
