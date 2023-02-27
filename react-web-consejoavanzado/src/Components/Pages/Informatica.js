import React from 'react';
import { Col, Figure, Row } from "react-bootstrap"; //Figure
import FadeIn from "react-fade-in";

import styles from '../Css/formulario.module.css';
import '../../App.css';
import fondo from '../../images/Office_footer.png'

export default function Informatica() {
  return (
    <FadeIn>
      <Row className='informatica' style={{ backgroundImage: 'url(../../images/pexels-desk.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
        <Col xs={12} className='cols-secciones'>
          <div>
            <h1 className='title'> Informática</h1>
          </div>
            <div>
              <p className='body-texto' style={{paddingLeft: '10%'}}>
              Ingeniería Civil en Informática como servicio se enfoca en
              la aplicación de la tecnología informática para diseñar, 
              desarrollar y gestionar sistemas y servicios en línea. 
              
              </p>
              <p className='body-texto' style={{paddingLeft: '10%'}}>
              Se combinan elementos de ingeniería informática, 
              gestión de negocios y administración de proyectos.

              Esto abre paso al analizar y resolver problemas informáticos
              complejos, trabajar en equipo y comunicarse efectivamente, 
              es posible liderar proyectos de desarrollo de software, y 
              gestionar servicios informáticos de forma eficiente.
              </p>
            </div>

        </Col>

      </Row>

<Row className='informatica'>
        <Col xs={12} md={6} style={{paddingLeft: '10%'}}>
            
          <div>
            <p className='body-texto'>
              Esto abre paso al analizar y resolver problemas informáticos
              complejos, trabajar en equipo y comunicarse efectivamente, 
              es posible liderar proyectos de desarrollo de software, y 
              gestionar servicios informáticos de forma eficiente.
            </p>
            
          </div>

        </Col>

        <Col xs={12} md={6}>
          <Figure className='mx-auto' style={{paddingLeft: '20%'}}>
            <Figure.Image
              width='80%'
              height='80%'
              alt="Foto de oficina"
              src={fondo}
              className={styles.officeImage}
              />
          </Figure>
        </Col>
      </Row>

  

      <Row className='informatica'>
        
        <Col xs={12} md={6}>
          <Figure className='mx-auto' style={{paddingLeft: '20%'}}>
            <Figure.Image
              width='80%'
              height='80%'
              alt="Foto de oficina"
              src={fondo}
              className={styles.officeImage} /// imagen que tendra a todos los integrantes juntos. :)
            />
          </Figure>
        </Col>

        <Col xs={12} md={6}>
          
          <p className='body-texto'>
              Los servicios se disponen en áreas como programación, 
              bases de datos, seguridad informática, redes de 
              computadoras, inteligencia artificial, gestión de proyectos,
              análisis de negocios y diseño de sistemas. 
          </p>
          <p className='body-texto'>
            Los profesionales de Consultoria Consejo Avanzado son capaces
            de desarrollar soluciones informáticas flexibles e innovadoras
            para empresas y organizaciones.
          </p>
        </Col>
      </Row>
    </FadeIn>
  )
}


