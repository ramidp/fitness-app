import React from 'react';
import {auth} from '../firebase/firebaseConfig'
import {signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import styled from "styled-components";
import {ReactComponent as Logout} from '../images/icons/arrow-right-from-bracket.svg'


// signOut es el comando de firebase para cerrar sesion
// No olvidar que hay que usar async y await ---- y luego try y catch para que haga lo que pedimos y si hay un error "catchee" el error.
// useNavigate es el comando de React Router para movernos a otras paginas, entonces combinamos ambas para que cierre sesion y para que nos envie a la pagina de iniciar-sesion nuevamente

const BotonCerrarSesion = () => {

    const navegacion = useNavigate()

    const cerrarSesion = async () => {
        try {
            await signOut(auth);
            navegacion('/iniciar-sesion')
        } catch (error){
            console.log(error)
        }
    }

    return ( 
        <Boton 
        iconoGrande 
        as="button"
        onClick={cerrarSesion}>
            <Logout/>
        </Boton>
     );
}
 
export default BotonCerrarSesion;

const Boton = styled.button `
    background-color: inherit;
    color: ${props => props.theme.fontWhite};
    border: none;
    font-size: 12px;
    text-align: end;

    svg {
        height: 25px;
        fill: white;
    }

`