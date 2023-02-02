import React, { useState }  from 'react' //{Component}
import { useForm } from "react-hook-form";
// funcionalidad correo
import emailjs from 'emailjs-com';
import axios from 'axios';

import styles from '../formulario.module.css'
import { Col, Figure, Row } from "react-bootstrap";
import fondo from '../../images/Office_footer.png'

export default function Formulario() {

    const {register, formState:{errors}, watch} = useForm(
    );

    
    ///Condicional para número de contacto
    const incluirContacto = watch('incluirContacto');

    ///Combobox 
    ///const [selected, setIsSelected] = useState("Elegir Asunto");
        
    //send mail mailjs
    const [formData, setFormData] = useState({
        email: '',
        user_name: '',
        message: '',
        user_asunto: '',
        user_contacto:''
      });
    
      const handleInputChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('servicio_consultoria1','template_avrxv0k', formData, '14mBdNYmRcBWSbFxb')
          .then((res) => {
            console.log('Email successfully sent!');
          })
          .catch((err) => {
            console.error('Error:', err);
          });
      };
        


    return (
        <>
            {/*
            <Row
            style={{
                    width:'1803px',
                    zIndex:'0',
                    minHeight:'70vh',
                    height: '50%',
                    marginBottom:'0%'
            }}>
                <Col>
                    <Form />
                </Col>
            </Row>
            */} 
            <Row
            style={
                {   
                    backgroundImage:'url(../../images/Office_footer.png)',
                }
            }>
                <Col
                        styles= {{
                            
                            backgroundColor: '#4a6b92',
                            textAlign:'center',
                            color:'#fafafa',
                        }}>
                    
                    <form onSubmit={handleSubmit} className={styles.form_form}>
                                {/* Data */}
                        <div>
                            <h1>Formulario Encargo</h1>
                            <label htmlFor='user_name'>Nombre y apellido</label>
                            <input type="text" id='user_name' placeholder="Nombre Apellido" 
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleInputChange}
                            required/>


                            <label htmlFor='user_email'>Correo</label>
                            <input type="email" id='email' 
                            placeholder='user_mail@gmail.com'
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required/>
                        </div>
                        {/* -------- ComboBox -------*/}
                        
                        
                        <div className="form-numero-contacto">
                            <label htmlFor='user_contact'>Numero de contacto</label>
                            <input type="text" placeholder="912345678" id='user_contact'
                            name="user_contacto"
                            value={formData.user_contacto}
                            onChange={handleInputChange}
                            required
                            />

                        </div>

                        <div id='cbo'>
                            <h1 htmlFor='user_asunto' className='cbo'>Asunto Encargo</h1>
                            
                            <select 
                                name='user_asunto'
                                className='user_asunto'
                                value={formData.user_asunto} 
                                onChange={handleInputChange}
                                required>
                                <option value='selecciona el tipo de encargo'>--SELECCIONA TIPO DE ENCARGO--</option>
                                <option href=''>Gestión - Evaluación - Dirección de Proyectos</option>
                                <option href=''>Arquitectura</option>
                                <option href=''>Construcción</option>
                                <option href=''>Informática IT</option>
                                <option href=''>Marketing & Publicidad</option>
                            </select>
                        </div>

                        {/* ----------------- */}

                        <div className="form-text-area">
                        <label htmlFor='message'>Descripción encargo</label>
                            <textarea id="message" rows="50" 
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                required

                                placeholder="Descripcion de tu consulta y detalles de encargo ..."
                                style={{
                                    width:'375px',
                                    height:'400px'
                                    }}

                            />
                    
                        </div>
                                              

                        <button type="submit" value="Enviar">Enviar</button> 
                        {/*onClick={sendmail('cristmp@mailinator.com','Encargo solicitud',{message})}*/}
                    </form>

                    {/*scripts*/}
                    <script type="text/javascript"
                    src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
                    
                </Col>
            </Row>




        </>
    );
    
}

