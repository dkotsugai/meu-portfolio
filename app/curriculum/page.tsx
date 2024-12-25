export default function CurriculumPage() {
    return (
      <section className="mt-8 space-y-12">
        <h1 className="text-3xl font-bold">Currículo</h1>
  
        {/* Experiência Profissional */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Experiência Profissional
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">2023 - Atual | Desenvolvedor</h3>
              <p className="text-gray-300">
                Sou um parágrafo. Clique aqui para adicionar o seu texto. 
                Você pode falar sobre suas funções e atribuições.
              </p>
            </div>
            <div>
              <h3 className="font-bold">2022 - 2023 | Estagiário</h3>
              <p className="text-gray-300">
                Sou um parágrafo. Clique aqui para adicionar o seu texto. 
                Você pode falar sobre projetos realizados, aprendizados etc.
              </p>
            </div>
          </div>
        </div>
  
        {/* Educação */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Educação</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold">2023 | Fatec - SJC</h3>
              <p className="text-gray-300">
                Banco de Dados 
              </p>
            </div>
          </div>
        </div>
  
        {/* Skills & Especializações */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Skills & Especializações</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Next.js, React</li>
            <li>TypeScript, JavaScript</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
            <li>Git e GitHub</li>
          </ul>
        </div>
      </section>
    );
  }
  