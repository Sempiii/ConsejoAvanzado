import React from 'react'; // for modal: , {useState}
import './Css/Cards.css';
import CardItem from './CardItem';

function Cards() {


  return (
    <div className='cards'>
      <h1 className='titulo'>Profesionales</h1>

          <ul className='cards__items' >
            
            <CardItem
              src='images/Profile_Luis.png'
              text=' Dirección, Gestion y Evaluación de proyectos'
              label='Director Ejecutivo'
              path='/gestiones'
            />
            
            
            <CardItem      
              src='images/Profile_Felipe.png'
              text='Diseño de Arquitectura'
              label='Arquitectura'
              path='/arquitectura'
            />
            
            <CardItem
              src='images/Profile_Niko.png'
              text='Marketing y Publicidad'
              label='Marketing y Publicidad'
              path='/marketing'
            />
            <CardItem              
              src='images/Profile_Cris.png'
              text='Ingeniero Informático'
              label='Ingeniero IT'
              path='/informatica'
            />
            <CardItem
              src='images/Profile_Alex_OF.png'
              text='Ingeniero Civil Informático'
              label='Ingeniero IT'
              path='/informatica'
            />
            </ul>
              
            <div>
          </div>
        </div>

    
  );
}

export default Cards;
