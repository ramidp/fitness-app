import { useEffect, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import useObtenerDatos from "../hooks/useObtenerDatos";


const Main = () => {

    const [today, setToday] = useState('')
    const [deleted, setDeleted] = useState(false)
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
                setToday("Sábado");
            }
        },[today])


    return ( 
        <Container>
            <div className="main-box">
                <div className="tip-box">
                    <h4>Consejos del Dia</h4>
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
                </div>

                <div className="day-box">
                <h1 className="day-title">{today}</h1>
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
        color: ${props => props.theme.fontPrim};
        background-color: ${props => props.theme.fourth};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 35px;
        margin-top: 9vh;
        width: 95%;

    .tip-box {
        padding: 5px;
        .tips {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
            background-color: ${props => props.theme.primary};
            padding: 10px;
            p {
                color:  ${props => props.theme.fontWhite};
                margin: 0;
            }
        }
    }
        
        .close {
            font-size: 12px;
            padding-right: 5px;
            color: ${props => props.theme.fontWhite};
            cursor: pointer;
            align-self: center;
            &:hover {
                color: ${props => props.theme.fontWhite};
            }
        }

    .main-box {
        display: flex;
        justify-content: space-around;
        align-items: center;

        .day-box {
            width: 50%;
    
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
                            border: 1px solid white;
                            margin: 0;
                            background-color: #113f67!important;
                            color: white!important;
                        }
    
    
                        p { 
                            margin: 0;
                            color: ${props => props.theme.fontWhite};
                        }
                        
                }
        }
    }
`