import AppHeader from "../../AppHeader";

export default function EstoqueInsumosPage() {
  return (
    <>
      <AppHeader />

      <main className="min-h-screen bg-[#f5f7f2] p-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <p className="font-semibold text-green-700">Nutrição</p>

            <h1
              className="mt-2 text-4xl font-bold text-green-900"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Estoque de Insumos
            </h1>
          </div>

          <div className="rounded-3xl border border-green-100 bg-white p-8 shadow-md">
            <p className="text-gray-600">
              Tela de estoque de insumos criada para os próximos ajustes do app.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
