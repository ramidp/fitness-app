import styled from 'styled-components';
import {auth} from '../firebase/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'; 
import Alerta from './Alerta'
import { useState } from 'react';

const RegistroUsuarios = () => {

    const [correo, establecerCorreo] = useState('')
    const [password, establecerPassword] = useState('')
    const [password2, establecerPassword2] = useState('')
    const navegacion = useNavigate();
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({}) //Objeto vacio

    const handleChange = (e) => {
       switch(e.target.name) {
        case 'email':
            establecerCorreo(e.target.value)
            break;
        case 'password':
            establecerPassword(e.target.value)
            break;
        case 'password2':
            establecerPassword2(e.target.value)
            break;
       }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        cambiarEstadoAlerta(false);
        cambiarAlerta({});
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/ // Expresion regular de correo 
        if(correo == '' || password == '' || password2 == '') {
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
            mensaje: "Por favor ingresa un correo electronico válido"
           })
           return;
        }
        if (password !== password2) {
            cambiarEstadoAlerta(true);
            cambiarAlerta({
             tipo: "error",
             mensaje: "Por favor de revisar que las contraseñas sean iguales"
            })
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, correo, password);
            navegacion('/');
        } 
        catch(error){
            cambiarEstadoAlerta(true);
            let mensaje;
            switch (error.code){
                case 'auth/email-already-in-use':
                    mensaje = 'Ya existe una cuenta con el correo electronico proporcionado'
                    break;
                case 'auth/invalid-password':
                    mensaje = 'La contraseña debe ser de al menos 6 caracteres'
                    break;
                case 'auth/invalid-email':
                    mensaje = 'El correo electronico no es valido'
                    break;
                default:
                    mensaje = 'Hubo un error al intentar crear la cuenta'
                    break;
            }
            cambiarAlerta({tipo: 'error', mensaje: mensaje})
        }
    }
    return ( 
        <SignUpContainer>
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
                    <label htmlFor="password2">Repetir Contraseña:</label>
                    <input
                        type="password"
                        name="password2"
                        placeholder="Repetir Contraseña"
                        value={password2}
                        onChange={handleChange}
                    />
                </div>
                <div className="boton">
                    <button type="submit">Crear Cuenta</button> 
                </div>
                <a href="/iniciar-sesion">Iniciar sesión</a>
            </form>


        <Alerta
            tipo={alerta.tipo}
            mensaje={alerta.mensaje}
            estadoAlerta={estadoAlerta}
            cambiarEstadoAlerta={cambiarEstadoAlerta}/>

    {/* <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1440 320"><path fill='#38598b'fillOpacity="0.5" 
    d="M0,64L1440,288L1440,320L0,320Z"></path></svg> */}
        
        </SignUpContainer>
     );
}

export default RegistroUsuarios;

const SignUpContainer = styled.div`

        height: 90vh;
        background-color: ${props => props.theme.primary};
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 5vh;
        width: 70%;
            @media (max-width: 1200px) {
                width: 95%
            }


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
        background-color: inherit;
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
                    color: ${props => props.theme.fifth};
                }
            }
        }
}
`