import { useState, useEffect } from "react";
import Card from "../components/Card";

const Pesquisa = () => {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  interface Livro {
    id: number;
    titulo: string;
    descricao: string;
    imagem: string;
  }

  useEffect(() => {
    async function buscarLivros() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json",
        );

        if (!response.ok) {
          throw new Error("Houve um erro com a conexão da API");
        }
        const data = await response.json();
        setLivros(data);
      } catch (error: any) {
        console.error("Hove um erro com a API: ", error);
        setError(error.message);
      }
    }
    buscarLivros();
  }, []);

  //   {
  //     livros.map((livro) => console.log(livro));
  //   }

  return (
    <div>
      <section>
        <label htmlFor="">Barra de pesquisa</label>
        <div className="w-full bg-accent rounded-full p-4 text-accent-foreground">
          <input type="text" placeholder="Pesquisar livros..." />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pag-4 my-8">
        {livros.map((livro: Livro) => (
          <Card
            key={livro.id}
            titulo={livro.titulo}
            descricao={livro.descricao}
            imagem={livro.imagem}
          />
        ))}
      </section>
    </div>
  );
};

export default Pesquisa;
