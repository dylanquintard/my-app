import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import '../style/navbar.scss';

const Navbar = () => {
  return (
    <div className="Navbar">
        <img src={logo} className='logo' alt="Logo" />
      <div className='Liens'>
        <NavLink to="/" className='lien'>Accueil</NavLink>
        <NavLink to="/about" className='lien'>A Propos</NavLink>
      </div>
    </div>
  );
};

export default Navbar;