import React, {useState} from 'react'; //useEffect
import {Link} from 'react-router-dom';
import { Row } from "react-bootstrap"; //Figure, Col


import './Css/Navbar.css';
/*Logos*/
import logo from '../images/Logo_blanco.png'
import logo2 from '../images/linkedin_testo.png'


function Navbar() {


    // div class "menu-icon" 
    // it will update the state with the following const
    const [click, setClick] = useState(false);

    // sets the click in the value, so whatever click it will be the oposse it
    //  so it's actually false-true fa
    //  if click the value basically if you click the icon then it will change the class

    // li listado items
    const closeMobileMenu = () => setClick(false)



  return (
    <>   
    <Row className='row-navbar' style={{maxWidth:'100.5%'}}>
        <nav className='navbar'>
            <div className='navbar-container'>
                <ul className='navbar-container'>
                    <Link to='/' name='navbar-logo1'  className='navbar-logo1' onClick={closeMobileMenu}>
                        <div>
                            <img 
                                
                                style={{ marginLeft: "-20px", width: "160%", height: "80px"}}
                                src={logo}
                                className = "logo-CA"
                                alt = "logo"
                            />
                        </div>
                        
                    </Link>

                   
                        <div className='navbar-logo1'>
                            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/company/consultor%C3%ADa-consejo-avanzado/'>
                                <img 
                                    style={{ marginLeft: "20%", width: "35%", height: "18%" }}
                                    src={logo2}
                                    className = "logo-CA1"
                                    alt = "logo1"
                                />
                            </a>
                        </div>
                    
                </ul>

                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to= '/' className='nav-links' >
                            Inicio
                        </Link>
                    </li>

                    <li className='nav-item'>
     
                        <Link to= '/nosotros' className='nav-links' onClick={closeMobileMenu}>
                            Nosotros
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <Link to='/contactos' className='nav-links' onClick={closeMobileMenu}>
                            Contacto
                        </Link>
                    </li>
                </ul>

               
            </div>
        </nav>
        </Row>
    </>
    
  );
}

export default Navbar;
