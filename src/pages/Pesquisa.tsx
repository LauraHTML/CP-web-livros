import { useState, useEffect } from "react";
import Card from "../components/Card";

const Pesquisa = () => {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  interface Livro {
    id: number;
    titulo: string;
    resumo: string;
    imagem: string;
  }

  useEffect(() => {
    async function buscarLivros() {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json",
        );
        setLoading(true);

        if (!response.ok) {
          throw new Error("Houve um erro com a conexão da API");
        }
        const data = await response.json();
        setLivros(data);
      } catch (error: any) {
        console.error("Hove um erro com a API: ", error);
        setError(error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    buscarLivros();
  }, []);
  if (loading) {
    return (
      <section className="flex flex-col gap-4">
        <label className="mb-4 text-xl" htmlFor="">
          Barra de pesquisa
        </label>
        <div className="w-full bg-accent rounded-full p-4 text-accent-foreground">
          <input type="text" placeholder="Pesquisar livros..." />
        </div>

        <h3 className="text-2xl">Carregando...</h3>
      </section>
    );
  }
  if (error) {
    return (
      <section>
        <label htmlFor="">Barra de pesquisa</label>
        <div className="w-full bg-accent rounded-full p-4 text-accent-foreground">
          <input type="text" placeholder="Pesquisar livros..." />
          <h3 className="text-2xl">Houve um erro ao carregar os livros</h3>
        </div>
      </section>
    );
  }
  return (
    <div>
      <section>
        <h1 className="text-4xl mb-6">Pesquisa livros</h1>
        <h3 className="text-xl mb-2">Barra de pesquisa</h3>
        <div className="w-full bg-accent rounded-full p-4 text-accent-foreground">
          <input type="text" placeholder="Pesquisar livros..." />
        </div>
      </section>

      <section className="my-8 grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {livros.map((livro: Livro) => (
          <Card
            key={livro.id}
            titulo={livro.titulo}
            descricao={livro.resumo}
            imagem={livro.imagem}
          />
        ))}
      </section>
    </div>
  );
};

export default Pesquisa;
