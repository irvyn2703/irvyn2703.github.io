import "../style/Header.css";
import HeaderBusiness from "../business/HeaderBusiness";

const Header = () => {
  const { isMenuOpen, toggleMenu } = HeaderBusiness();
  return (
    <header>
      <div className="bars activatedButton">
        {isMenuOpen ? (
          <i class="fa-solid fa-xmark" onClick={toggleMenu}></i>
        ) : (
          <i class="fa-solid fa-bars" onClick={toggleMenu}></i>
        )}
      </div>
      <h3>Irvyn Xicale Cabrera</h3>
      <nav className={isMenuOpen ? "menuOpen" : ""}>
        <ul>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#aboutMe">Sobre mi</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#education">Formación</a>
          </li>
          <li>
            <a href="#proyects">Proyectos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
