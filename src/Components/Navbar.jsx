import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import "./NavBar.css"
import logo from './logo.png';
function Navbar() {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (

    <>
    <nav className="navbar">  
    <div className="nav-container"> 

            <a href="/"><img src={logo} alt="LOGO"/></a>
    
     <ul className={click ? "nav-menu active" : "nav-menu"}>
    
     
    
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/aboutPage"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Locales
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/Cotizaciones"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Cotizaciones
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/codigos"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Codigos
              </Link>
            </li>
             <li className="nav-item">
              <Link
                exact
                to="/Sugerencias"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Nuestra Politica
              </Link>
            </li> 
            
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
    
        </div>
      </nav>
    </>
  );
}

export default Navbar
