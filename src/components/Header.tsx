const Header = () => {
  return (
    <header className="">
      <nav className="flex flex-col md:flex-row justify-center items-center my-3 gap-3">
        <div id="logo" className="col-span-2 flex flex-row items-center gap-2">
          <h2>API livros</h2>
        </div>

        <ul className="flex flex-col md:flex-row gap-20 bg-muted rounded-full p-4 px-5">
          <li>
            <a
              href={"/"}
              className="transition duration-300 ease-in-out hover:text-primary hover:underline hover:decoration-wavy"
            >
              Home
            </a>
          </li>
          <li>
            <a href="/pesquisa">Pesquisar</a>
          </li>
          <li>
            <a href="">Últimos Lançamentos</a>
          </li>
          <li>
            <a href="">Categorias</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
