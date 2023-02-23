import React, { useState }  from 'react' //{Component}
import { useForm } from "react-hook-form";

import { Formik } from 'formik';


import Swal from 'sweetalert2' ////dist/sweetalert2.js'
import withReactContent from 'sweetalert2-react-content'

/// funcionalidad correo
import emailjs from 'emailjs-com';


import styles from '../Css/formulario.module.css'
import { Col, Row } from "react-bootstrap"; //Figure
import FadeIn from "react-fade-in";

//bootstrap
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'



export default function Formulario() {

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
 
        const handleSubmit = async (e) => {
        e.preventDefault();    
            try {

                const result = await
                    Swal.fire({
                    title: 'Enviar formulario?',
                    text: 'Se está por enviar los datos ingresados',
                    icon: 'question',
                    showCancelButton: true,
                    allowOutsideClick: false,
                    confirmButtonText: 'Enviar',
                    cancelButtonText: 'Modificar datos',
                    }).then ((res) => {
                        if(res.isConfirmed){
                            
                            Swal.fire({
                                title: 'Enviado con éxito',
                                text: 'Tu solicitud a sido enviado con éxito',
                                icon: 'success',
                                allowOutsideClick: false,
                                confirmButtonText: 'Confirmar',
                                timer: 5000
                            });
                            e.target.reset()
                            emailjs.send('service_563jhyp','template_gt7jhvq', formData, 'H3yCvKxm9W0zQFKxu')
                            
                        };
                        if(res.isDismissed){
                            Swal.fire({
                                title: 'Modificar',
                                text: 'Puedes pasar a modificar tu formulario',
                                icon: 'warning',
                                allowOutsideClick: false,
                                confirmButtonText: 'Confirmar', 
                            });
                            e.target.reset()
                        }
                    })
    
            } catch (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ooops ... Error!',
                    text: 'ha surgido un error, intenta enviar un mensaje directo a consultoriaconsejoavanzado@gmail.com',
                    confirmButtonText: 'Esta bien'
                }) ;
        };

        const validationsForm = (formData) => {
            let errors ={};

            if(!formData.user_name.trim()){
                errors.user_name = 'El campo -Nombre- es requerido'
            }
            return errors;
        }

    };


    return (
        <>
            <FadeIn>
                <Row className={styles.form_form_}>
                    <Col className={styles.form_col}>

                        <Formik

                            validate={(valores) => {
                                let errores = {};

                                if(!valores.name){
                                    errores.name = 'Por favor, ingresar su nombre'
                                }
                                return errores;
                            }}
                        >
                            

                            {({handleBlur, errors}) => (
                            <form onSubmit={handleSubmit} className={styles.form_form}>
                                        {/* Data */}
                                <div>
                                    <h1>Formulario Encargo</h1>
                                    <label htmlFor='user_name'>Nombre y apellido</label>
                                    <input type="text" id='user_name' 
                                    
                                    placeholder="Nombre Apellido" name="user_name"
                                    value={formData.user_name}
                                    onChange={handleInputChange}
                                    ///onBlur= {handleBlur}
                                    required
                                    maxLength= {30}
                                    minLength={4}
                                    />

                                
                                    <label htmlFor='user_email'>Correo</label>
                                    <input type="email" id='email'
                                    placeholder='user_mail@gmail.com'
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    minLength={10}
                                    ///onBlur= {handleBlur}
                                    
                                    />
                                
                                </div>
                                
                                {/* -------- ComboBox -------*/}
                                <div className="form-numero-contacto">
                                    <label htmlFor='user_contact'>Numero de contacto</label>
                                    <input type="text" placeholder="912345678" id='user_contact'
                                    name="user_contacto"
                                    value={formData.user_contacto}
                                    onChange={handleInputChange}
                                    required
                                    maxLength={9}
                                    ///onBlur= {handleBlur}
                                    />
                                </div>

                                <div id='cbo'>
                                    <label htmlFor='user_asunto' className='cbo'>Asunto Encargo</label>
                                    
                                    <select 
                                        name='user_asunto'
                                        className='user_asunto'
                                        value={formData.user_asunto} 
                                        onChange={handleInputChange}
                                        required
                                        ///onBlur= {handleBlur}
                                        >
                                        <option>-SELECCIONA TIPO DE ENCARGO-</option>
                                        <option>Gestión - Evaluación - Dirección de Proyectos</option>
                                        <option>Arquitectura</option>
                                        <option>Construcción</option>
                                        <option>Informática IT</option>
                                        <option>Marketing & Publicidad</option>
                                    </select>
                                </div>

                                {/* ----------------- */}

                                <div className="form-text-area">
                                    <label htmlFor='message'>Descripción encargo</label>
                                    <textarea id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        minLength={30}
                                        className= {styles.txt_area_form}
                                        ///onBlur= {handleBlur}

                                        placeholder="Descripcion de tu consulta y detalles de encargo ..."

                                    />
                                </div>
                                                    

                                <button id="btn2" className='btn ' type="submit" value="Enviar">Enviar</button> 
                            </form>
                            )}
                        </Formik>
                            {/*scripts*/}
                            <script type="text/javascript"
                            src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
                        
                    </Col>
                </Row>

            </FadeIn>
        </>
    );
    
}

