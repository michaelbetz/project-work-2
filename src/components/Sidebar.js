import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


const Sidebar = () => {
  return (
    <nav className='nav navbar-light bg-primary col-1 .flex-column h-100'>
      <Link className='nav-link text-white' to={'/scheda'}>Scheda</Link>
      <Link className='nav-link text-white' to={'/scanQR'}>Scansiona QR</Link>
    </nav>
  );
};

export default Sidebar;