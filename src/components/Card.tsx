interface CardLivro {
  titulo: string;
  descricao: string;
  imagem: string;
}

const Card = ({
  titulo = "Título do livro",
  descricao = "Descrição breve",
  imagem = "Descrição da imagem",
}: CardLivro) => {
  return (
    <article>
      <div>
        <p>{titulo}</p>
      </div>
      <div>
        <img src={imagem} alt={`Capa do livro: ${titulo}`} />
      </div>
      <div>
        <h3>Descrição do livro:</h3>
        <p>{descricao}</p>
      </div>
    </article>
  );
};

export default Card;
