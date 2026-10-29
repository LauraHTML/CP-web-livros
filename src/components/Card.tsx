interface Livro {
  titulo: string;
  descricao: string;
  imagem: string;
}

const Card = ({ titulo, descricao, imagem }: Livro) => {
  return (
    <article className="flex w-full max-w-80 flex-col gap-2 rounded-lg border-2 bg-secondary p-2 text-secondary-foreground transition-all hover:bg-background hover:text-foreground">
      <div>
        <h3 className="font-bold">{titulo}</h3>
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
        <h3 className="font-bold">Descrição do livro:</h3>
        <p>{descricao}</p>
      </div>
    </article>
  );
};

export default Card;
