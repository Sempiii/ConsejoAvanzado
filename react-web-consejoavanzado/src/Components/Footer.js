import React from 'react';
import './Css/Footer.css';


import FadeIn from 'react-fade-in/lib/FadeIn';

import {Link} from 'react-router-dom';
import { Col, Row } from "react-bootstrap"; //Figure




export default function Footer() {
  return (
    <FadeIn>
       <Row className='row-footer'>

            <Col className='diseño-col-box'>
                    <div className='footer-link-items'>
                        <h2 className='subtitulo'>Sobre nosotros</h2>
                        <ul>
                            <Link to='/nosotros'><li> Como funciona </li></Link>
                        </ul>
                        
                    </div>
            </Col>

            <Col className='diseño-col-box'>
                    <div className='footer-link-items'>
                        <h2 className='subtitulo'>Servicios</h2>
                        <ul>
                            <Link to='/nosotros'><li>Términos de Servicio</li></Link>
                        </ul>                                                           
                    </div>
            </Col>
                

            <Col className='diseño-col-box'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2 className='subtitulo'>Redes Sociales</h2>
                        <ul>
                            <li>
                                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/company/consultor%C3%ADa-consejo-avanzado/'>Linkedin</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Col>
            
        </Row>
    </FadeIn>
  );
}


