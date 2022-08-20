 
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="topnav">
        <Link to="/">Pocetna</Link>
        <Link to="/kontakt">Kontakt</Link>

        {/* <a class="active" href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a> */}
    </div>





  );
}

export default Navbar;
