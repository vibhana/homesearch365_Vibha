import Navbar from './Navbar';
import logo from '../images/logo.svg';
import houselogo from '../images/house-logo.svg';
import namelogo from '../images/name_logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
        <img src={houselogo} alt="logo" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;