import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import { collection, deleteDoc, doc, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import musculos from "../data/info-muscles";
import aeroEx from "../data/info-aero";
import {db} from '../firebase/firebaseConfig';
import { useAuth } from '../context/AuthContext';

const ListMenu = () => {

    const {usuario} = useAuth();

    const consulta = query(
        collection(db, 'fitness-info'),
        orderBy('fecha', 'asc'),
        where('uidUsuario', "==", usuario.uid)
    )

    const consulta2 = query(
        collection(db, 'aero-info'),
        orderBy('fecha', 'asc'),
        where('uidUsuario', "==", usuario.uid)

    )

    const [datos, setDatos] = useState([])
    const [datos2, setDatos2] = useState([])

    useEffect(() => {
        onSnapshot(
            consulta,
            (snapshot) => {
                const dataForm = snapshot.docs.map((documento) => {
                    return {...documento.data(), id: documento.id}
                })
                setDatos(dataForm);
            },
            (error) => {
                console.log(error)
            }
        )

            onSnapshot(
            consulta2,
            (snapshot) => {
                const dataForm2 = snapshot.docs.map((documento) => {
                    return {...documento.data(), id: documento.id}
                })
                setDatos2(dataForm2);
            },
            (error) => {
                console.log(error)
            }
        )

        
    },[usuario])

    const deleteInfo = async (id) => {
        try {
            await deleteDoc(doc(db, 'fitness-info', id));
        } catch(error){
            console.log('Hubo un error al intentar eliminar el usuario')
            console.log(error)
        };
    }

    const deleteInfo2 = async (id) => {
        try {
            await deleteDoc(doc(db, 'aero-info', id));
        } catch(error){
            console.log('Hubo un error al intentar eliminar el usuario')
            console.log(error)
        };
    }

    // La idea es holdear colores en este State y poder usarlos cons los dias de la semana para pintar la rutina.
    const [color, setColor] = useState('')

    const handleColor = (e) => {
        setColor(e.target.value)
        console.log(color)
    }

    return ( 
        <ListMenuContainer>
            {/* <div className="days">
                <label htmlFor="monday">Lunes</label>
                <input type="color" onChange={handleColor} id="monday" name="monday"/>
            </div> */}

            <div className="muscle-box">
                {musculos.sort((a, b) => a.name.localeCompare(b.name)).filter(musculo => musculo.id > 0).map((musculo) => {
                    return (
                            <div key= {musculo.id} className="muscle-info">
                                <h1 key={musculo.id}>{musculo.name}</h1>
                                {datos.filter(dato => dato.muscle == musculo.name).map((dato) => {
                                    return (
                                        <div key={dato.id} className="card-info">
                                            <div className="dato-close">
                                                <p className="dato"><b>Ejercicio:</b> {dato.exercise}</p>
                                                <FontAwesomeIcon onClick={() => deleteInfo(dato.id)} className="close" icon={faXmark} />
                                            </div>
                                            <div className="datos">
                                                <p className="dato "><b>Series:</b> {dato.serie}</p>
                                                <p className="dato "><b>Reps:</b> {dato.reps}</p>
                                                <p className="dato "><b>Inten:</b> {dato.intensity}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                    {aeroEx.sort((a, b) => a.name.localeCompare(b.name)).filter(aero => aero.id > 0).map((aero) => {
                    return (
                            <div key={aero.id} className="muscle-info">
                                <h1 id={aero.name} key={aero.id}>{aero.name}</h1>
                                {datos2.filter(dato2 => dato2.aero == aero.name).map((dato2) => {
                                    return (
                                        <div key={dato2.id} className="card-info">
                                            <div className="dato-close">
                                                <p className="dato"><b>Ejercicio:</b> {dato2.exercise}</p>
                                                <FontAwesomeIcon onClick={() => deleteInfo2(dato2.id)} className="close" icon={faXmark} />
                                            </div>
                                            <div className="datos">
                                                <p className="dato "><b>Tiempo:</b>Nada</p>
                                                <p className="dato "><b>Inten:</b>Nada</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>

        </ListMenuContainer>
     );
}
 
export default ListMenu;

const ListMenuContainer= styled.div`

        height: auto;
        color: ${props => props.theme.fontPrim};
        background-color: ${props => props.theme.fourth};
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 35px;
        margin-top: 9vh;
        width: 95%;
        
        .muscle-box { 
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            height: 100%;
            width: 100%;

            .muscle-info {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 350px;
                height: auto!important;
                min-height: 400px;
                padding: 15px;
                gap: 5px;
                
                @media (max-width: 745px) {
                    width: 100%;
                }

    
                h1 {
                    font-size: 30px;
                    font-weight: 400;
                    padding-bottom: 10px;
                    margin-bottom: 10px;
                    border-bottom: 1px solid ${props => props.theme.primary};
                    width: 100%;

                    @media (max-width: 765px) {
                        font-size: 25px;
                    }

                }
                
                .card-info {
                    background-color: ${props => props.theme.tertiary};
                    padding: 10px;
                    height: auto;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    gap: 5px;
    
                    .dato-close {
                        display: flex;
                        justify-content: space-between;
    
                    }
                    .close {
                        font-size: 12px;
                        padding-right: 5px;
                        color: ${props => props.theme.fontWhite};
                        cursor: pointer;
                        align-self: center;
                        &:hover {
                            color: ${props => props.theme.fontFive};
                        }
                }
                    
                    .datos {
                        display: grid;
                        grid-template-columns: repeat(3, auto);
                    }
                    .dato {
                        font-size: 14px;
                        margin: 0!important;
                        width: auto;
                        color: ${props => props.theme.fontWhite};
    
                    }
                    
            }
        } 
    }
            
`