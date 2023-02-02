import React from 'react';
import '../../App.css';
import Formulario from './Formulario'

import { Col, Figure, Navbar, Row } from "react-bootstrap";
import FadeIn from "react-fade-in";

export default function Contacts() {
  return (
    <FadeIn>

      
      <Row>
        <Col>
          <div>
            
            <Formulario />
          </div>
          
          <div>
          
          </div>
        </Col>
      </Row>
    </FadeIn>
  );
  
}
