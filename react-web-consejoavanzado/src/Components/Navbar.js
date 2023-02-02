import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
///import { Button } from './Button';

import './Navbar.css';
/*Logos*/
import logo from '../Logo_blanco.png'
///import logo1 from '../Linkdn-icon.png'
import logo2 from '../linkedin_testo.png'


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
    }, []
    );


  return (
    <>
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
                            <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/luiscastrohuerta/'>
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
                        <Link to= '/' className='nav-links' onClick={closeMobileMenu}>
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

               {/*{button && <Button buttonStyle='btn--outline'>Soy un Botoun</Button>}*/}
            </div>
        </nav>
    </>
  );
}

export default Navbar;
