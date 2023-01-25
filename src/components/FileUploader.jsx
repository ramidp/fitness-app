import React, {useRef, useState} from 'react'
import {db, storage} from '../firebase/firebaseConfig'
import { getDownloadURL, ref, uploadBytes, deleteObject } from 'firebase/storage'
import useObtenerFoto from "../hooks/useObtenerFoto";
import styled from 'styled-components'
import {useAuth} from '../context/AuthContext'
import { useNavigate } from 'react-router'
import Alerta from './Alerta'


const FileUploader = () => {

    const [fotos, setFotos] = useObtenerFoto()
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({})

    const {usuario} = useAuth()
    
    const [file, setFile] = useState('')
    
    const handleFileInput = (e) => {
        setFile(e.target.files[0])
    };

    const navegacion = useNavigate()

    const imageRef = ref(storage, `profile-photos/${usuario.email}/profile-photo`)

    const deletePhoto = () => {
        deleteObject(imageRef).then(() => {
            cambiarEstadoAlerta(true);
            cambiarAlerta({
             tipo: "exito",
             mensaje: "La imagen se ha borrado correctamente"});
            navegacion(0)
}).catch((error) => {
            console.log(error)
        });
    }
    
    const handlerUpload = async () => {

        if (file !== undefined & file !== "") {

            uploadBytes(imageRef, file).then((snapshot) => {

                getDownloadURL(snapshot.ref).then(() => {
                    setFotos((prev) => prev)})
                    cambiarEstadoAlerta(true);
                    cambiarAlerta({
                     tipo: "exito",
                     mensaje: "La imagen se ha subido satisfactoriamente"});
                    navegacion(0)
            })
        }
      else {
            setFile('')
            alert('Hay un error en la suba de imagen, intentelo nuevamente')
       }
    }

    const defaultPhoto = require('../images/cat1.jpg')
      
    return (
        <Container className="file-uploader">

            <img src={fotos} alt="" />

            <div className="control">
                <label htmlFor="file-input">
                    Select Image
                    <input
                    id="file-input"
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    onChange={handleFileInput}/>
                </label>
                
                <button onClick={handlerUpload}>Save</button>
                <button onClick={deletePhoto}>Clear</button>
            </div>

            <Alerta
            tipo={alerta.tipo}
            mensaje={alerta.mensaje}
            estadoAlerta={estadoAlerta}
            cambiarEstadoAlerta={cambiarEstadoAlerta}/>



        </Container>
    )
}

export default FileUploader

const Container = styled.div `
    
    width: 100%;
    display: flex;
    align-items: center;

        .control {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 40%;
            gap: 20px;
            padding: 10px;

            label {
                font-size: 14px;
                cursor: pointer;
                text-align: center;
                &:hover {
                    font-weight: bold;
                }
            }

            input[type='file'] {
                display: none;
            }

            button {
                font-size: 14px;
                border: 1px solid white;
                background-color: ${props => props.theme.primary};
                color: white;
                &:hover {
                    background-color: ${props => props.theme.hover};
                }
            }
        }

        img {
            width: 200px;
            object-fit: cover;
            object-position: top;
            
        }

`