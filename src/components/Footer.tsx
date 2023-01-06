import styled from "styled-components";
import React, { useState } from 'react'
import {ReactComponent as FacebookLogo} from '../images/icons/facebook.svg'
import {ReactComponent as InstagramLogo} from '../images/icons/instagram.svg'

const Footer = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [telephone, setTelephone] = useState<string | number>('')
    const [message, setMessage] = useState<string>('')
    const [showAlert, setShowAlert] = useState<boolean>(false)

    // handleSubmit para enviar formulario
    // Le falta agregarle los caracteres para cada input, ya que no son iguales, nombre, tel, correo y msg

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()

        if (name !== "" && email !== "" && telephone !== "" && message !== "") {

            console.log('Aca va donde lo manda (Si es una base hay que configurarlo ACA!!')
            setShowAlert(false)
            alert('Se mando el Form / Agregarle vinculo de base o lo que sea')
            
        } else {
            setShowAlert(true)
        }
        setName('')
        setEmail('')
        setTelephone('')
        setMessage('')
        setTimeout(setShowAlert,3000)
    }

    return ( 
        <>
        <span id="contacto"></span>
        <span id="getintouch"></span>
            <FooterContainer>
                    <div className="social-media"> 
                     
                        <a href="https://www.facebook.com/rdepalo" target="_blank" >
                            <FacebookLogo/>
                        </a>

                        <a href="https://www.instagram.com/talestoldby" target="_blank">
                             <InstagramLogo/>
                        </a>

                    </div>
                    <div className="contenedor col-12 m-0">
                        <div className="row m-0">
                            <div className="p-3 hide card col-3 m-0">
                                <h1>Unite al Staff</h1>
                                <p>Crees que puede sumar con nosotros?</p>
                                <p>+54 11 3-074-XXXX</p>
                                <a href="mailto: ramidp@gmail.com">xxxx@gmail.com</a>
                            </div>
                            <div className="p-3 hide card col-3 m-0">
                                <h1>Recomendaciones a la App?</h1>
                                <p>También puedes comunicarte con nosotros o mandar un formulario</p>
                                <p>Más información</p>
                                <p>Escribinos ante cualquier duda.</p>

                            </div>
                            <div className="p-0 card card-input col-6 m-0">
                                <h1>Mantente en contacto</h1>
                                <form onSubmit={handleSubmit}>
                                    <input 
                                    className="inputname" 
                                    type="text" 
                                    name="nombre" 
                                    placeholder="Nombre"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}/>  

                                    <input 
                                    className="inputcorreo" 
                                    type="text" 
                                    name="correo"   
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}/>  

                                    <input 
                                    className="inputtel" 
                                    type="number" 
                                    name="telefono" 
                                    placeholder="Telefono"
                                    value={telephone}
                                    onChange={(e) => setTelephone(e.target.value)}/>

                                    <input 
                                    className="inputmsg"  
                                    type="text" 
                                    name="mensaje" 
                                    placeholder="Escribir mensaje"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)} />

                                    
                                    <button type="submit">Enviar</button>

                                    {showAlert ?
                                    <div className="alert">Debes completar todos los campos para enviar el formulario</div>
                                    :
                                    <></>
                                    }

                                </form> 
                            </div>
                        </div>
                    </div>
            </FooterContainer>
        </>
     );
}
 
export default Footer;

const FooterContainer = styled.div`
        height: 90vh;
        color: ${props => props.theme.fontPrim};
        background-color: ${props => props.theme.fourth};
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 35px;
        margin-top: 9vh;
        width: 70%;
        @media (max-width: 1200px) {
            width: 95%;
        }


    .hide{ 
        @media (max-width: 991px) {
            display: none!important;
        }
    } 

    .row {
        width: 100%;
    }

    .card {
        gap: 20px;
        border-radius: 0%;
        border: none;        
        text-align: center;
        height: 50vh;
        background: inherit;
        color: ${props => props.theme.fontSecond};
   
        a {
            text-decoration: none;
            color: ${props => props.theme.fontFour};
        }
        h1 {
            display: inline;
            margin: 0;
            font-size: 30px;
        }
    }
    .card-input {
        justify-content: flex-start;

    @media (max-width: 991px) {
        width: 100%!important;
    }
    
        input {
            width: 90%;
            padding: 10px 0;
            padding-left: 10px;
            margin: 15px 0;
        }
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center ;
            z-index: 20;
            
            button {
                margin-top: 15px;
                padding: 7px;
                width: 35%;
                background-color: ${props => props.theme.tertiary};
                border: 1px solid ${props => props.theme.primary};
                color: ${props => props.theme.fontWhite};
                &:hover {
                    background-color: ${props => props.theme.primary};
                    color: ${props => props.theme.fontSecond};
                }
            }
        }
    }
    .social-media {
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        gap: 20px;

        a svg {
            width: 40px;
            height: 40px;
            fill: ${props => props.theme.primary};
            &:hover {
                fill: ${props => props.theme.hover};
            }
        }
    }

    .signature {
        width: 100%;
        padding-right: 10px;
        text-align: right;
        color: ${props => props.theme.fontPrim};
        font-weight: bold;
        background-color: ${props => props.theme.primary};
        cursor: pointer;
        &:hover {
            color: ${props => props.theme.fontSecond};
        }
    }
    .alert {
        margin-top: 10px;
        color: ${props => props.theme.fontPrim};
        font-weight: 500;
    }

`