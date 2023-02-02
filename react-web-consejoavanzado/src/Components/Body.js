import React from "react";
import '../App';
import Footer from './Footer'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
//import { Button } from './Button';


import { Col, Figure, Row } from "react-bootstrap";
import FadeIn from "react-fade-in";


/*font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
                      'Lucida Sans', Arial, sans-serif;
                   } */

export default function Body() {

    return (
        
        
            <FadeIn>
                
                <Row 
                    style={{
                        backgroundImage: 'url(../images/Office_rain.png)',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',
                        
                        width:'1803px',
                        zIndex:'0',
                        minHeight:'70vh',
                        height: '50%',
                        marginBottom:'0%'
                    }}>


                                    
                    <Col >
                    <div>
                        <h1 
                        style={{
                        margin:'10% 0% 0% 30%',
                        color:'whitesmoke',
                        backgroundColor:'#213137',
                        width:'700px',
                        textAlign:'center'}}> 
                        Consultoría Consejo Avanzado Limitada
                        </h1>

                        <div>
                            <p
                            style={
                            {
                            ///justifyContent:'flex-end',
                            
                            display:'flex',

                            marginTop:'10%', marginLeft: "2%", marginRight:'2%', marginBottom:'25%',
                            height:'100%',

                            fontSize:'30px', textDecoration:'none', textJustify:'auto',
                            zIndex:'-1',
                            backgroundColor:'#213137',
                            color:'whitesmoke'
                            }
                            }>
                                ¡Bienvenidos a CCA ltda! Conformada por profesionales que desean brindar 
                                el mejor servicio posible dentro de sus alcances. Esta Consultora y desarrolladora 
                                se encuentra especializada en diversos ámbitos, tales como proyectos de arquitectura,
                                publicidad, construcción, informáticos, evaluación, dirección y gestión. 
                                ¡Esperamos poder brindarle un correcto servicio!
                            </p>
                            {/* 
                            <div
                            style={{
                                margin:'16% '
                            }}>
                                <img 
                                src={fotoOffice}
                                alt="office" 
                                style={{
                                    marginLeft:'50%',
                                    marginTop:'-60%',
                                    width:'70%'
                                    
                                }}/>
                            </div>
                            */}
                        </div>


                        <div>
                        

                        </div>
                    </div>
                    </Col>
                </Row>
                        
                    {/* CARDS */}
                    
                
                <Row 
                className='figures__container'
                style={
                    {

                        backgroundColor: '#1f427b',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundAttachment: 'fixed',

                        zIndex:'-1',

                       
                        marginBottom:'0%',
                    
                        display: 'inline-flex',
                        flexFlow: 'row',
                        alignItems: 'center',
                        
                        minHeight:'70vh',
                        maxHeight:'300vh',
                        height:'50vh',
                        width: '100%',
                        margin: 'auto'
                        }} >

                        {/*COLUMNA GESTION PROYECTOS */}
                                 
                                
                    <Col  style={{
                                display: 'flex',
                                flex: '1',
                                marginLeft:'10px',
                                ///marginRight:'100px',  
                                paddingLeft:'0px',
                                width:'35%',
                                marginTop:'-8%',
                    }}>
                        <Row>
                        

                                <img 
                                src="/images/Profile_Luis.png"
                                style={{
                                    width:'275px',
                                    maxWidth: '100%',
                                    minWidth: '100%',
                                    height: '275px',
                                    position:'flex-row',
                                    margin: '105px 20px 20px 25px',
                                    zIndex:'0',
                                    borderRadius:'10px',
                                    justifyContent:'center',
                                    alt:'images'
                                }}  />
                        </Row>
                            <Figure className='figure_label' label='Director Ejecutivo'>
                                <Figure.Caption>
                                    <h5 
                                    style={{
                                        position:'absolute',
                                        float:'left',
                                        zIndex:'1',

                                        marginTop:'-60px',
                                        marginLeft:'-295px',
                                        width:'275px',
                                        borderRadius:'5px',
                                        
                                        backgroundColor:'#252250', ///'#13358dff',
                                        textAlign:'right',
                                        color:'#fff'

                                    }}>Director Ejecutivo</h5>
                                    <div className="primerp">
                                    <h4 
                                        style={{
                                            marginLeft:'-260px', marginTop:'350px', 
                                            width:'-30%', height:'70px',
                                            justifyContent:'center',
                                            backgroundColor:'#213137',
                                            color:'#fff'
                                        }}>
                                            Ingeniero Civil Industrial
                                        </h4>
                                    </div>
                                    <h4
                                    style={{
                                        backgroundColor:'#213137',
                                        color:'whitesmoke',
                                        marginLeft:'-260px',
                                        width:'250px'
                                    }}>
                                        Encargado del Área de 
                                        <a href="/Gestiones" style={{
                                            textDecoration:'none', color:'whitesmoke'}} > Gestion </a>
                                            y 
                                        <a style ={{
                                            textDecoration:'none', color:'whitesmoke'}} > Construccion</a>
                                    </h4>
                                </Figure.Caption>
                            </Figure>
                        
                    </Col>
                        

                                        {/*COLUMNA INFORMATICA */}
                        <Col
                            style={{
                                display: 'flex',
                                flex: '1',
                                borderRadius: '10px',
                                marginLeft:'10px', 
                                paddingLeft:'-3px',
                                width:'35%',
                                marginTop:'-8%',
                                backgroundColor:'#1f427b'
                                
                            }}>
                                <img 
                                    src="/images/Profile_Alex_GOD.jpg"
                                    style={{
                                        width:'275px', height:'275px',
                                        position: 'flex-row',
                                        margin: '105px 20px 20px 25px',
                                        ///margin: '100px 0',
                                        zIndex:1,
                                        borderRadius:'10px',
                                        justifyContent:'center',
                                        alt:'images'
                                        

                                    }}  />

                                    <Figure className='figure_label' label='Director Ejecutivo'>
                                        <Figure.Caption>
                                            <h5 
                                            style={{
                                                position:'absolute',
                                                float:'left',
                                                zIndex:'1',
                                                
                                                width:'275px',
                                                borderRadius:'5px',

                                                backgroundColor:'#252250',
                                                textAlign:'right',
                                                marginLeft:'-295px',
                                                marginTop:'-60px',
                                                color:'#fff',
                                                
                                            }}>Área IT</h5>
                                            <div className="primerp">
                                            <h4 
                                                style={{
                                                    marginLeft:'-290px', marginTop:'400px', 
                                                    width:'275px', height:'70px',
                                                    justifyContent:'center',

                                                    backgroundColor:'#213137',
                                                    color:'#fff'

                                                }}>
                                                    Ingeniero Civil Informático
                                                </h4>
                                            </div>
                                            <h4
                                            style={{
                                                marginLeft:'-280px',

                                                backgroundColor:'#213137',
                                                color:'whitesmoke',
                                                width:'270px',
                                                
                                            }}>
                                                Encargado del Área de 
                                                <a href="/Gestiones" style={{
                                                    textDecoration:'none', color:'whitesmoke'}} > Informatica </a>
                                                    
                                            
                                            </h4>
                                        </Figure.Caption>
                                    </Figure>

                        </Col>
                                        
                                        {/*COLUMNA MARKETING Y PUBLICIDAD */}
                        <Col
                        style={{
                            display: 'flex',
                            flex: '1',
                            borderRadius: '10px',
                            marginLeft:'0px', 
                            paddingLeft:'-3px',
                            width:'35%',
                            position:'flex',
                            marginTop:'-8%',
                            backgroundColor:'#1f427b'
                            
                            
                        
                        }}>
                            <img 
                            src="/images/Profile_Niko.png"
                            style={{
                                width:'275px', height:'275px',
                                position: 'flex-row',
                                margin: '105px 40px 20px 25px', ///margin: '90px',

                                ///margin: '105px 40px -50px 45px',
                                borderRadius:'10px',
                                justifyContent:'center',
                                alt:'images'
                                
                            }}  />

                            <Figure className='figure_label' label='Director Marketing y Publicidad'>
                                <Figure.Caption>
                                    <h5 
                                    style={{
                                        position:'absolute',
                                        float:'left',
                                        zIndex:'1',
                                        
                                        marginTop:'-55px',
                                        marginLeft:'-315px',
                                        width:'273px',
                                        borderRadius:'5px',

                                        backgroundColor:'#252250',
                                        color:'#fff',
                                        textAlign:'right'
                                    }}>Publicista</h5>
                                    <div className="primerp">
                                    <h4 
                                        style={{
                                            marginLeft:'-290px', marginTop:'400px', 
                                            width:'275px', height:'80px',
                                            justifyContent:'center', textAlign:'left',
                                            
                                            backgroundColor:'#213137',
                                            color:'#fff'
                                        }}>
                                            Marketing & Publicidad
                                        </h4>
                                    </div>
                                    <h4
                                    style={{
                                        backgroundColor:'#213137',
                                        color:'whitesmoke',
                                        
                                        marginLeft:'-290px',
                                        width:'250px',
                                        
                                    }}>
                                        Encargado del Área de 
                                        <a href="/Marketing" style={{
                                            textDecoration:'none', color:'whitesmoke'}} > Marketing </a>
                                            y Publicidad
                                    </h4>
                                </Figure.Caption>
                            </Figure>

                        </Col>

                                        {/*COLUMNA ARQUITECTURA */}
                        <Col
                        style={{
                            display: 'flex',
                            flex: '1',
                            borderRadius: '10px',
                            marginLeft:'0px', 
                            
                            width:'35%',
                            marginTop:'-8%',
                            backgroundColor:'#283270'

                        
                        }}>


                            <img 
                            src="/images/Profile_Felipe.png"
                            style={{
                                width:'275px', height:'275px',
                                position: 'center',
                                margin: '100px 60px 20px 40px', ///margin: '90px',
                                marginLeft:'-10px',
                                borderRadius:'10px',
                                justifyItems:'center',
                                alt:'images'
                            }}  />

                            <Figure className='figure_label' label='Director Arquitectura'>
                                <Figure.Caption>
                                    <h5 
                                    style={{
                                        position:'absolute',
                                        float:'left',
                                        zIndex:'1',

                                        width:'275px',
                                        marginTop:'-50px',
                                        marginLeft:'-335px',
                                        borderRadius:'5px',

                                        backgroundColor:'#252250',
                                        color:'#fff',
                                        textAlign:'right',
                                    
                                    }}> Area Arquitectura</h5>

                                    <div className="primerp">
                                    <h4 
                                        style={{
                                            
                                            
                                            ///marginLeft:'-360px', marginTop:'400px', 
                                            width:'275px', height:'50px',
                                            justifyContent:'center', textAlign:'center',
                                            color:'#fff',
                                            ///margin:'500px 0px 10px -290px',
                                            margin:'390px 40px 50px -340px',
                                                    ///marginLeft:'-260px', marginTop:'400px', 
                                            width:'-30%', height:'205px',
                                                    
                                            backgroundColor:'#213137',
                                            color:'#fff',
                                            height: '50px'
                                            
                                        }}>
                                            Diseñador
                                        </h4>
                                    </div>
                                    <h4
                                    style={{
                                        backgroundColor:'#213137',
                                        color:'whitesmoke',
                                        marginLeft:'-360px',
                                        width:'275px',
                                        textAlign:'center',
                                        margin:'-10px 20px 0px -330px',
                                        color:'whitesmoke',
                                        width:'270px',
                                        
                                        float:'center'
                                        
                                    }}>
                                        Encargado del Área de 
                                        <a href="/Arquitectura" style={{
                                            textDecoration:'none', color:'whitesmoke'}} > Arquitectura </a>
                                    </h4>
                                </Figure.Caption>
                            </Figure>

                        </Col>
                                        {/*COLUMNA INFORMATICA */}
                        <Col
                        style={{
                            display: 'flex',
                            flex: '1',
                            borderRadius: '10px',
                            marginLeft:'0%', 
                            ///paddingLeft:'-3px',
                            width:'10%',
                            justifyContent:'left',
                            padding:'20px',
                            marginTop:'-8%',
                            backgroundColor:'#2d296a'
                        
                        }}>
                            <img 
                            src="/images/img-7.jpg"
                            style={{
                                width:'275px', height:'275px',
                                position: 'center',
                                margin:'200px 50px 20px 0px',

                                borderRadius:'10px',
                                alt:'images'
                            }}  />
                            
                            <Figure className='figure_label' label='Área Informatica IT'>
                                <Figure.Caption>
                                    <h5 
                                    style={{
                                        position:'absolute',
                                        float:'center',
                                        marginLeft:'-305px',
                                        marginTop:'-60px',
                                        color:'#fff',
                                        zIndex:'1',

                                        width:'253px',
                                        backgroundColor:'#252250',
                                        textAlign:'right'

                                        
                                    }}>Área Informatica IT</h5>
                                    <div className="primerp">
                                    <h4 
                                        style={{
                                            margin:'500px 0px 10px -290px',
                                            ///marginLeft:'-260px', marginTop:'400px', 
                                            width:'-30%', height:'205px',
                                            
                                            backgroundColor:'#213137',
                                            color:'#fff',
                                            height: '50px'
                                        }}>
                                            Ingeniero Informático
                                        </h4>
                                    </div>
                                    <h4
                                    style={{
                                        margin:'0px 0px 110px -300px',

                                        backgroundColor:'#213137',
                                        color:'whitesmoke',
                                        width:'270px',
                                        height:'70px',
                                        float:'center'
                                    }}>
                                        Encargado del Área de 
                                        <a href="/Gestiones" style={{
                                            textDecoration:'none', color:'whitesmoke'}} > Informatica </a>
                                            
                                    
                                    </h4>
                                </Figure.Caption>
                            </Figure>

                       
                    </Col>
                    
                    
                </Row>
                
                {/*----------- FOOTER ------------*/}


            </FadeIn>     

        

/*{button && <Button buttonStyle='btn--outline'>Soy un Botoun</Button>}
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
     */


            
    );

    
}
/// esto es para que tengan la misma altura pero falla 
const styles = {
    image: {
      width: '100%',
      maxWidth: '100%',
      height: 'auto',
      minWidth: '100%'
    }
  };
const StyledImg = styled.img`
width:'275px';
height:'275px';
position:'flex-row';
margin: '136px 20px 20px 25px';
zIndex:'0';
borderRadius:'10px';
justifyContent:'center';
alt:'images;
`;