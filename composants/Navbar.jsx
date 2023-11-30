import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import '../style/navbar.scss';

const Navbar = () => {
  return (
    <div className="Navbar">
        <img src={logo} className='logo' alt="Logo" />
      <div className='Liens'>
        <Link to="/" className='lien'>Accueil</Link>
        <Link to="/about" className='lien'>A Propos</Link>
      </div>
    </div>
  );
};

export default Navbar;