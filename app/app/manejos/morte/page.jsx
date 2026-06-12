import AppHeader from "../../AppHeader";

export default function MorteManejo() {
  return (
    <>
      <AppHeader />

      <main className="min-h-screen bg-[#f5f7f2] p-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-green-700 font-semibold">Manejos</p>

            <h1
              className="text-4xl font-bold text-green-900 mt-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Morte
            </h1>
          </div>

          <div className="bg-white rounded-3xl shadow-md p-8 border border-green-100">
            <p className="text-gray-600">
              Tela de morte criada para os próximos ajustes do app.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
