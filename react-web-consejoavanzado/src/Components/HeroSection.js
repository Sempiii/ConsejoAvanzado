import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

//Icons
///import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
/*
import { playCircle } from '@fortawesome/free-solid-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
*/



function HeroSection() {
  return (
    <div className='hero-container'>
      {/*<video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>CONSULTORIA CONSEJO AVANZADO</h1>
      <p>Que esperas para hacer ese proyecto?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          TU PRIMER ENCARGO CON NOSOTROS
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('prueba 1..2...3..')}
        >
          VE NUESTRA PRESENTACION <img src= 'images/linkdn-icon.png' alt='imgexample' /> {/*class="fal fa-play-circle"></i>}*/}
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
