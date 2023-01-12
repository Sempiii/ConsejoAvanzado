import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

import logo from '../logo-CA.png'
import logo1 from '../Linkdn-icon.png'
import logo2 from '../pinpng.png'


function Navbar() {
// div class "menu-icon" 
// it will update the state with the following const
const [click, setClick] = useState(false);
//usar settings the button.js
const [button, setButton] = useState(true)

// sets the click in the value, so whatever click it will be the oposse it
//  so it's actually false-true fa
//  if click the value basically if you click the icon then it will change the class
const handleClick = () => setClick(!click);
// li listado items
const closeMobileMenu = () => setClick(false)

const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false);
    } else {
        setButton(true);
    }
};

useEffect(() => {
    showButton();
  }, []);

window.addEventListener('resize', showButton);


  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/inicio' className='navbar-logo'>
                    <img 
                        src={logo}
                        className = "logo-CA"
                        alt = "logo"
                    />
                    {/*<i className='fab fa-typo3'/>*/}
                </Link>
                <Link to='/#' className='navbar-logo1'>
                <img 
                        style={{ marginLeft: "20%", width: "20%", height: "50%" }}
                        src={logo1}
                        className = "logo-CA1"
                        alt = "logo1"
                    />
                </Link>
                
                <Link to='/#' className='navbar-logo'>
                <img 
                        style={{ marginLeft: "-10%", width: "20%", height: "25%" }}
                        src={logo2}
                        className = "logo-CA2"
                        alt = "logo2"
                    />
                </Link>
                
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>


                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to= '/' className='nav-links' onClick={closeMobileMenu}>
                            Inicio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= '/servicios' className='nav-links' onClick={closeMobileMenu}>
                            Servicios
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= '/nosotros' className='nav-links' onClick={closeMobileMenu}>
                            Nosotros
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= '/contactos' className='nav-links' onClick={closeMobileMenu}>
                            Contacto
                        </Link>
                    </li>
                    <li>
                        <Link to= '/registrarse' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Registro
                        </Link>
                    </li>
                </ul>

                {button && <Button buttonStyle='btn--outline'>Soy un Botoun</Button>}
            </div>
        </nav>
    </>
  );
}

export default Navbar;
