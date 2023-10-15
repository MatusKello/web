import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='all-movies'>Movies</NavLink>
        <NavLink to='form'>Add movie</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
