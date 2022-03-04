import './NavBar/Navbar.css';

const NavBar = () => {

    return (
        <div className="navbar">
            <a href="#">
                <h1 className="navbar-brand">AMBROSÍA</h1>
            </a>
            <ul className="navbar">
                <li>
                    <a href="#">Información</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;