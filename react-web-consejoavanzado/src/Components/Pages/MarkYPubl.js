import React from 'react';

import { Col, Figure, Row } from "react-bootstrap"; //Figure
import FadeIn from "react-fade-in";

import styles from '../Css/formulario.module.css';
import '../../App.css';
import fondo from '../../images/Office_footer.png'

export default function MarkYPubl() {
  return(
    <>
    <FadeIn>
      <Row className='marketing'>
        <Col xs={12} sm={12} md={6} className='cols-secciones'>
            <h1 className='title'> Marketing y Publicidad</h1>
            <div>
              <p className='body-texto'>
                La carrera universitaria de Publicidad se enfoca en el estudio de cómo
                se crean y difunden mensajes publicitarios efectivos. es de 
                conocimiento práctico el utilizar diversas técnicas y medios de 
                comunicación para promocionar productos, servicios y marcas. 
              </p>
            </div>

            <div>
              <p className='body-texto'>
                La publicidad es un campo muy amplio que abarca áreas como la investigación
                de mercado, la creatividad, la planificación estratégica y la gestión de 
                proyectos.
              </p>
            </div>

            <div>
            <p className='body-texto'>
              El concepto de servicio en publicidad se refiere a cómo los profesionales de la publicidad pueden 
              utilizar sus habilidades y conocimientos para ayudar a las empresas y organizaciones a lograr sus 
              objetivos comerciales. Esto incluye el desarrollo de campañas publicitarias que sean efectivas y que 
              lleguen a su público objetivo.    
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
            Publicidad, se desempeñan en áreas como la creatividad publicitaria, la planificación de medios, la 
            investigación de mercado, la estrategia de marca, la gestión de proyectos y la ética publicitaria. 
            Además, se les enseña a aplicar estos conocimientos en proyectos prácticos que aborden necesidades 
            reales de las empresas.

          </p>

          <p className='body-texto'>
            En general, son adaptables a empresas de publicidad, agencias de marketing, 
            empresas de medios, y organismos gubernamentales, entre otros. 

          </p>
        </Col>
      </Row>
    </FadeIn>  
  </>
  )
}

