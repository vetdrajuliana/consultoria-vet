"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const STORAGE_KEY = "pecuaria_quick_access";
const DEFAULT_SELECTION = ["fazendas", "animais", "usuarios"];

const quickAccessOptions = [
  {
    id: "fazendas",
    href: "/app/fazendas",
    icon: "farm",
    title: "Fazendas",
    description: "Cadastro e controle das propriedades atendidas.",
  },
  {
    id: "animais",
    href: "/app/animais",
    icon: "cow",
    title: "Animais",
    description: "Cadastro e controle de animais e lotes.",
  },
  {
    id: "usuarios",
    href: "/app/usuarios",
    icon: "users",
    title: "Usuários",
    description: "Clientes, proprietários, funcionários e acessos.",
  },
  {
    id: "fornecedores",
    href: "/app/fornecedores",
    icon: "truck",
    title: "Fornecedores",
    description: "Cadastro e consulta de fornecedores da fazenda.",
  },
  {
    id: "insumos",
    href: "/app/insumos",
    icon: "package",
    title: "Insumos",
    description: "Cadastro de insumos, notas fiscais e estoque.",
  },
  {
    id: "manejo-entrada",
    href: "/app/manejos/entrada",
    icon: "entry",
    title: "Entrada",
    description: "Registro de entrada de animais na propriedade.",
  },
  {
    id: "manejo-saida",
    href: "/app/manejos/saida",
    icon: "exit",
    title: "Saída",
    description: "Registro de saída de animais da propriedade.",
  },
  {
    id: "manejo-morte",
    href: "/app/manejos/morte",
    icon: "alert",
    title: "Morte",
    description: "Registro de mortalidade e observações do manejo.",
  },
  {
    id: "movimentacao",
    href: "/app/manejos/movimentacao",
    icon: "move",
    title: "Movimentação",
    description: "Transferência entre lotes, piquetes ou fazendas.",
  },
];

function QuickAccessIcon({ name }) {
  const common = {
    className: "h-10 w-10 lg:h-8 lg:w-8",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "farm":
      return (
        <svg {...common}>
          <path d="M3 21h18" />
          <path d="M5 21V10l7-5 7 5v11" />
          <path d="M9 21v-6h6v6" />
          <path d="M9 11h6" />
          <path d="M4 13h16" />
        </svg>
      );
    case "cow":
      return (
        <svg {...common}>
          <path d="M7 8c-2-2-4-2-5 0 1 2 3 3 5 3" />
          <path d="M17 8c2-2 4-2 5 0-1 2-3 3-5 3" />
          <path d="M8 6c1-2 7-2 8 0 2 4 1 11-4 11S6 10 8 6Z" />
          <path d="M9 17c1 3 5 3 6 0" />
          <path d="M9.5 10h.01" />
          <path d="M14.5 10h.01" />
          <path d="M10 14h4" />
          <path d="M11 14v2" />
          <path d="M13 14v2" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3" />
          <path d="M6 20a6 6 0 0 1 12 0" />
          <path d="M5 10a2.5 2.5 0 0 0 0 5" />
          <path d="M19 10a2.5 2.5 0 0 1 0 5" />
          <path d="M2 20a4 4 0 0 1 5-3.8" />
          <path d="M22 20a4 4 0 0 0-5-3.8" />
        </svg>
      );
    case "truck":
      return (
        <svg {...common}>
          <path d="M3 7h11v9H3z" />
          <path d="M14 10h4l3 3v3h-7z" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
        </svg>
      );
    case "package":
      return (
        <svg {...common}>
          <path d="M4 8l8-4 8 4-8 4z" />
          <path d="M4 8v8l8 4 8-4V8" />
          <path d="M12 12v8" />
        </svg>
      );
    case "entry":
      return (
        <svg {...common}>
          <path d="M4 12h12" />
          <path d="M12 8l4 4-4 4" />
          <path d="M20 5v14" />
        </svg>
      );
    case "exit":
      return (
        <svg {...common}>
          <path d="M8 12h12" />
          <path d="M16 8l4 4-4 4" />
          <path d="M4 5v14" />
        </svg>
      );
    case "alert":
      return (
        <svg {...common}>
          <path d="M12 3l9 16H3z" />
          <path d="M12 8v5" />
          <path d="M12 17h.01" />
        </svg>
      );
    case "move":
      return (
        <svg {...common}>
          <path d="M12 3v18" />
          <path d="M8 7l4-4 4 4" />
          <path d="M8 17l4 4 4-4" />
          <path d="M3 12h18" />
          <path d="M7 8l-4 4 4 4" />
          <path d="M17 8l4 4-4 4" />
        </svg>
      );
    default:
      return null;
  }
}

function getValidSelection(ids) {
  const availableIds = new Set(quickAccessOptions.map((option) => option.id));
  const validIds = ids.filter((id) => availableIds.has(id));
  return validIds.length === 3 ? validIds : DEFAULT_SELECTION;
}

export default function PainelQuickAccess() {
  const [selectedIds, setSelectedIds] = useState(() => {
    if (typeof window === "undefined") {
      return DEFAULT_SELECTION;
    }

    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return DEFAULT_SELECTION;
    }

    try {
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) ? getValidSelection(parsed) : DEFAULT_SELECTION;
    } catch {
      return DEFAULT_SELECTION;
    }
  });
  const [draftIds, setDraftIds] = useState(DEFAULT_SELECTION);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const cards = useMemo(
    () =>
      selectedIds
        .map((id) => quickAccessOptions.find((option) => option.id === id))
        .filter(Boolean),
    [selectedIds],
  );

  function openModal() {
    setDraftIds(selectedIds);
    setIsModalOpen(true);
  }

  function toggleDraft(id) {
    setDraftIds((current) => {
      if (current.includes(id)) {
        return current.filter((item) => item !== id);
      }

      if (current.length >= 3) {
        return current;
      }

      return [...current, id];
    });
  }

  function saveSelection() {
    if (draftIds.length !== 3) return;
    setSelectedIds(draftIds);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(draftIds));
    setIsModalOpen(false);
  }

  function resetSelection() {
    setDraftIds(DEFAULT_SELECTION);
  }

  return (
    <section className="mt-10 lg:mt-5">
      <div className="mb-6 flex items-center justify-between lg:mb-3">
        <h2 className="text-3xl font-bold text-[#10251b] lg:text-2xl">Acesso rápido</h2>

        <button
          type="button"
          onClick={openModal}
          className="rounded-xl border border-green-100 bg-white px-4 py-3 text-base font-semibold text-green-900 shadow-sm transition hover:border-green-200 hover:bg-green-50 lg:py-2 lg:text-sm"
        >
          Personalizar
        </button>
      </div>

      <div className="grid gap-7 md:grid-cols-3 lg:gap-5">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-2xl border border-green-50 bg-white p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl lg:p-4"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-800 transition group-hover:bg-green-200 lg:h-14 lg:w-14">
              <QuickAccessIcon name={card.icon} />
            </div>

            <h3 className="mt-7 text-2xl font-bold text-[#10251b] lg:mt-3 lg:text-xl">
              {card.title}
            </h3>

            <p className="mx-auto mt-4 max-w-xs text-lg leading-7 text-gray-600 lg:mt-2 lg:text-sm lg:leading-5">
              {card.description}
            </p>

            <span className="mt-7 inline-flex w-full max-w-56 items-center justify-center gap-3 rounded-xl bg-green-50 px-5 py-3 text-lg font-semibold text-green-900 lg:mt-3 lg:py-2 lg:text-sm">
              Acessar <span>›</span>
            </span>
          </Link>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/45 px-4">
          <div className="w-full max-w-3xl rounded-2xl bg-white p-6 text-[#10251b] shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold">Personalizar acesso rápido</h3>
                <p className="mt-1 text-base text-gray-600">
                  Selecione exatamente 3 itens para aparecerem na página inicial.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-full px-3 py-1 text-2xl leading-none text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
                aria-label="Fechar"
              >
                ×
              </button>
            </div>

            <div className="mt-5 grid max-h-[55vh] gap-3 overflow-y-auto pr-1 md:grid-cols-3">
              {quickAccessOptions.map((option) => {
                const isSelected = draftIds.includes(option.id);
                const isDisabled = !isSelected && draftIds.length >= 3;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => toggleDraft(option.id)}
                    disabled={isDisabled}
                    className={`rounded-2xl border p-4 text-left transition ${
                      isSelected
                        ? "border-green-600 bg-green-50 text-green-950"
                        : "border-gray-100 bg-white hover:border-green-200 hover:bg-green-50/50"
                    } ${isDisabled ? "cursor-not-allowed opacity-45" : ""}`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-800">
                        <QuickAccessIcon name={option.icon} />
                      </span>
                      <span className="font-bold">{option.title}</span>
                    </span>
                    <span className="mt-3 block text-sm leading-5 text-gray-600">
                      {option.description}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-semibold text-gray-600">
                {draftIds.length}/3 selecionados
              </p>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={resetSelection}
                  className="rounded-xl border border-gray-200 px-4 py-2 font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Restaurar padrão
                </button>
                <button
                  type="button"
                  onClick={saveSelection}
                  disabled={draftIds.length !== 3}
                  className="rounded-xl bg-green-900 px-5 py-2 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
