interface Livro {
  titulo: string;
  descricao: string;
  imagem: string;
}

const Card = ({
  titulo = "Título do livro",
  descricao = "Descrição breve",
  imagem = "Descrição da imagem",
}: Livro) => {
  return (
    <article className="bg-secondary p-2 border-2 w-fit text-secondary-foreground hover:bg-background transition-all hover:text-foreground rounded-lg">
      <div>
        <p>{titulo}</p>
      </div>
      <div>
        <img
          width={200}
          height={200}
          src={imagem}
          alt={`Capa do livro: ${titulo}`}
        />
      </div>
      <div>
        <h3>Descrição do livro:</h3>
        <p>{descricao}</p>
      </div>
    </article>
  );
};

export default Card;
