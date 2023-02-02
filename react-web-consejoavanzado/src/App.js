import React from 'react'

import './App.css';
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Footer from './Components/Footer'

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'; //switch is no longer available at this version

import Home from './Components/Pages/Home';
import Nosotros from './Components/Pages/Nosotros2';
import Contactos from './Components/Pages/Formulario';
import PageError from './Components/Pages/PageErrors'

function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/linkedin' component={'https://www.linkedin.com/in/luiscastrohuerta/'} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contactos' element={<Contactos />} />
        <Route component={PageError} />
      </Routes>
      <Footer />
      
    
    </>
  )

}

export default App;
