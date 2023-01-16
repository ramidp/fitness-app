import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import useObtenerDatos from "../hooks/useObtenerDatos";


const Main = () => {

    const [today, setToday] = useState('')
    const [deleted, setDeleted] = useState(false)
    const [deleted2, setDeleted2] = useState(false)
    const [datos, datos2] = useObtenerDatos('')

    

    useEffect(() => {
        switch (new Date().getDay()) {
            case 0:
              setToday("Domingo");
              break;
            case 1:
                setToday("Lunes");
                break;
            case 2:
                setToday("Martes");
                break;
            case 3:
                setToday("Miercoles");
                break;
            case 4:
                setToday("Jueves");
                break;
            case 5:
                setToday("Viernes");
                break;
            case 6:
                setToday("Sabado");
            }
        },[today])


    return ( 
        <Container>
            <div className="main-box">
                <div className="tip-box">
                    <h1>Consejos del Dia</h1>
                    <>
                    {deleted === false ?
                        <div className="tips">
                            <p>No olvides de beber tus 2 litros de agua diaros</p>
                            <FontAwesomeIcon onClick={() => setDeleted(true)} className="close" icon={faXmark} />
                        </div>
                        :
                        <></>
                    }
                    </>
                    <>
                    {deleted2 === false ?
                        <div className="tips">
                            <p>Tomate 3 minutos de descanso entre ciclo de ejercicios para una mayor eficiencia en tu entrenamiento.</p>
                            <FontAwesomeIcon onClick={() => setDeleted2(true)} className="close" icon={faXmark} />
                        </div>
                        :
                        <></>
                    }
                    </>
                </div>

                <div className="day-box">
                <h1 className="day-title">{today}</h1>
                <div className="titulo-dia">
                        <p>
                            <b>
                            Calorias del día
                            </b>
                            <span>
                                <br />
                        Musculaciión: {Object.values(datos).filter(dato => dato.day == today).reduce((r, { calories }) => r + calories, 0)}
                        <br />
                        Aeróbico: {Object.values(datos2).filter(dato2 => dato2.day == today).reduce((r, { calories }) => r + calories, 0)}
                            </span>
                        </p>
                    </div>

                <div  className="card-info">
                        {datos.filter(dato => dato.day == today).map((dato) => {
                                    return (
                                        <div key={dato.id} style={{background: '#113f67'}} className="card-day">
                                            <div className="dato-close">
                                                <h1 className="dato dato2"><b>{dato.muscle}</b> </h1>
                                                <h1 className="dato"><b>Ejercicio:</b> {dato.exercise}</h1>
                                            </div>
                                        </div>
                                    )
                                })
                                }

                        {datos2.filter(dato2 => dato2.day == today).map((dato2) => {
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
            </div>
        </Container>
     );
}
 
export default Main;

const Container = styled.div`

        height: auto;
        min-height: 50vh;
        color: ${props => props.theme.fontPrim};
        background-color: ${props => props.theme.fourth};
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 35px;
        margin-top: 9vh;
        width: 90%;
        @media (max-width: 1200px) {
            width: 95%;
            padding: 20px;
            min-height: 90vh;
            /* margin-top: 1vh;
            padding-bottom: 8vh; */
        }


    .tip-box {
        width: 90vw;
        height: auto;
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        gap: 10px;

        .tips {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            gap: 20px;
            background-color: ${props => props.theme.primary};
            padding: 10px 20px;
            width: 60%;
            @media (max-width: 1200px) {
                width: 90%;
            }
            p {
                color:  ${props => props.theme.fontWhite};
                margin: 0;
                text-align: center;
            }
        }
    }
        
        .close {
            font-size: 12px;
            padding-right: 5px;
            color: ${props => props.theme.fontWhite};
            cursor: pointer;
            align-self: center;
            margin: 0;
            &:hover {
                color: ${props => props.theme.fontWhite};
            }
        }

    .main-box {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        height: auto;
        width: 100%;
    

        @media (max-width: 1200px) {
            height: auto;
        }


        .day-box {
            width: 80%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 10px;
            @media (max-width: 1200px) {
                width: 100%;
            }
    
            .day-title {
                font-size: 30px;
                text-align: center;
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
                            border: 1px solid ${props => props.theme.primary};
                            margin: 0;
                            background-color: ${props => props.theme.fourth} ;
                            color: ${props => props.theme.fontPrim}!important;
                        }
    
    
                        p { 
                            margin: 0;
                            color: ${props => props.theme.fontWhite};
                        }
                        
                }
        }
    }
`