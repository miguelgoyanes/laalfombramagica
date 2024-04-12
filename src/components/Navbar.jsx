import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation()

    const [isOpenActiv, setIsOpenActiv] = useState(false)

    const closeOffcanvasMenu = () => {
        const offcanvasNavbar = document.getElementById('offcanvasNavbar');
        const offcanvasNavbarInstance = bootstrap.Offcanvas.getInstance(offcanvasNavbar);
        offcanvasNavbarInstance.hide();
    }


    return (
        <nav className="navbar navbar-expand-lg bg-almablue" data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="../../public/img/Recurso 4.png" alt="Logo" style={{ height: '70px' }} />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-end bg-almablue" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"> {/* tabindex="-1" */}
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Tecno Marketing</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body justify-content-end">
                        <ul className="navbar-nav fs-5">
                            <li className="nav-item mx-1">
                                <Link className={`nav-link mx-1 ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/" onClick={closeOffcanvasMenu}>Inicio</Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link className={`nav-link mx-1 ${location.pathname.startsWith('/equipo') ? 'active' : ''}`} to="/equipo" onClick={closeOffcanvasMenu}>Equipo</Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link className={`nav-link mx-1 ${location.pathname === '/noticias' ? 'active' : ''}`} to="/noticias" onClick={closeOffcanvasMenu}>Noticias</Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link className={`nav-link mx-1 ${location.pathname === '/publicaciones' ? 'active' : ''}`} to="/publicaciones" onClick={closeOffcanvasMenu}>Publicaciones</Link>
                            </li>
                            <li className="d-none d-lg-block nav-item mx-1 dropdown" onMouseEnter={() => setIsOpenActiv(true)} onMouseLeave={() => setIsOpenActiv(false)}>
                                <Link className={`nav-link dropdown-toggle mx-1 ${location.pathname.includes('/actividades') ? 'active' : ''}`} to="/actividades" role="button" aria-expanded={isOpenActiv}>
                                    Actividades
                                </Link>
                                <ul className={`dropdown-menu ${isOpenActiv ? 'show' : ''} bg-almablue border-0`} data-bs-theme="dark" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/actividades/tipo/charlas-conferencias">Charlas y Conferencias</Link></li>
                                    <li><Link className="dropdown-item" to="/actividades/tipo/visitas-empresas">Visitas a Empresas</Link></li>
                                    <li><Link className="dropdown-item" to="/actividades/tipo/aula">En el Aula</Link></li>
                                </ul>
                            </li>
                            <li className="d-lg-none nav-item mx-1 dropdown">
                                <Link className={`nav-link dropdown-toggle mx-1 ${location.pathname.includes('/actividades') ? 'active' : ''}`} to="/actividades" role="button" aria-expanded={isOpenActiv} onClick={closeOffcanvasMenu}>
                                    Actividades
                                </Link>
                                <ul className={`dropdown-menu show bg-almablue ms-4 border-0 pt-0`} data-bs-theme="dark" aria-labelledby="navbarDropdown">
                                    <li><Link className={`nav-link mx-1 ${location.pathname === '/actividades/tipo/charlas-conferencias' ? 'active' : ''}`} to="/actividades/tipo/charlas-conferencias" onClick={closeOffcanvasMenu}>Publicaciones</Link></li>
                                    <li><Link className={`nav-link mx-1 ${location.pathname === '/actividades/tipo/visitas-empresas' ? 'active' : ''}`} to="/actividades/tipo/visitas-empresas" onClick={closeOffcanvasMenu}>Visitas a Empresas</Link></li>
                                    <li><Link className={`nav-link mx-1 ${location.pathname === '/actividades/tipo/aula' ? 'active' : ''}`} to="/actividades/tipo/aula" onClick={closeOffcanvasMenu}>En el Aula</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
