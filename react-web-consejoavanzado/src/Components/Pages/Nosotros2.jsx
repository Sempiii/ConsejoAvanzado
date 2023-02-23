import React from 'react';
import '../Css/Nosotros2.css';
import styles from '../Css/formulario.module.css';


import { Col, Figure, Row } from "react-bootstrap";
import fondo from '../../images/Office_footer.png'
import FadeIn from 'react-fade-in/lib/FadeIn';

export default function Nosotros() {
    return (
        <FadeIn>
            <Row className='fondo1'>
                <Col xs={12} sm={12} md={7}>
                    <h1 className='TL_blanco'>Consultoría Consejo Avanzado Limitada</h1>
                    <div className='header-text'>
                        <p className='p_blanco-sec1-col1'>Somos una empresa de consultoría especializada
                        en brindar soluciones personalizadas a pequeñas, medianas y grandes empresas. 
                        Contamos con un equipo altamente capacitado para desarrollar diferentes tipos 
                        de proyectos, tales como, proyectos de arquitectura, marketing, informática.
                        Además, podemos gestionar, dirigir y evaluar proyectos. Nos esforzamos por 
                        comprender las necesidades de cada cliente y brindar soluciones eficientes 
                        y efectivas. </p>

                        <p className='p_blanco-sec1-col1'>
                        Finalmente, poseemos un conjunto de profesionales con diversas 
                        conocimientos y especialidades, que poseen afición a sus carreras y que le 
                        permite a la empresa tener la característica de generar proyectos observados 
                        de distintas áreas. 
                        </p>
                    </div>
                </Col>

                <Col xs={12} sm={12} md={5}>
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
            </Row>

            <Row className='fondo2'>

                <Col md={11}>
                    <h1 className='TL_blanco-sec1-col2'>Metodología</h1>
                    <p className='l_blanco-sec1-col2'> Tomamos en cuenta las dos
                    metodologías mas utilizadas en los últimos dos siglos 
                    para llevar a cabo los proyectos a nuestro cargo, 
                    dependiendo de la naturaleza de estos, tomaremos 
                    características de una u otra metodología, teniendo
                    en mente el desarrollo más eficiente del proyecto en 
                    turno, y tomando en cuenta los requerimientos y 
                    restricciones del cliente. 
                    </p>
                </Col>
            </Row>

            <Row className='fondo2'>

                <Col xs={12} sm={12} md={6}>
                    <Figure className='col-img-left-sec2-col2'>
                        <Figure.Image
                        width={1800}
                        height={1800}
                        alt="Foto de oficina"
                        src={fondo}
                        className={styles.officeImage} /// imagen que tendra a todos los integrantes juntos. :)
                        />
                    </Figure>
                </Col>

                <Col xs={12} sm={12} md={6} className='col-text-right-sec2-col2'>

                    <h1 className='TL_blanco-sec2-col3-title'>Metodología en cascada</h1>
                    <p className='l_blanco-sec3-col3'>
                    Una metodología en cascada generalmente se puede definir como un proceso lineal y
                    secuencial, y esta misma característica complica su adaptabilidad, ya que esta,
                    no permite regresar a una fase previa o se hace muy complicado, sus etapas se 
                    componen de: 
                    </p>
                    <div className='align-text-sec3-col3'>
                        <h2 className='TL_blanco-sec2-col3-title'>Definir los requerimientos</h2>
                        <p>En esta primera etapa, se definen los 
                        requerimientos del proyecto a través de diversas herramientas, ya sea lluvias de 
                        idea, reuniones, especificaciones, etc. Estos requerimientos se definen dentro de 
                        un documento para distribuirlo dentro del equipo encargado, y será la guía de lo 
                        que debe cumplir el proyecto.</p>
                        <p>
                        <h2>Anteproyecto</h2>
                        Esta etapa refiere al diseño del proyecto o sistema, es decir, fase 
                        donde se definen las especificaciones del proyecto, ejemplo, las herramientas que 
                        serán necesarias para el proyecto.
                        Puesta en marcha: Es donde el proyecto se desarrolla en primera instancia, donde 
                        se toma toda la información que ya se tiene de las etapas anteriores y se crea un 
                        primer producto.
                        <h2>Pruebas</h2>
                        Fase que compete las pruebas del producto llevada a cabo por 
                        profesionales, esta puede definir pequeños cambios o si existen muchos incidentes 
                        quizá el regreso a la definición de requerimientos.
                        <h2>Estrega del producto</h2>
                        Etapa donde se hace entrega del producto y todos los 
                        entregables necesarios, para su implementación.
                        Mantenimiento o Observación: Ultima etapa que compete la observación del proyecto 
                        y quizá llevar a cabo pequeñas actualizaciones para el correcto funcionamiento de 
                        este. Si se presentan demasiados incidentes quizá es requerido volver al comienzo 
                        del proyecto.
                        </p>
                    </div>
                </Col>
            </Row>

                
            <Row className='fondo3'>

                <Col xs={12} sm={7} md={6}>
                    <h1 className='h1-sec3'>Metodología Scrum</h1>
                    <p className='p-sec3'>
                        Esta metodología se caracteriza por tener ámbitos adaptativos gracias a su desarrollo 
                        por etapas y reiterativas, además en sus equipos de trabajo se hacen necesarios diferentes 
                        responsables, que no serán mencionados, esto mismo normalmente puede llevar al 
                        aumento del costo de desarrollo. Pero a su vez sus características adaptativas y reiterativas 
                        del desarrollo del proyecto, junto a su cercanía con el cliente dentro del desarrollo del 
                        proyecto hace que los productos sean mas personalizados y mas aceptados por el cliente.
                        
                        <h2 className='h2-sec3'>Planificación del Sprint</h2>
                        Se tiene que entender que en la metodología Scrum los sprint 
                        representan pequeños proyectos con objetivos específicos planteados para llegar al 
                        desarrollo del proyecto general.
                        <h2 className='h2-sec3'>Ejecución del sprint</h2>
                        Etapa donde se desarrollan las tareas planteadas para el sprint 
                        en el se encuentra el proyecto, donde el equipo encargado del proyecto puede tener 
                        desarrollado un entregable para el cliente y su revisión.
                    </p>
                    
                </Col>   

                <Col xs={12} sm={12} md={6}>
                    <Figure className='col-img-left-sec2-col2'>
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


            <Row className='fondo3'>
                <Col xs={12} sm={12} md={6}>
                    <Figure className='col-img-left-sec2-col2'>
                        <Figure.Image
                        width={1800}
                        height={1800}
                        alt="Foto de oficina"
                        src={fondo}
                        className={styles.officeImage} /// imagen que tendra a todos los integrantes juntos. :)
                        />
                    </Figure>
                </Col>

                <Col xs={12} sm={7} md={6}>
                    <h2 className='h2-sec3'>Revisión del Sprint</h2>
                    <p className='p-sec3'>
                    Etapa donde se evalúan los resultados del sprint, se genera una 
                    reunión con todos los participantes del proyecto, tanto el equipo encargado, el cliente, el 
                    director, etc. Para determinar el resultado y postular ideas para dar mas valor al producto y 
                    incluirlo al nuevo sprint que se va a desarrollar.
                    
                    <h2 className='h2-sec3'> Retroalimentación - Opcional</h2>
                    Etapa donde se recibe un feedback del producto 
                    desarrollado, y que puede ser de utilidad para generar actualizaciones o rectificar errores, 
                    o desarrollar un nuevo producto.
                    Ambas metodologías planteadas tienen sus distintas características positivas y 
                    negativas, por lo tanto, en nuestra forma de trabajo, nos cercioramos de utilizar una 
                    metodología hibrida, si bien planteamos una forma lineal del desarrollo del proyecto, esto 
                    lo complementamos con generar pequeños entregables al cliente y asegurar también su 
                    participación, para llevar a productos o proyectos aceptables y sin gastar recursos de más.
                    </p>

                    <h3 className='h3-sec3'>
                        Articulo por:
                    </h3>
                    
                    <h3 className='h3-sec3'>
                        Luis Antonio Castro Huerta
                    </h3>
                    <p className='p-sec3'>
                        Director de Proyecto
                        Consultoría Consejo Avanzado Limitada.
                        08-02-2023
                    </p>
                </Col>
            </Row>
            
        </FadeIn>
    );
    
}

