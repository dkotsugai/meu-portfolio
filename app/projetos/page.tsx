import CardProjeto from "../../components/CardProjeto";

export default function ProjetosPage() {
  return (
    <section className="mt-8">
      <h1 className="text-3xl font-bold mb-6">Projetos</h1>

      <CardProjeto
        titulo="Nome do Projeto 01"
        descricao="Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto.
                   Fale sobre tecnologias utilizadas, objetivos e resultados."
        imagem="https://via.placeholder.com/300x200.png?text=Projeto+01"
      />

      <CardProjeto
        titulo="Nome do Projeto 02"
        descricao="Sou um parágrafo. Clique em 'Editar texto' ou alterar como quiser.
                   Você pode falar sobre a stack, o que aprendeu etc."
        imagem="https://via.placeholder.com/300x200.png?text=Projeto+02"
      />

      <CardProjeto
        titulo="Nome do Projeto 03"
        descricao="Sou um parágrafo. Mostre mais detalhes e conquistas neste projeto.
                   Por exemplo: uso de APIs, performance, escalabilidade."
        imagem="https://via.placeholder.com/300x200.png?text=Projeto+03"
      />
    </section>
  );
}
