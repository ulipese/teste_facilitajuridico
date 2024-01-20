import "../App.css";

function Header() {
  return (
    <header className="header">
      <a
        href="/cadastrar"
        className={
          window.location.pathname === "/cadastrar" 
            ? "header__link active"
            : "header__link"
        }
      >
        Cadastrar
      </a>
      <a
        href="/buscar"
        className={
          window.location.pathname === "/buscar"
            ? "header__link active"
            : "header__link"
        }
      >
        Buscar
      </a>
    </header>
  );
}

export default Header;
