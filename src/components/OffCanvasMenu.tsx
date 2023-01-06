import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const OffCanvasExample = ({ name, ...props } : any) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <OffCanvasContainer>

      <Button onClick={handleShow}>
        |||
      </Button>

      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Body>
        <div className="menu-closemark">
                <Link onClick={handleClose} to="/">Main</Link>
              <p className="btn" onClick={handleClose}>X</p>
          </div>
                <Link onClick={handleClose} to="/musculacion">Musculación</Link>
                <Link onClick={handleClose} to="/aerobico">Aerobico</Link>
                <Link onClick={handleClose} to="/semana">Mi Semana</Link>
                <Link onClick={handleClose} to="/rutina">Mi Rutina</Link>
                <Link onClick={handleClose} to="/recomendados">Recomendados</Link>
                <Link onClick={handleClose} to="/info-util">Glosario</Link>
                <Link onClick={handleClose} to="/contacto">Contacto</Link>
        </Offcanvas.Body>
      </Offcanvas>
    </OffCanvasContainer>
  );
}

const OffCanvasTop = () => {
  return (
    <>
      {['top'].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export {OffCanvasExample, OffCanvasTop}

const OffCanvasContainer = styled.div`

  .btn {
    margin-left: 20px;
    font-size: 15px;
    background-color: ${props => props.theme.primary};
    border: 1px solid ${props => props.theme.fourth};
    &:hover {
      background-color: ${props => props.theme.hover};
    }
  }

  display: none;

  @media (max-width: 1200px) {
  display: inline-block; 
  }
  
  `