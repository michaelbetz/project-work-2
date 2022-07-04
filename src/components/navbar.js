import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


const NavBar = () => {
  return (
    <nav className='navbar navbar-light bg-primary'>
      <Link className='nav-link nav-item text-white' to={'/scheda'}>Scheda</Link>
    </nav>
  );
};

export default NavBar;