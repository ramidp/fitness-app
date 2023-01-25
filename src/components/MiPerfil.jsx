import { useEffect, useState } from "react";
import styled from "styled-components";
import FileUploader from './FileUploader'
import { useNavigate } from 'react-router'

import {useAuth} from '../context/AuthContext'



const MiPerfil = () => {

    const [hide, setHide] = useState(false)
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')

    const {usuario} = useAuth()

    
    const navegacion = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (name !== "" && nickname !== "") {
            setName(name)
            setNickname(nickname);
            setHide(true)
            localStorage.setItem('nombre', name)
            localStorage.setItem('nickname', nickname)
        }
        else {
            alert('Completar los campos')
        }
    }
    
    useEffect(() => {
        if (typeof Storage !== 'undefined')
        {
            setName(localStorage.getItem('nombre'))
            setNickname(localStorage.getItem('nickname'))
            setHide(true);
        } else {
            setHide(false)
        }
    },[])

    return ( 
        <Container>
            <div className="title">
                <p className="navegacion" onClick={() => navegacion('/')}>Back</p>
                <h1>Mi Perfil</h1>
            </div>
                <div className="card-info p-4">

                    <form onSubmit={handleSubmit}>
                           <FileUploader/>
                        <div className="input-card">
                            <label htmlFor="nickname"><b>E-mail:</b> </label>
                                <div className="d-flex gap-2">
                                    <p className="m-0"> {usuario.email}</p>
                                </div>
                        </div>

                        <div className="input-card">
                            <label htmlFor="name"><b>Nombre:</b> </label>
                            {hide == false ? 
                                <input 
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                type="text" />
                             :
                             <div className="d-flex gap-2 ">
                                <p className="m-0"> {name}</p>
                            </div>
                            }
                        </div>
                        
                        <div className="input-card">
                            <label htmlFor="nickname"><b>Alias</b>: </label>
                            { hide == false ?
                            <input 
                                name="nickname"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                type="text" />
                            :   
                                <div className="d-flex gap-2">
                                    <p className="m-0"> {nickname}</p>
                                </div>
                            }
                        </div>

                            <div className="btn-control gap-2">
                                <button className="btn-1">Save</button>
                                <p className="btn-1 m-0" onClick={() => setHide(false)}>Edit</p>
                            </div>

                    </form>
                </div>
        </Container>
     );
}
 
export default MiPerfil;

const Container = styled.div`
    
        color: ${props => props.theme.fontPrim};
        background-color: ${props => props.theme.fourth};
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 2vh;
        width: 100%;
        padding: 20px 0;
        height: 90vh;

        .title {
            width: 100%;
            text-align: center;
            display: flex;
            justify-content: space-around;
            align-items: center;
            margin-bottom: 10px;
            
            h1 {
                font-size: 30px;
                margin: 0;}

            .navegacion {
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                margin: 0;
                height: fit-content;
                &:hover {
                        text-decoration: underline;
                        text-underline-offset: 3px;
                }
            }
        }


        form {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            height: auto;
            gap: 20px;
            width: 750px;
        }
        img {
            width: 200px;
            height: 200px;
            @media (max-width: 600px) {
            width: 150px;
            height: 150px;
        }
        }

        .input-card {
            display: flex;
            gap: 20px;
            height: 50px;
            width: 100%;
            align-items: center;
            justify-content: flex-start;
            input {
                height: 30px;
            }
        }

            .card-info {
                width: 80%;
                color: ${props => props.theme.fontWhite};
                background-color: ${props => props.theme.primary};
                height: 100%;
                display: flex;
                justify-content: center;
                
                .btn-control {
                    display: flex;
                    margin-top: 30px;

                    .btn-1 {
                        border: 1px solid white;
                        width: 100px;
                        background-color: transparent;
                        color: white;
                        text-align: center;
                        cursor: pointer;
                        &:hover {
                            filter: invert(50%)
                        }
                    }
                }
            }
    
`