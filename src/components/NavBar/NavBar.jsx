import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Technology Store</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/PROCESADOR">Procesadores</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/MOTHERBOARD">Placas Madre</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/MEMORIA RAM">Memorias RAM</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            <Link to="/checkout" className="btn btn-primary ms-2 text-nowrap fs-6">Ir al carrito</Link>
            <CartWidget />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

