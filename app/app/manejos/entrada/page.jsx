"use client";

import AppHeader from "../../AppHeader";

const inputBase =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-center text-lg font-semibold text-[#10251b] outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100";

const labelBase =
  "mb-2 block text-center text-xs font-black uppercase tracking-wide text-green-950";

const savedAnimals = [
  ["1029384717309", "471730", "20", "13-24", "320", "A01", "19/05/2025 10:30"],
  ["1029384717299", "471729", "20", "13-24", "289", "A01", "19/05/2025 10:30"],
  ["1029384717289", "471728", "20", "13-24", "301", "A01", "19/05/2025 10:30"],
  ["1029384717279", "471727", "20", "13-24", "306", "A01", "19/05/2025 10:30"],
  ["1029384717269", "471726", "20", "13-24", "304", "A01", "19/05/2025 10:30"],
  ["1029384717259", "471725", "20", "13-24", "332", "A01", "19/05/2025 10:30"],
  ["1029384717249", "471724", "20", "13-24", "290", "A01", "19/05/2025 10:30"],
  ["1029384717239", "471723", "20", "13-24", "254", "A01", "19/05/2025 10:30"],
  ["1029384717229", "471722", "20", "13-24", "310", "A01", "19/05/2025 10:30"],
  ["1029384717219", "471721", "20", "13-24", "287", "A01", "19/05/2025 10:30"],
];

const protocols = [
  "Entrada confinamento",
  "Entrada Recria",
  "Reforço Vacina e Vermífugo",
];

function SectionCard({ title, children, className = "" }) {
  return (
    <section
      className={`rounded-2xl border border-gray-200 bg-white p-5 shadow-sm ${className}`}
    >
      {title && (
        <h2 className="mb-4 text-center text-sm font-black uppercase tracking-wide text-green-950">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

function Note({ children }) {
  return <p className="mt-2 text-center text-xs text-gray-500">{children}</p>;
}

function SmallMetric({ label, value }) {
  return (
    <div className="border-r border-gray-200 px-3 py-2 last:border-r-0">
      <p className="text-xs font-black text-green-950">{label}</p>
      <p className="mt-2 text-xl font-semibold text-[#10251b]">{value}</p>
    </div>
  );
}

function Icon({ name }) {
  const common = {
    className: "h-5 w-5",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "finish":
      return (
        <svg {...common}>
          <path d="M5 21V4" />
          <path d="M5 5h11l-1.5 4L16 13H5" />
        </svg>
      );
    case "save":
      return (
        <svg {...common}>
          <path d="M5 3h12l2 2v16H5z" />
          <path d="M8 3v6h8V3" />
          <path d="M8 17h8" />
        </svg>
      );
    case "trash":
      return (
        <svg {...common}>
          <path d="M3 6h18" />
          <path d="M8 6V4h8v2" />
          <path d="M6 6l1 15h10l1-15" />
          <path d="M10 11v6" />
          <path d="M14 11v6" />
        </svg>
      );
    case "cow":
      return (
        <svg {...common}>
          <path d="M7 8c-2-2-4-2-5 0 1 2 3 3 5 3" />
          <path d="M17 8c2-2 4-2 5 0-1 2-3 3-5 3" />
          <path d="M8 6c1-2 7-2 8 0 2 4 1 11-4 11S6 10 8 6Z" />
          <path d="M9.5 10h.01" />
          <path d="M14.5 10h.01" />
        </svg>
      );
    default:
      return null;
  }
}

export default function EntradaManejo() {
  return (
    <>
      <AppHeader />

      <main className="min-h-screen bg-[#f5f7f2] px-4 py-5 text-[#10251b] lg:px-6">
        <div className="mx-auto max-w-[1600px]">
          <header className="mb-5 flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm xl:flex-row xl:items-center xl:justify-between">
            <div className="flex min-w-0 items-center gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-green-100 bg-green-50 text-green-900">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 6l6 6-6 6" />
                  <path d="M3 12h12" />
                  <path d="M20 4v16" />
                </svg>
              </span>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-700">
                  Manejos
                </p>
                <h1 className="text-3xl font-black uppercase tracking-wide text-green-950 md:text-4xl">
                  Manejo de entrada de animais
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="rounded-xl bg-green-50 px-4 py-2 text-sm font-black text-green-950">
                Data início: 19/05/2025
              </div>

              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-orange-900/15 transition hover:bg-orange-700">
                <Icon name="finish" />
                Finalizar manejo
              </button>
            </div>
          </header>

          <div className="grid gap-4 xl:grid-cols-[1fr_410px]">
            <div className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
                <SectionCard title="Dados manejo">
                  <div className="grid gap-3">
                    {[
                      ["Fazenda", "Fazenda cadastrada"],
                      ["Cliente", "Fazenda cliente"],
                      ["GTA(s) entrada", "103040-GO, 103041-GO, 103042-GO"],
                    ].map(([label, value]) => (
                      <label
                        key={label}
                        className="grid items-center gap-3 sm:grid-cols-[110px_1fr]"
                      >
                        <span className="text-xs font-black uppercase text-green-950">
                          {label}
                        </span>
                        <input
                          className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold uppercase outline-none"
                          defaultValue={value}
                        />
                      </label>
                    ))}
                  </div>
                </SectionCard>

                <SectionCard title="Qtd de animais (GTA)">
                  <div className="grid gap-4 md:grid-cols-[1fr_1fr_120px] md:items-center">
                    <div className="rounded-xl border border-gray-200">
                      <p className="border-b border-gray-200 py-2 text-center text-sm font-black">
                        Machos
                      </p>
                      <div className="grid grid-cols-2 text-center">
                        <SmallMetric label="13-24" value="19" />
                        <SmallMetric label="25-36" value="0" />
                      </div>
                      <p className="border-t border-gray-200 py-2 text-center text-sm font-black text-green-950">
                        Total: 19
                      </p>
                    </div>

                    <div className="rounded-xl border border-gray-200">
                      <p className="border-b border-gray-200 py-2 text-center text-sm font-black">
                        Fêmeas
                      </p>
                      <div className="grid grid-cols-2 text-center">
                        <SmallMetric label="13-24" value="0" />
                        <SmallMetric label="25-36" value="0" />
                      </div>
                      <p className="border-t border-gray-200 py-2 text-center text-sm font-black text-green-950">
                        Total: 0
                      </p>
                    </div>

                    <div className="text-center">
                      <p className="text-sm font-black uppercase text-green-950">
                        Total geral
                      </p>
                      <p className="mt-3 text-4xl font-black text-green-900">
                        19
                      </p>
                    </div>
                  </div>
                </SectionCard>
              </div>

              <SectionCard>
                <div className="grid gap-5 lg:grid-cols-3">
                  <div>
                    <label className={labelBase}>Idade (meses)</label>
                    <input className={inputBase} defaultValue="20" />
                    <Note>Idade fixa até o usuário trocar.</Note>
                  </div>

                  <div>
                    <label className={labelBase}>Era</label>
                    <select className={inputBase} defaultValue="13-24">
                      <option>0-12</option>
                      <option>13-24</option>
                      <option>25-36</option>
                      <option>Acima 36</option>
                    </select>
                    <Note>Travar a era. Ajustar quando digitar a idade.</Note>
                  </div>

                  <div>
                    <label className={labelBase}>Raça</label>
                    <select className={inputBase} defaultValue="Nelore">
                      <option>Nelore</option>
                      <option>Angus</option>
                      <option>Cruzado</option>
                      <option>Senepol</option>
                    </select>
                    <Note>Deixar raça fixa até o usuário trocar.</Note>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-2xl border border-gray-200 p-4">
                    <label className={labelBase}>Brinco SISBOV</label>
                    <input
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-center text-3xl text-[#10251b] outline-none focus:border-green-700"
                      defaultValue="1029384717319"
                    />
                    <label className="mt-3 flex items-center gap-2 text-xs text-gray-600">
                      <input type="checkbox" className="h-4 w-4" />
                      Manejo sem SISBOV
                    </label>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-4">
                    <label className={labelBase}>Chip</label>
                    <input
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-center text-3xl text-[#10251b] outline-none focus:border-green-700"
                      defaultValue="982 000789654321"
                    />
                    <label className="mt-3 flex items-center gap-2 text-xs text-gray-600">
                      <input type="checkbox" defaultChecked className="h-4 w-4" />
                      Manejo sem chip
                    </label>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-4">
                    <label className={labelBase}>Brinco manejo</label>
                    <input
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-center text-3xl text-[#10251b] outline-none focus:border-green-700"
                      defaultValue="471731"
                    />
                    <Note>
                      Puxar o manejo do brinco SISBOV, que vai ser lido por
                      código de barras. Aceitar apenas o número digitado quando
                      não tiver SISBOV.
                    </Note>
                  </div>

                  <div className="rounded-2xl border border-gray-200 p-4">
                    <label className={labelBase}>Peso (kg)</label>
                    <input
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-center text-3xl text-[#10251b] outline-none focus:border-green-700"
                      defaultValue="300"
                    />
                    <label className="mt-3 flex items-center gap-2 text-xs text-gray-600">
                      <input type="checkbox" className="h-4 w-4" />
                      Manejo sem peso
                    </label>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-3">
                  <button className="inline-flex items-center justify-center gap-3 rounded-xl bg-red-700 px-6 py-4 text-sm font-black uppercase text-white shadow-lg shadow-red-900/10 transition hover:bg-red-800">
                    <Icon name="trash" />
                    Excluir animal
                  </button>

                  <button className="inline-flex items-center justify-center gap-3 rounded-xl bg-amber-500 px-6 py-4 text-sm font-black uppercase text-green-950 shadow-lg shadow-amber-900/10 transition hover:bg-amber-400">
                    <Icon name="cow" />
                    Manejar animal
                  </button>

                  <button className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-900 px-6 py-4 text-sm font-black uppercase text-white shadow-lg shadow-green-900/10 transition hover:bg-green-800">
                    <Icon name="save" />
                    Salvar
                  </button>
                </div>
              </SectionCard>

              <SectionCard title="Últimos animais salvos">
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full min-w-[760px] border-collapse text-center text-sm">
                    <thead className="bg-green-50 text-xs uppercase text-green-950">
                      <tr>
                        {[
                          "Animal",
                          "N manejo",
                          "Idade",
                          "Era",
                          "Peso",
                          "Curral",
                          "Data manejo",
                        ].map((header) => (
                          <th key={header} className="border-b px-3 py-2">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {savedAnimals.map((animal) => (
                        <tr key={animal[0]} className="odd:bg-white even:bg-gray-50">
                          {animal.map((value) => (
                            <td key={value} className="border-b px-3 py-1.5">
                              {value}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Note>
                  Mostrar últimos 10 animais salvos. Depois, rolar a barra para
                  visualizar os anteriores.
                </Note>
              </SectionCard>
            </div>

            <aside className="space-y-4">
              <SectionCard title="Animais manejados">
                <div className="grid gap-4">
                  <div className="rounded-xl border border-gray-200">
                    <p className="border-b border-gray-200 py-2 text-center text-sm font-black">
                      Machos
                    </p>
                    <div className="grid grid-cols-4 text-center">
                      <SmallMetric label="13-24" value="19" />
                      <SmallMetric label="25-36" value="0" />
                      <SmallMetric label="13-72" value="0" />
                      <SmallMetric label="06-11" value="0" />
                    </div>
                  </div>

                  <div className="grid grid-cols-[1fr_110px] gap-4">
                    <div className="rounded-xl border border-gray-200">
                      <p className="border-b border-gray-200 py-2 text-center text-sm font-black">
                        Fêmeas
                      </p>
                      <div className="grid grid-cols-2 text-center">
                        <SmallMetric label="Acima 36" value="0" />
                        <SmallMetric label="0-12" value="0" />
                      </div>
                    </div>

                    <div className="rounded-xl border border-gray-200 p-3 text-center">
                      <p className="text-xs font-black uppercase text-green-950">
                        Total
                      </p>
                      <p className="text-3xl font-black text-green-900">19</p>
                      <p className="mt-3 text-xs font-black uppercase text-green-950">
                        Peso médio
                      </p>
                      <p className="text-2xl font-black text-green-900">299</p>
                      <p className="text-xs font-bold">kg</p>
                    </div>
                  </div>
                </div>
              </SectionCard>

              <SectionCard title="Protocolo sanitário">
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  {protocols.map((protocol) => (
                    <label
                      key={protocol}
                      className="flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm font-medium last:border-b-0"
                    >
                      {protocol}
                      <input type="checkbox" className="h-5 w-5" />
                    </label>
                  ))}
                </div>

                <button className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl border border-green-700 px-5 py-3 font-black text-green-950 transition hover:bg-green-50">
                  Novo protocolo
                  <span className="text-2xl leading-none">+</span>
                </button>

                <div className="mx-auto mt-4 max-w-sm space-y-2 text-center text-xs leading-5 text-gray-500">
                  <p>
                    Só aceitar iniciar o manejo com a opção do protocolo
                    selecionada.
                  </p>
                  <p>
                    Só aparecer para selecionar protocolos cadastrados.
                  </p>
                  <p>
                    Para cadastrar um novo protocolo, abrir uma nova aba.
                  </p>
                </div>
              </SectionCard>

              <SectionCard title="Apartação">
                <p className="mb-3 text-center text-sm font-black uppercase text-green-950">
                  Piquete
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["A-01", "001", "12", "299"],
                    ["A-02", "002", "6", "299"],
                  ].map(([piquete, lote, animais, peso]) => (
                    <article
                      key={piquete}
                      className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm"
                    >
                      <p className="text-3xl font-black">{piquete}</p>
                      <p className="mt-4 text-sm font-semibold">Lote: {lote}</p>
                      <p className="mt-2 text-sm font-semibold">
                        Animais: {animais}
                      </p>
                      <p className="mt-2 text-sm font-semibold">
                        Peso médio: {peso}
                      </p>
                    </article>
                  ))}
                </div>

                <Note>
                  Aparecer só currais e lotes cadastrados com a quantidade de
                  animais no momento da sincronização.
                </Note>
              </SectionCard>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
