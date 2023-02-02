import React from 'react';
import './Footer.css';

import logo from '../logo-CA.png'
import FadeIn from 'react-fade-in/lib/FadeIn';

import {Link} from 'react-router-dom';
import { Col, Figure, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <FadeIn>
       {/*----------- FOOTER ------------*/}
       <Row
                style={{
                    backgroundImage: 'url(../images/Office_rain.png)',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',

                    marginTop:'0%',
                    maxWidth:'1803px', 
                    width:'101%',

                   

                    }}>

                    <Col
                    style={
                        {
                            marginTop:'10%', marginLeft: "2%", marginRight:'2%',
                            maxHeight:'900px', maxWidth:'1795px', 
                            height:'500px', width:'100%',

                            justifyItems:'center',
                            
                            
                            color:'#fff',
                            fontSize:'1.5rem'
                            
                        }
                    }>
                            <div className='footer-link-items'>
                                <h2>Sobre nosotros</h2>{/* */}
                                <ul
                                style={{
                                    listStyle:'none',
                                }}>
                                    <Link to='/nosotros'><li> Como funciona </li></Link>
                                    <Link to='/nosotros'><li>  Proyectos </li></Link>
                                </ul>
                                
                            </div>
                    </Col>

                    <Col
                    style={
                        {
                            marginTop:'10%', marginLeft: "2%", marginRight:'2%',
                            maxHeight:'900px', maxWidth:'1795px', 
                            height:'500px', width:'100%',
                            
                            justifyItems:'center',
                            textDecoration:'none',
                            
                            color:'#fff',
                            fontSize:'1.5rem'
                            
                            
                        }
                    }>
                            <div className='footer-link-items'>
                                <h2>Servicios</h2>
                                <ul
                                style={{
                                    listStyle:'none',
                                }}>
                                    <Link to='/nosotros'><li>Términos de Servicio</li></Link>
                                </ul>
                                
                               
                            </div>
                    </Col>
                        
                    <Col
                    style={
                        {
                            marginTop:'10%', marginLeft: "2%", marginRight:'2%',
                            maxHeight:'900px', maxWidth:'1795px', 
                            height:'500px', width:'100%',

                            justifyItems:'center',
                            
                            
                            color:'#fff',
                            fontSize:'1.5rem'
                            
                        }
                    }>
                        <section>
                        <div className='footer-link-wrapper'>
                            <div className='footer-link-items'>
                                <h2>Colaboraciones</h2>
                                <ul
                                style={{
                                    listStyle:'none',
                                }}>
                                    <a target="_blank" rel="noopener noreferrer" href=' https://www.lacalle.cl/'><li>Agencias de terceros</li></a>
                                </ul>                              
                            </div>
                        </div>
                        </section>
                    </Col>

                    <Col
                        style={
                        {
                            marginTop:'10%', marginLeft: "2%", marginRight:'2%',
                            maxHeight:'900px', maxWidth:'1795px', 
                            height:'500px', width:'100%',

                            justifyItems:'center',
                            
                            
                            color:'#fff',
                            fontSize:'1.5rem'
                            
                        }
                        }>
                
                        <div className='footer-link-items'>
                            <h2>Redes Sociales</h2>
                            <ul
                            style={{
                                listStyle:'none',
                            }}>
                                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com'><li>Linkedin</li></a>
                                <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com'><li>Instagram</li></a>
                            </ul>
                        </div>
                        
                    </Col>
                        
                </Row>
    </FadeIn>
  );
}


