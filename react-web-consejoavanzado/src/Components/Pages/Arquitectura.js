import React from 'react';
import { Col, Figure, Row } from "react-bootstrap"; //Figure
import FadeIn from "react-fade-in";


import styles from '../Css/formulario.module.css';
import '../../App.css';
import fondoa from '../../images/arquitecto_a.png'
import fondob from '../../images/arquitecto_b.png'

export default function Arquitectura() {
  return (
    <>
    <FadeIn>

    <Row className='arquitectura'>
      <Col xs={12} className='cols-seccionesGestion' >
        <div>
          <h1 className='title'> Arquitectura </h1>
        </div>
        <div>
          <p className='body-texto'>
            Los proyectos de Arquitectura se enfoca en el diseño de edificaciones.
            con una estrecha relación con nuestros ingenieros, somos capaces de 
            abordar diversas magnitudes de proyectos, y proporcionar soluciones 
            que sean estéticamente atractivas, funcionales y seguras.
          </p>
        </div>
      </Col>  

    </Row>
    <Row className='arquitectura'>
        <Col xs={12} sm={12} md={6} className='cols-secciones'>


            <div>
              <p className='body-texto'>
              Esto incluye la planificación y el diseño, tales como, el desarrollo de
              viviendas asequibles, ampliaciones a viviendas existentes y otros 
              proyectos para el acondicionamiento de edificios comerciales, por otro 
              lado el desarrollo de la documentación para el registro de edificaciones
              en instituciones municipales y la planificación, gestión y desarrollo de
              la construcción de un proyecto.
              </p>
            </div>
        </Col>

        <Col xs={12} sm={12} md={6}>
          <Figure>
            <Figure.Image
              width={1800}
              height={1800}
              alt="Foto de oficina"
              src={fondoa}
              className={styles.officeImage} /// imagen que tendra a todos los integrantes juntos. :)
              />
          </Figure>
        </Col>
      </Row>

      <Row className='informatica'>
        
        <Col xs={12} sm={12} md={6}>
          <Figure className='pic-orientation'>
            <Figure.Image
              width={1800}
              height={1800}
              alt="Foto de oficina"
              src={fondob}
              className={styles.officeImage} /// imagen que tendra a todos los integrantes juntos. :)
            />
          </Figure>
        </Col>

        <Col xs={12} sm={12} md={6}>
          <p className='body-texto2'>
            Durante el proceso se lleva acabo una transparencia 
            con los clientes, permitiendo les involucrarse 
            activamente en el desarrollo creativo, de esta forma 
            logramos un avance satisfactorio del diseño esperado 
            por nuestro clientes.
          </p>
          <h2 className='etiqueta-profesional'> Arquitectura - Felipe Fuentes</h2>
        </Col>
      </Row>
    </FadeIn>
    
      
    </>
  )
}


