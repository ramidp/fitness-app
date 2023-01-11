import styled from "styled-components";
import useObtenerDatos from "../hooks/useObtenerDatos";
import {useEffect, useState} from 'react'


const WeekMenu = () => {

const [datos, datos2] = useObtenerDatos('')

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
        }];

        {Object.values(datos).map(function (num, idx) {
            return num + datos2[idx];
        })}


        // Aca se escribria el codigo para que los colores se puedan setear en un INPUT a gusto del cliente.
        // const [color1, setColor1] = useState([])

        // useEffect(() => {
        //     // Aca va el codigo que guardaria el cambio del input color
        // },[color1])

    
    return ( 
        <WeekMenuContainer>
            <div className="semana-box">
                {/* <label htmlFor="">Biceps</label>
                <input type="color" value={color1} onChange={(e) => setColor1(e.target.value)}/> */}
                {WeekAndColors.slice(1,8).map((day) => {
                    return (
                <div key={day.dia} className="dia-info">
                    <div className="titulo-dia">
                        <h1>{day.dia}</h1>
                        <p>Calorias del día
                            <span>
                                <br />
                        Musculaciión: {Object.values(datos).filter(dato => dato.day == day.dia).reduce((r, { calories }) => r + calories, 0)}
                        <br />
                        Aeróbico: {Object.values(datos2).filter(dato2 => dato2.day == day.dia).reduce((r, { calories }) => r + calories, 0)}
                            </span>
                        </p>
                    </div>
                        <div  className="card-info">
                        {datos.filter(dato => dato.day == day.dia).map((dato) => {
                                    return (
                                        <div key={dato.id} style={{
                                        background: dato.muscle === 'Biceps' && 'red' 
                                        || dato.muscle === 'Triceps' && 'red'
                                        || dato.muscle === 'Cuadriceps' && 'violet'
                                        || dato.muscle === 'Gemelos' && 'violet'
                                        || dato.muscle === 'Gluteos / Cadera' && 'violet'
                                        || dato.muscle === 'Abductores' && 'violet'
                                        || dato.muscle === 'Aductores' && 'gray'
                                        || dato.muscle === 'Trapecios' && 'green'
                                        || dato.muscle === 'Piernas' && 'violet'
                                        || dato.muscle === 'Hombros' && 'green'
                                        || dato.muscle === 'Pecho' && 'blue'
                                        || dato.muscle === 'Espalda' && 'blue'
                                        
                                        }} 
                                            className="card-day">
                                                <h1 className="dato dato2"><b>{dato.muscle}</b> </h1>
                                                <h1 className="dato"><b>Ejercicio:</b> {dato.exercise}</h1>
                                        </div>
                                    )
                                })
                                }

                        {datos2.filter(dato2 => dato2.day == day.dia).map((dato2) => {
                                    return (
                                        <div key={dato2.id} className="card-day aero-day">
                                                <h1 className="dato2"><b>{dato2.aero}</b> </h1>
                                                <h1 className="dato2"><b>Ejercicio:</b> {dato2.exercise}</h1>
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
        width: 80%;
        @media (max-width: 1200px) {
            width: 95%;
            padding: 20px;
            /* margin-top: 1vh;
            padding-bottom: 8vh; */
        }

    .semana-box { 
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            height: auto;
            min-height: 80vh;
            width: 100%;

            .dia-info {
                display: flex;
                flex-direction: column;
                width: 350px;
                min-height: 200px;
                height: auto;
                padding: 15px;
                gap: 5px;

                @media (max-width: 778px) {
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
                    padding-bottom: 5px;
                    width: 100%;

                    @media (max-width: 778px) {
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
                        height: 100px;
                        display: flex;
                        flex-direction: column;

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