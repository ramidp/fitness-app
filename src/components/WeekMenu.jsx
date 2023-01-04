import { query, collection, orderBy, onSnapshot, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {db} from "../firebase/firebaseConfig";
import { useAuth } from '../context/AuthContext';

const WeekMenu = () => {

const {usuario} = useAuth();

    const WeekAndColors = [
        {   
            id: 0,
            dia: 'Elegir Dia',
            color: 'none',
        },
        {   
            id: 1,
            dia: 'Lunes',
            color: 'green',
        },
        {   
            id: 2,
            dia: 'Martes',
            color: 'darkRed',
        },
        {
            id: 3,
            dia: 'Miercoles',
            color: 'blue',
        },
        {
            id: 4,
            dia: 'Jueves',
            color: 'purple',
        },
        {
            id: 5,
            dia: 'Viernes',
            color: 'violet',
        },
        {
            id: 6,
            dia: 'Sabado',
            color: '#113f67',
        },
        {
            id: 7,
            dia: 'Domingo',
            color: 'black'
        }]
    
    const consulta = query(
        collection(db, 'fitness-info'),
        orderBy('muscle', 'asc'),
        where('uidUsuario', "==", usuario.uid)
    )

    const consulta2 = query(
        collection(db, 'aero-info'),
        orderBy('aero', 'asc'),
        where('uidUsuario', "==", usuario.uid)
    )

    const [datos, setDatos] = useState([])
    const [datos2, setDatos2] = useState([])
    const [resultado, setResultado] = useState([])



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
    },[])
    
    return ( 
        <WeekMenuContainer>
            <div className="semana-box">
                {WeekAndColors.slice(1,8).map((day) => {
                    return (
                <div key={day.dia} className="dia-info">
                    <div className="titulo-dia">
                    <h1>{day.dia}</h1>
                    <p>Intensidad del dia:
                        <span>
                    {Object.values(datos).filter(dato => dato.day == day.dia).reduce((r, { intensity }) => r + intensity, 0)}
                    {/* {Object.values(datos2).filter(dato2 => dato2.day == day.dia).reduce((r, { intensity }) => r + intensity, 0)} */}
                        </span>
                    </p>
                    </div>
                        <div  className="card-info">
                        {datos.filter(dato => dato.day == day.dia).map((dato) => {
                                    return (
                                        <div key={dato.id} style={{background: dato.day == day.dia ? day.color : ''}} className="card-day">
                                            <div className="dato-close">
                                                <h1 className="dato dato2"><b>{dato.muscle}</b> </h1>
                                                <h1 className="dato"><b>Ejercicio:</b> {dato.exercise}</h1>
                                            </div>
                                        </div>
                                    )
                                })
                                }

                        {datos2.filter(dato2 => dato2.day == day.dia).map((dato2) => {
                                    return (
                                        <div key={dato2.id} className="card-day aero-day">
                                            <div className="dato-close">
                                                <h1 className="dato2"><b>{dato2.aero}</b> </h1>
                                                <h1 className="dato2"><b>Ejercicio:</b> {dato2.exercise}</h1>
                                            </div>
                                        </div>
                                    )
                                })}
                        </div>
                 </div>
                    )
                })}
            </div>
        </WeekMenuContainer>
     );
}
 
export default WeekMenu;

const WeekMenuContainer = styled.div`

        height: auto;
        color: ${props => props.theme.fontPrim};
        background-color: ${props => props.theme.fourth};
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 35px;
        margin-top: 9vh;
        width: 95%;


    .semana-box { 
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            height: 100%;
            width: 100%;

            .dia-info {
                display: flex;
                flex-direction: column;
                width: 350px;
                height: auto!important;
                min-height: 400px;
                padding: 15px;
                gap: 5px;

                @media (max-width: 745px) {
                    width: 100%;
                }
                
                .titulo-dia {
                    margin-bottom: 10px;
                    border-bottom: 1px solid ${props => props.theme.primary};
                    p {
                    font-weight: bold;
                        span {
                        padding-left: 5px;
                        font-weight: 100;
                        }

                    }
                }

                h1 {
                    font-size: 30px;
                    font-weight: 400;
                    padding-bottom: 10px;
                    width: 100%;

                    @media (max-width: 765px) {
                        font-size: 25px;
                    }

                }
                
                .card-info {
                    width: 100%;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;

                    .card-day {
                        padding: 10px;
                        border: 1px solid white;
                        width: 50%;
                        .dato {
                            font-size: 14px;
                            border: none;
                            margin: 0;
                            color: ${props => props.theme.fontWhite};
                        }
                        .dato2 {
                            margin: 0;
                            border:none;
                            font-size: 14px;
                        }
                    }

                    .aero-day {
                        padding-bottom: 10px;
                        font-size: 15px;
                        border: 1px solid white;
                        margin: 0;
                        background-color: yellow!important;
                        color: black!important;
                    }


                    p { 
                        margin: 0;
                        color: ${props => props.theme.fontWhite};
                    }
                    
            }
        } 
    }
`