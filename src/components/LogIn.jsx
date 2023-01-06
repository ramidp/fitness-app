import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../firebase/firebaseConfig'
import Alerta from './Alerta'

const LogIn = () => {

    const [correo, establecerCorreo] = useState('')
    const [password, establecerPassword] = useState('')
    const navegacion = useNavigate();
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({})

    const handleChange = (e) => {
        if(e.target.name === 'email'){
            establecerCorreo(e.target.value);
        } else if (e.target.name === 'password'){
            establecerPassword(e.target.value);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        cambiarEstadoAlerta(false);
        cambiarAlerta({});
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/  
        if(correo == '' || password == '') {
            cambiarEstadoAlerta(true);
            cambiarAlerta({
             tipo: "error",
             mensaje: "Por favor de rellenar todos los datos"
            })
            return;
        }
        if(!expresionRegular.test(correo) ) {
           cambiarEstadoAlerta(true);
           cambiarAlerta({
            tipo: "error",
            mensaje: "Favor de ingresar un correo válido"
           })
           return;
        }
        try {
            await signInWithEmailAndPassword(auth, correo, password);
            navegacion('/');
        } 
        catch(error){
            cambiarEstadoAlerta(true);
            let mensaje;
            switch (error.code){
                case 'auth/wrong-password':
                    mensaje = 'La contraseña no es correcta'
                    break;
                case 'auth/user-not-found':
                    mensaje = 'No se encontró ninguna cuenta con ese correo electronico'
                    break;
                default:
                    mensaje = 'Hubo un error al intentar crear la cuenta'
                }
        cambiarAlerta({tipo: 'error', mensaje: mensaje})
        }
    }

    return ( 
        <LogInContainer>
            <form onSubmit={handleSubmit}>
                <div className="label-input">
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo Electronico"
                        value={correo}
                        onChange={handleChange}
                    />
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <div className="boton">
                    <button type="submit">Iniciar Sesion</button> 
                </div>
                <a href="/crear-cuenta">Registrarse</a>
            </form>


            <Alerta
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEstadoAlerta={cambiarEstadoAlerta}/>

            {/* <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 320"><path fill='#38598b' fillOpacity="0.5" 
            d="M0,64L1440,288L1440,320L0,320Z"></path></svg> */}

        </LogInContainer>
     );
}
 
export default LogIn;

const LogInContainer = styled.div`

        height: 90vh;
        color: ${props => props.theme.fontPrim};
        background-color: ${props => props.theme.primary};
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 5vh;
        width: 70%;

        svg {
        width: 95%;
        position: absolute;
        top: 55%;
    }

    a {
        padding: 15px 0;
        color: ${props => props.theme.fontWhite};
        &:hover {
            color: ${props => props.theme.hover}
        }
    }

    form {
        width: 50%;
        height: auto;
        padding-top: 100px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;


        @media (max-width: 900px) {
            width: 90%;
        }
        .label-input {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: 20px;
        }

        label {
            color: ${props => props.theme.fontWhite};
            font-size: 22px;
        }

        input {
            padding: 10px;
        }
        
        .boton {
            padding-top: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;

            button {
                background-color: ${props => props.theme.tertiary};
                border: none;
                padding: 10px 15px;
                font-size: 18px;
                width: 60%;
                color: ${props => props.theme.fontWhite};
                &:hover {
                    filter: contrast(70%)
                }
            }
        }
}
`