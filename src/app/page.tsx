import { MadeWithLasy } from "@/components/made-with-lasy";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_auto_auto_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50 gap-8">
      {/* Header */}
      <main className="row-start-1 flex flex-col gap-4 items-center sm:items-start">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">BUENAS MARES!</h1>
        <p className="text-xl text-gray-600">Hora mudar o game!</p>
      </main>

      {/* Features & About */}
      <section className="row-start-2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">Nossos Recursos</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Automação Inteligente de Fluxos</li>
            <li>Deploy Instantâneo em 1 Clique</li>
            <li>Escalabilidade sem Complicações</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">Sobre Lasy</h2>
          <p className="text-gray-700">
            Lasy é uma plataforma que permite criar aplicativos completos sem escrever código. Transforme suas ideias em realidade de forma rápida e intuitiva.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="row-start-3 flex flex-wrap justify-center sm:justify-start gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition-colors">
          Conhecer mais
        </button>
        <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl shadow hover:bg-blue-50 transition-colors">
          Começar agora
        </button>
      </section>

      {/* Footer Badge */}
      <MadeWithLasy className="row-start-4" />
    </div>
  );
}