import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.svg';

const Header = () => {
  return (
    <header className="header">
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="logo kasa" />
            </Link>
        </div>
        <nav className="navigation">
            <ul className="nav-list">
                <li className="nav-item"><Link to="/">Accueil</Link></li>
                <li className="nav-item"><Link to="/about">À Propos</Link></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;