import React from "react";
import '../App';
import './Css/Body.css'
///import Footer from './Footer'
import Cards from './Cards'


import { Col, Row } from "react-bootstrap"; //figure
import FadeIn from "react-fade-in";


/*font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
                      'Lucida Sans', Arial, sans-serif;
                   } */

export default function Body() {

    return (
            <FadeIn>
                <Row className="row-body">

                    <Col className="col-body">
                    <div>
                        <h1 className="titulo-body"> 
                        Consultoría Consejo Avanzado Limitada
                        </h1>

                        <div>
                            <p className="texto-body">
                                ¡Bienvenidos a CCA ltda! Conformada por profesionales que desean brindar 
                                el mejor servicio posible dentro de sus alcances. Esta Consultora y desarrolladora 
                                se encuentra especializada en diversos ámbitos, tales como proyectos de arquitectura,
                                publicidad, construcción, informáticos, evaluación, dirección y gestión. 
                                ¡Esperamos poder brindarle un correcto servicio!
                            </p>

                        </div>
                    </div>
                    </Col>
                </Row>
                        
                <Row
                className="row-cards"
                style={{
                    maxWidth:'100%',
                    maxHeight:'270%',
                }}
                >
                  <Col
                  style={{
                      width:'100%', margin: '0,0,0,0', padding:'0',
                  }}>
                    <Cards />
                  </Col>
                </Row>
            </FadeIn>     

            
    );

    
}