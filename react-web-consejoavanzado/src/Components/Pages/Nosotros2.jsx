import React, { useState }  from 'react'; //{Component}
import './Nosotros2.css';

import styles from '../formulario.module.css';
import { Col, Figure, Row } from "react-bootstrap";
import fondo from '../../images/Office_footer.png'
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Nosotros() {




    return (
        <FadeIn>
            <Row className='fondo1'>
                <Col xs={12} md={6}>
                    <h1 className='TL_blanco'>Consejo Avanzado Consultoría Limitada</h1>
                    <p className='l_blanco'>Somos una empresa de consultoría especializada en brindar soluciones personalizadas a pequeñas, medianas y grandes empresas. Contamos con un equipo altamente capacitado para desarrollar diferentes tipos de proyectos, tales como, proyectos de arquitectura, marketing, informática. Además, podemos gestionar, dirigir y evaluar proyectos. Nos esforzamos por comprender las necesidades de cada cliente y brindar soluciones eficientes y efectivas. Finalmente, poseemos un conjunto de profesionales con diversas conocimientos y especialidades, que poseen afición a sus carreras y que le permite a la empresa tener la característica de generar proyectos observados de distintas áreas. </p>
                </Col>
                <Col xs={12} md={3}>
                    <Figure>
                        <Figure.Image
                        width={400}
                        height={400}
                        alt="Foto de oficina"
                        src={fondo}
                        className={styles.officeImage} /// imagen que tendra a todos los integrantes juntos.
                        />
                    </Figure>
                </Col>
                <Col xs={12} md={3}>
                    <h2 className='TL_blanco'>Otro contenido</h2>
                    <p className='l_blanco'>Aquí puedes agregar otro contenido o información relacionada a la empresa o lo que desees.</p>
                </Col>
            </Row>
        </FadeIn>
    );
    
}

