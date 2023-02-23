import React from 'react';
import { Col, Figure, Row } from "react-bootstrap"; //Figure
import FadeIn from "react-fade-in";

import styles from '../Css/formulario.module.css';
import '../../App.css';
import fondo from '../../images/Office_footer.png'

export default function Informatica() {
  return (
    <FadeIn>
      <Row className='informatica'>
        <Col xs={12} sm={12} md={6} className='cols-secciones'>
            <h1 className='title'> Informática</h1>

            <div>
              <p className='body-texto'>
              Ingeniería Civil en Informática como servicio se enfoca en
              la aplicación de la tecnología informática para diseñar, 
              desarrollar y gestionar sistemas y servicios en línea. 
              </p>
            </div>

            <div>
              <p className='body-texto'>
              Se combinan elementos de ingeniería informática, 
              gestión de negocios y administración de proyectos.

              Esto abre paso al analizar y resolver problemas informáticos
              complejos, trabajar en equipo y comunicarse efectivamente, 
              es posible liderar proyectos de desarrollo de software, y 
              gestionar servicios informáticos de forma eficiente.
              </p>
            </div>
        </Col>

        <Col xs={12} sm={12} md={6}>
          <Figure>
            <Figure.Image
              width={1800}
              height={1800}
              alt="Foto de oficina"
              src={fondo}
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
              src={fondo}
              className={styles.officeImage} /// imagen que tendra a todos los integrantes juntos. :)
            />
          </Figure>
        </Col>

        <Col xs={12} sm={12} md={6}>
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


