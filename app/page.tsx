import Image from "next/image";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center  text-center">
      {/* Foto de Perfil (placeholder) */}
      <div className="flex justify-center items-center mt-8 mb-6 w-48 h-48 rounded-full overflow-hidden">
        <Image
          src="/20230606_120617.png"
          alt="Daniel"
          width={200}
          height={200}
          className="object-cover"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2 text-white">Olá!</h1>
      <p className="max-w-md text-gray-300">
        Eu sou o Daniel, um desenvolvedor apaixonado por criar e resolver
        desafios de programação. Este é o meu espaço para compartilhar um pouco
        sobre mim.
      </p>

      {/* Botões (Currículo, Projetos) */}
      <div className="flex space-x-4 mt-6">
        <a
          href="/curriculum"
          className="bg-yellow-500 text-black px-4 py-2 rounded hover:opacity-80"
        >
          Currículo
        </a>
        <a
          href="/projetos"
          className="bg-red-500 text-black px-4 py-2 rounded hover:opacity-80"
        >
          Projetos
        </a>
      </div>
    </section>
  );
}
