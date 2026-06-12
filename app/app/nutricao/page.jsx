import Link from "next/link";
import AppHeader from "../AppHeader";

const modulos = [
  {
    href: "/app/nutricao/leitura-cocho",
    title: "Leitura de cocho",
    description: "Acompanhe sobra, consumo visual e ajustes de trato.",
    icon: "cocho",
  },
  {
    href: "/app/nutricao/consumo-lote",
    title: "Consumo por lote",
    description: "Controle o consumo por lote, piquete ou categoria.",
    icon: "lote",
  },
  {
    href: "/app/nutricao/dietas",
    title: "Dietas",
    description: "Organize dietas, ingredientes e formulações.",
    icon: "dietas",
  },
  {
    href: "/app/nutricao/estoque-insumos",
    title: "Estoque de Insumos",
    description: "Consulte insumos disponíveis para nutrição.",
    icon: "estoque",
  },
];

function NutricaoIcon({ name }) {
  const common = {
    className: "h-9 w-9",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "cocho":
      return (
        <svg {...common}>
          <path d="M4 12h16l-2 7H6z" />
          <path d="M7 12V7" />
          <path d="M17 12V7" />
          <path d="M8 7h8" />
          <path d="M9 16h6" />
        </svg>
      );
    case "lote":
      return (
        <svg {...common}>
          <path d="M4 5h16v14H4z" />
          <path d="M4 12h16" />
          <path d="M11 5v14" />
          <path d="M7 8h1" />
          <path d="M15 16h1" />
        </svg>
      );
    case "dietas":
      return (
        <svg {...common}>
          <path d="M6 21V8a6 6 0 0 1 12 0v13" />
          <path d="M8 21h8" />
          <path d="M8 12h8" />
          <path d="M10 8h4" />
        </svg>
      );
    case "estoque":
      return (
        <svg {...common}>
          <path d="M4 8l8-4 8 4-8 4z" />
          <path d="M4 8v8l8 4 8-4V8" />
          <path d="M12 12v8" />
        </svg>
      );
    default:
      return null;
  }
}

export default function NutricaoPage() {
  return (
    <>
      <AppHeader />

      <main className="min-h-screen bg-[#f5f7f2] p-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="font-semibold text-green-700">
              Gestão Nutricional
            </p>

            <h1
              className="mt-2 text-4xl font-bold text-green-900"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Nutrição
            </h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {modulos.map((modulo) => (
              <Link
                key={modulo.href}
                href={modulo.href}
                className="group rounded-3xl border border-green-100 bg-white p-7 shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-800 transition group-hover:bg-green-200">
                  <NutricaoIcon name={modulo.icon} />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-green-950">
                  {modulo.title}
                </h2>

                <p className="mt-3 text-base leading-7 text-gray-600">
                  {modulo.description}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-50 px-4 py-2 font-semibold text-green-900">
                  Acessar <span>›</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
