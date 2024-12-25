type CardProjetoProps = {
    titulo: string;
    descricao: string;
    imagem: string;
  };
  
  export default function CardProjeto({
    titulo,
    descricao,
    imagem,
  }: CardProjetoProps) {
    return (
      <article className="flex flex-col md:flex-row items-center gap-4 mb-8">
        <div className="w-full md:w-1/2">
          <img
            src={imagem}
            alt={titulo}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">{titulo}</h2>
          <p className="text-gray-300">{descricao}</p>
        </div>
      </article>
    );
  }
  