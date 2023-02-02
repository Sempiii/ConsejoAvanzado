import React from 'react'

import './App.css';
import Navbar from './Components/Navbar'
import Body from './Components/Body'

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'; //switch is no longer available at this version

import Home from './Components/Pages/Home';
import Nosotros from './Components/Pages/Nosotros';
import Contactos from './Components/Pages/Contactos';


function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<Body />} />
        
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contactos' element={<Contactos />} />
      </Routes>
      
    
    </>
  )

}

export default App;
