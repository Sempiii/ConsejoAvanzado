import React from 'react';
import { Col, Figure, Row } from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import fondoA from '../../images/arquitecto_a.png';
import fondoB from '../../images/arquitecto_b.png';
import casa1 from '../../images/casa_1.png';
import casa2 from '../../images/casa_2.png';
import EsquemaA1 from '../../images/Esquema_A1.png';
import EsquemaA2 from '../../images/Esquema_A2.png';
import EsquemaB1 from '../../images/Esquema_B1.png';
import EsquemaB2 from '../../images/Esquema_B2.png';
import styles from '../Css/formulario.module.css';

export default function Arquitectura() {
  return (
    <FadeIn>
      <Row className='arquitectura' style={{ backgroundImage: 'url(../../images/pexels-desk.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
        <Col xs={12} className='cols-seccionesGestion' >
          <div>
            <h1 className='title'>Arquitectura</h1>
          </div>
          <div>
            <p className='body-texto' style={{paddingLeft: '10%'}}>
              Los proyectos de Arquitectura se enfocan en el diseño de edificaciones. Con una estrecha relación con nuestros ingenieros, somos capaces de abordar diversos proyectos y proporcionar soluciones que sean estéticamente atractivas, funcionales y seguras.
            </p>
          </div>
        </Col>
      </Row>

      <Row className='arquitectura'>
        <Col xs={12} md={6}>
          <div>
            <p className='body-texto' style={{paddingLeft: '10%'}}>
              Esto incluye la planificación y el diseño, tales como el desarrollo de viviendas asequibles, ampliaciones a viviendas existentes y otros proyectos para el acondicionamiento de edificios comerciales, por otro lado el desarrollo de la documentación para el registro de edificaciones en instituciones municipales y la planificación, gestión y desarrollo de la construcción de un proyecto.
            </p>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <Figure className='mx-auto' style={{paddingLeft: '15%'}}>
            <Figure.Image
              width='80%'
              height='80%'
              alt='Foto de constructor'
              src={fondoA}
              className={styles.officeImage}
            />
          </Figure>
        </Col>
      </Row>

      <Row className='arquitectura'>
        <Col xs={12} md={6}>
          <Figure className='mx-auto' style={{paddingLeft: '15%'}}>
            <Figure.Image
              width='80%'
              height='80%'
              alt='Foto de plano'
              src={fondoB}
              className={styles.officeImage}
            />
          </Figure>
        </Col>

        <Col xs={12} md={6} style={{paddingRight: '5%', paddingLeft: '5%'}}>
          <p className='body-texto'>
            Durante el proceso se lleva a cabo una transparencia con los clientes, permitiéndoles involucrarse activamente en el desarrollo creativo. De esta forma, logramos un avance satisfactorio del diseño esperado por nuestros clientes.
          </p>
        </Col>
      </Row>
      <Row className='arquitectura'>
        <Row>
          <h2 className='etiqueta-profesional' style={{paddingTop: '5%'}}>Información del Profesional</h2>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Figure className='mx-auto' style={{paddingLeft: '20%'}}>
              <Figure.Image
                width='80%' /*poner la foto del Felipe*/
                height='80%'
                alt='Foto de constructor'
                src={fondoA}
                className={styles.officeImage}
              />
            </Figure>
          </Col>
          <Col xs={12} md={6} style={{paddingLeft: '5%'}}>
            <h2 className='Nombre-profesional'>
              Felipe Fuentes Pérez
            </h2>
            <p className='body-texto'>
              Arquitecto Pontificia Universidad Católica de Valparaíso
              Partida de diseño de proyectos como arquitecto independiente
              desde el 2021.
              Posteriormente a la recepción del título de arquitectura se
              realizaron proyectos particulares junto al Ingeniero Civil Industrial
              Luis Castro Huerta durante el año 2022.
              Desde el 2023 se ha desempeñado como Arquitecto diseñador del
              Departamento de Arquitectura en Consultoría Consejo Avanzado
              Limitada (C.C.A. ltda.).
            </p>
          </Col>
        </Row>
      </Row>
      <Row className='arquitectura'>
        <Row>
          <h2 className='etiqueta-profesional' style={{padding: '2%'}}>Obras</h2>
        </Row>
      </Row>

      <Row style={{ height: '550px', backgroundImage: `url(${casa1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/> {/*Esto es solo para una imagen, sin contenido*/}

      <Row className='arquitectura'>
        <Col xs={12} md={4} >
          <Row>
            <h2 className='Nombre-profesional' style={{padding: '2%'}}>CASA HUAQUEN, VALPARAISO.</h2>
            <p className='descripcion-texto'>2021</p>
            <p className='descripcion-texto'>Supercie 100 m<sup>2</sup></p>
            <p className='descripcion-texto' style={{textAlign: 'justify'}}>Vivienda de uso recidencial en la comunidad
                                            de huaquen, ubicada en la V Region de
                                            Valparaiso. Caraterizada por un espacio
                                            compacto y diseñado con containers, se
                                            aprecia un acabado minimalista y elegante.</p>
          </Row>
        </Col>
        <Col xs={12} md={3} >
          <Figure className='mx-auto' style={{paddingLeft: '10%'}}>
              <Figure.Image
                width='100%'
                height='100%'
                alt='Foto de constructor'
                src={EsquemaA1}
                className={styles.officeImage}
              />
          </Figure>
        </Col>
        <Col xs={12} md={3} >
          <Figure className='mx-auto' style={{paddingLeft: '10%'}}>
              <Figure.Image
                width='100%'
                height='100%'
                alt='Foto de constructor'
                src={EsquemaA2}
                className={styles.officeImage}
              />
          </Figure>
        </Col>
      </Row>
      <Row style={{ height: '550px', backgroundImage: `url(${casa2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/> {/*Esto es solo para una imagen, sin contenido*/}

      <Row className='arquitectura'>
        <Col xs={12} md={3} >
          <Figure className='mx-auto' style={{paddingRight: '10%'}}>
              <Figure.Image
                width='100%'
                height='100%'
                alt='Foto de constructor'
                src={EsquemaB1}
                className={styles.officeImage}
              />
          </Figure>
        </Col>
        <Col xs={12} md={3} >
          <Figure className='mx-auto' style={{paddingRight: '10%'}}>
              <Figure.Image
                width='100%'
                height='100%'
                alt='Foto de constructor'
                src={EsquemaB2}
                className={styles.officeImage}
              />
          </Figure>
        </Col>
        <Col xs={12} md={4} >
          <Row>
            <h2 className='Nombre-obra2' style={{padding: '2%'}}>CASA NACIMIENTO, BIO BIO.</h2>
            <p className='descripcion-texto2'>2022</p>
            <p className='descripcion-texto2'>Supercie 140 m<sup>2</sup></p>
            <p className='descripcion-texto' style={{textAlign: 'justify'}}>Vivienda de uso recidencial en la comunidad
                                                                            de nacimiento, ubicada en la VIII Region del
                                                                            Bio Bio. Caraterizada para casa vacacional
                                                                            posee un diseño tradicional de la zona rural.</p>
          </Row>
        </Col>
        
      </Row>
    </FadeIn>
  );
}