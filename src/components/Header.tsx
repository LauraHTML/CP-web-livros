const Header = () => {
  return (
    <header className="">
      <nav className="flex flex-col md:flex-row justify-center items-center my-3 gap-3">
        <div id="logo" className="font-bold text-xl">
          <h2>API livros</h2>
        </div>

        <ul className="flex flex-col md:flex-row gap-4 items-center bg-muted rounded-lg md:rounded-full p-4 px-5">
          <li>
            <a
              href="/pesquisa"
              className="transition duration-300 ease-in-out hover:underline hover:decoration-wavy"
            >
              Pesquisar
            </a>
          </li>
          <li>
            <a
              href="/lancamentos"
              className="transition duration-300 ease-in-out hover:underline hover:decoration-wavy"
            >
              Últimos Lançamentos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
