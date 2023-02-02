import {useState} from "react";
import {useForm} from "react-hook-form";

///@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

function Dropdown (selected, setSelected) {

    ///handle submit
    const {register, formState:{errors}, watch, handleSubmit} = useForm(
        /*{
            defaultValues:{
                nombre:'Alex Toro',
                correo:'alexomar@gmail.com',
                descrip
            }
        }*/
    );
    // function onSubmit
    const onSubmit = (data) => {
        console.log(data); //terminal muestra el objeto creado
    }

    ///Condicional para número de contacto
    const incluirContacto = watch('incluirContacto');


    ///estado de las opciones del checkbox
    const [isActive, setIsActive] = useState(false)
    const options = [
        'Gestion Proyectos', 
        'Arquitectura', 
        'Construccion', 
        'Informatica IT', 
        'Marketing & Publicidad'
    ]
    return (
        <>
        <h1>Formulario Encargo</h1>
        <form onSubmit={handleSubmit(onSubmit)} action="" className="form-form">
                    {/* Data */}
            <div>
                <label id="nombre">Nombre y apellido</label>
                <input type="text" id='nombre' placeholder="Alex Omar" 
                {...register('nombre',{
                    required: true,
                    maxLength:30
                })} />

                {errors.nombre?.type === 'required' && <p 
                style={{
                    	color: '#e92b2d',
                        fontWeight: '600',
                        fontSize: '12px'
                }}> El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p
                style={{
                    color: '#e92b2d',
                    fontWeight: '600',
                    fontSize: '12px'
            }}> El campo debe tener menos de 30 carácteres</p>}

                <label id="correo">Correo</label>
                <input type="email" id="correo" placeholder="alextoro@gmail.com" 
                {...register('correo',{
                    required: true,
                    pattern:"^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$"   ,
                    maxLength:30
                })} />
                {errors.nombre?.type === 'required' && <p
                style={{
                    color: '#e92b2d',
                    fontWeight: '600',
                    fontSize: '12px'
            }}> El campo email es requerido</p>}
                {errors.email?.type === 'pattern' && <p
                style={{
                    color: '#e92b2d',
                    fontWeight: '600',
                    fontSize: '12px'
            }}> El formato del email no es correcto, verifique su correo e intente nuevamente</p>}

                
            </div>
                    {/* Dropdown */}
            <div className="dropdown">
                <label id="nombre">Asunto</label>
                <div className="dropdown-btn" onClick={(e) => 
                setIsActive(!isActive)}> {selected}
                <span className="fas fa-caret-down"></span>
                </div>

                {isActive && (
                    <div className = "dropdown-content">
                        {options.map((option) => (
                            <div onClick = {(e) => {
                                setSelected(option) 
                                setIsActive(false)}}
                                className="dropdown-item">
                                {option}
                            </div>
                        ))}
                        
                    </div>
                )}
            </div>
            <div className="form-text-area">
            <label id="encargo">Descripción encargo</label>
                <input type="text"  id="encargo"
                 placeholder="Descripcion de tu consulta y detalles de encargo ..."
                
                style={{
                    width:'375px',
                    height:'400px'
                    }}
                {...register('encargo',{
                    required: true,
                    maxLength:400
                })} />
                {errors.nombre?.type === 'required' && <p
                style={{
                    color: '#e92b2d',
                    fontWeight: '600',
                    fontSize: '12px'
            }}> El campo de descripción es requerido</p>}

            </div>

            <div className="chbox-contacto">
                <label>¿Incluir numero de contacto?</label>
                <input type="checkbox" 
                { ...register('incluirContacto')

                }  />

            </div>
            {incluirContacto && (
                <div className="form-numero-contacto">
                <label>Numero de contacto</label>
                    <input type="text" placeholder="912345678"
                    {...register('telefono',{
                        required: true,
                        maxLength:9
                    })} />

                    {errors.nombre?.type === 'required' && <p
                    style={{
                    	color: '#e92b2d',
                        fontWeight: '600',
                        fontSize: '12px'
                }}> El campo numero de contacto es requerido</p>}
                    {errors.nombre?.type === 'maxLength' && <p
                    style={{
                    	color: '#e92b2d',
                        fontWeight: '600',
                        fontSize: '12px'
                }}> El campo debe tener menos de 10 carácteres</p>}
            </div>
            )}

            <input type="submit" value="Enviar" />
        </form>
        </>
    )
}

export default Dropdown;