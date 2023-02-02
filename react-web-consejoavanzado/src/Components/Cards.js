import React from 'react';
import './Cards.css';
import CardItem from './CardItem';



/*'images/img-9.jpg'
'images/Profile_Luis.png'*/


function Cards() {
  return (
    <div className='cards'>
      <h1>Veamos al Equipo</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Profile_Luis.png'
              text='Perfil de Director-Gestion-Construccion'
              label='Perfil_Director_Ejecutivo'
              path='/gestiones'
            />
            <CardItem
              src='images/Profile_Cris1.png'
              text='Perfil Ingeniero Informático'
              label='Perfil_IngenieroIT'
              path='./informatica'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Profile_Felipe.png'
              text='Perfil Diseño de Arquitectura'
              label='Perfil_Arquitectura'
              path='/arquitectura'
            />
            <CardItem
              src='images/Profile_Niko.png'
              text='Perfil Marketing y Publicidad'
              label='Marketing_y_Publicidad'
              path='/marketing'
            />
            <CardItem
              src='images/Profile_Alex.png'
              text='Perfil Ingeniero Informático'
              label='PerfilIngenieroIT'
              path='/informatica'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
