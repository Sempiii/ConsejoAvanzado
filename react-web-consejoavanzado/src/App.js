import React from 'react'
import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'; //switch is no longer available at this version

import Home from './Components/Pages/Home';
import Servicios from './Components/Pages/Servicios';
import SignUp from './Components/Pages/Registrarse';
import Nosotros from './Components/Pages/Nosotros';
import Contacts from './Components/Pages/Contactos';



function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact />
          <Route path='/' exact component={Home} />
          <Route path='/servicios' component={Servicios} />
          <Route path='/nosotros' component={Nosotros} />
          <Route path='/contacto' component={Contacts} />
          <Route path='/sign-up' component={SignUp} />
        </Routes>
      </Router>
    </>
 
    
  );
}

export default App;
