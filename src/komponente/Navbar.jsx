 
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="topnav">
        <Link to="/">Pocetna</Link>
        <Link to="/kontakt">Kontakt</Link>
        <Link to="/uporedi">Uporedi</Link> 
    </div>





  );
}

export default Navbar;
