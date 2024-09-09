import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.svg';
import { NavLink } from 'react-router-dom';
import '../styles/components/Header.sass'

const Header = () => {
  return (
    <header className="header">
        <div className="logo">
            <NavLink to="/">
                <img src={logo} alt="logo kasa" />
            </NavLink>
        </div>
        <nav className="navigation">
        <ul className="nav-list">
                <li className="nav-item">
                  <NavLink to="/" >Accueil</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about">À Propos</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;