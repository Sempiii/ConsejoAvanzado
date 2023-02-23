import React from 'react';
import { Col, Figure, Row } from "react-bootstrap"; //Figure
import FadeIn from "react-fade-in";


import styles from '../Css/formulario.module.css';
import '../../App.css';
import fondoa from '../../images/gestion_a.png'
import fondob from '../../images/gestion_b.png'

export default function Gestion() {
  return( 
    <>
    <FadeIn>
      <Row className='informatica'>
        
      <Col xs={12} className='cols-seccionesGestion'>
            <div>
              <h1 className='title'> Gestion, Dirección y Evaluación de proyectos </h1>
              
            </div>
            <p className='body-texto'>
              Sección enfocada a la evaluación, gestión y dirección de proyectos. Que tiene la 
              tarea de dirigir proyectos de diversos ámbitos de la formas más eficiente posible, 
              haciendo uso de herramientas que se adaptan a el tipo de proyecto en desarrollo. 
              Esta sección se encuentra liderada por un profesional titulado en Ingeniería civil 
              industrial, y por su perfil adaptativo calza con lo necesario para esta sección. Y que 
              por lo tanto se le asigna el cargo de Director de proyecto
            </p>
        </Col>
      </Row>
      <Row className='informatica'>
        <Col xs={12} sm={12} md={7} className='cols-secciones'>
            
            <div>
              <p className='body-texto'>
                La evaluación de proyectos consta de 
                llevar a cabo una investigación respecto 
                a lo que se desea evaluar, generar K'pis 
                de desempeño o de rentabilidad, y 
                determina si el proyecto es factible o no
              </p>
            </div>

            <div>
              <p className='body-texto'>
                En cuanto a la gestión de proyectos, se
                centra en utilizar herramientas para el 
                correcto uso de los recursos ya sean 
                monetarios, materia prima, de tiempo, 
                entre otros. Esto para que el proyecto 
                posea una planeación y organización 
                para cumplir correctamente los objetivos 
                del proyecto
              </p>
            </div>
        </Col>

        <Col xs={12} sm={12} md={5}>
          <Figure>
            <Figure.Image
              width={1200}
              height={1200}
              alt="Foto de oficina"
              src={fondoa}
              className={styles.officeImage} /// imagen que tendra a todos los integrantes juntos. :)
              />
          </Figure>
        </Col>
      </Row>

      <Row className='informatica'>
        
        <Col xs={12} sm={12} md={7}>
          <Figure className='pic-orientation'>
            <Figure.Image
              width={1200}
              height={1200}
              alt="Foto de oficina"
              src={fondob}
              className={styles.officeImage} /// imagen que tendra a todos los integrantes juntos. :)
            />
          </Figure>
        </Col>

        <Col xs={12} sm={12} md={5}>
          <p className='body-texto'>
            La dirección de proyectos consta de llevar a cabo un seguimiento dentro del 
            desarrollo del proyecto, junto a la utilización de herramientas y habilidades 
            tanto de decisión como evaluación de situaciones, esta permite una correcta 
            ejecución de un proyecto planteado.

          </p>

          <p className='body-texto'>
            Cabe mencionar que cada una de estas etapas en un proyecto inicial es 
            fundamental para su éxito, ya que, si una de estas se encuentra mal planteadas 
            podría complicar el desarrollo del proyecto e incluso provocar su fracaso.
          </p>

          <p className='body-texto'>
            Al igual que, en esta sección se pueden llevar a cabo gestiones administrativas de 
            proyectos, estrategias de crecimiento y evaluaciones de negocios, todo esto gracias 
            a la adaptación de las fases anteriormente mencionadas
          </p>
        </Col>
      </Row>
      
      
      <Row className='informatica'>
        <Col xs={12} className='cols-seccionesGestion'>
          
        </Col>
      </Row>
    </FadeIn>

    </>
  )
}



