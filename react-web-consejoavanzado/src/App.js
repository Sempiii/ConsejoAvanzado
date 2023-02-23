import React from 'react'

import { Routes, Route } from 'react-router-dom';//BrowserRouter //switch is no longer available at this version


import './App.css';
import Navbar from './Components/Navbar'
import Body from './Components/Body'
import Footer from './Components/Footer'
import Nosotros from './Components/Pages/Nosotros2';
import Contactos from './Components/Pages/Formulario';
import PageError from './Components/Pages/PageErrors';

import Gestiones from './Components/Pages/Gestiones';
import Arquitectura from './Components/Pages/Arquitectura'
import Marketing from './Components/Pages/MarkYPubl'
import Informatica from './Components/Pages/Informatica'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/linkedin' component={'https://www.linkedin.com/in/luiscastrohuerta/'} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/contactos' element={<Contactos />} />

        <Route path='/gestiones' element={<Gestiones />} />
        <Route path='/arquitectura' element={<Arquitectura />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/informatica' element={<Informatica />} />

        <Route element={PageError} />
      </Routes>
      <Footer />
    </>
  )

}

export default App;
