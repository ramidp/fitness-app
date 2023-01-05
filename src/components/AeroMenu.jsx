import styled from "styled-components";
import aeroex from "../data/info-aero";
import {useEffect, useState} from 'react'
import {db} from '../firebase/firebaseConfig'
import { addDoc, collection, query } from 'firebase/firestore';
import {useAuth} from '../context/AuthContext'
import Alerta from './Alerta'



// Cosas a agregar al menu de Aerobico
// Tiempo y Días (Estos deberian sumarse en la semana)
// Tambien le vamos a crear un KPI de intensidad y calorias (Esto hay que sumarlo a los ejercicios tmb de musculatura)
// Esto ultimo irá todo en una sección llamada Calculadora o Info de Rutina

const AeroMenu = () => {

    const {usuario} = useAuth()

    
    const consulta = query(
        collection(db, 'aero-info'),
    )

    const [aeroEx, setAeroEx] = useState('')
    const [tiempo, setTiempo] = useState(0)
    const [exName, setExName] = useState("Sin Ejercicio Seleccionado")
    const [day, setDay] = useState('Elegir Dia')
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({})
    const [result, setResult] = useState('')
    const [infoHidden, setInfoHidden] = useState(false)

    useEffect (() => {
        const multiply = (tiempo/60) * 10;
        setResult(multiply)
    },[tiempo])

    const handleInfoHidden = () => {
       setInfoHidden(!infoHidden)
    }



    const handleSubmit = async (e) => {
        e.preventDefault()

            if (aeroEx !==  "" && exName !== "Sin Ejercicio Seleccionado" && day !== "Elegir Dia") {
                try {
                    await addDoc(consulta,
                    {
                        aero: aeroEx,
                        exercise: exName,
                        fecha: new Date(),
                        day: day,
                        uidUsuario: usuario.uid,
                        tiempo: tiempo,
                    });
                } catch (error) {
                    console.log(error);
                }
                setAeroEx('');
                setExName('Sin Ejercicio Seleccionado');
                setDay('Elegir Dia');
                setTiempo(0);
            } else {
                cambiarEstadoAlerta(true);
                cambiarAlerta({
                 tipo: "error",
                 mensaje: "Por favor completar todos los campos"
                })
                return;
            }
        }

    
    const MuscMenu = () => {

    const ItemMenu = () => {

        return (
            <div className="arr-list">
                {aeroex.sort((a, b) => a.name.localeCompare(b.name)).filter(aero => aero.id > 0).map((aero) => {
                    return (
                        <p className={aeroEx == aero.name ? 'arr-item active' : 'arr-item'} key={aero.id}  id={aero.id} onClick={() => {setAeroEx(aero.name); setExName('Selecciona un Ejer Aerobico')}}>{aero.name}</p>
                    )
                })}
            </div>
        )
    }

        return (
            <>
                <ItemMenu />
            </>
        )
    }

    const ExMenu = () => {

        return (
            <>
            {aeroex.filter(aero => aero.name == aeroEx).map(list => (
                <div className="arr-list"key={list.id}>  
                    {list.exercises.ex1 ? <p className={exName == list.exercises.ex1 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex1)} >{list.exercises.ex1}</p> : ''}
                    {list.exercises.ex2 ? <p className={exName == list.exercises.ex2 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex2)} >{list.exercises.ex2}</p> : ''}
                    {list.exercises.ex3 ? <p className={exName == list.exercises.ex3 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex3)} >{list.exercises.ex3}</p> : ''}
                    {list.exercises.ex4 ? <p className={exName == list.exercises.ex4 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex4)} >{list.exercises.ex4}</p> : ''}
                    {list.exercises.ex5 ? <p className={exName == list.exercises.ex5 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex5)} >{list.exercises.ex5}</p> : ''}
                    {list.exercises.ex6 ? <p className={exName == list.exercises.ex6 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex6)} >{list.exercises.ex6}</p> : ''}
                </div>
            ))}
            </>
        )
    }

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'tiempo':
            setTiempo(e.target.value);
                break;
            case 'week':
            setDay(e.target.value);
                break;
        }
    }

    const Arrange = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    const Seconds = [0,30,60,90,120,180,210,240,270,300,330,360,390,420,450,480,510,540,570,600,630,660,690,720,750,780,810,840,870,900];
    const WeekAndColors = [
        {
            dia: 'Elegir Dia',
            color: 'none'
        },
        {
            dia: 'Lunes',
            color: 'yellow'
        },
        {
            dia: 'Martes',
            color: 'yellow'
        },
        {
            dia: 'Miercoles',
            color: 'yellow'
        },
        {
            dia: 'Jueves',
            color: 'yellow'
        },
        {
            dia: 'Viernes',
            color: 'yellow'
        },
        {
            dia: 'Sabado',
            color: 'yellow'
        },
        {
            dia: 'Domingo',
            color: 'yellow'
        }]

    const onReset = () => {
        setAeroEx('');
        setExName('Sin Ejercicio Seleccionado');
        setDay('Elegir Dia');
        setTiempo(0);
    }

    return ( 
        <AeroMenuContainer>
            
            <form onSubmit={handleSubmit}>
                <div className="row p-0 m-0 d-flex justify-content-center">
                    <div className="list col-6 col-md-4">
                        <label className="col-12" htmlFor="aero">Aeróbico</label>
                            <MuscMenu/>
                    </div>
                    <div className="list col-6 col-md-4">
                        <label className="col-12" htmlFor="exercise">Ejercicio</label>
                            <ExMenu/>
                    </div>
                    <div className="list col-12 col-md-4">
                        <div className="label-input">
                            <label className="col-12" htmlFor="">Tiempo <span>(Segundos)</span></label>
                            <select value={tiempo} onChange={handleChange} name="tiempo" id="">
                                <option disabled value={Seconds[0].dia}>{Seconds[0]}</option>
                                {Seconds.slice(1,30).map((item) => {
                                    return (
                                        <option key={item} value={item}>{item}</option>
                                        )
                                    })}
                            </select>
                        </div>
                        <div className="label-input col-12">
                                <label className="col-12" htmlFor="">Día de semana</label>
                                <select  value={day} onChange={handleChange} name="week" id="">
                                <option disabled value={WeekAndColors[0].dia}>{WeekAndColors[0].dia}</option>
                                    {WeekAndColors.slice(1,8).map((day) => {
                                            return (
                                                    <option key={day.dia} value={day.dia}>{day.dia}</option>
                                            )
                                        })}
                                </select>
                        </div>

                        <div className="label-input col-12">
                            <label className="col-12 inten-label" htmlFor="">Intensidad 
                            <span>
                                <a href="/info-util">
                                (Más Info)
                                    </a>
                                </span>
                            </label>
                            <h1>{result} </h1>
                        </div>

                    </div>

                    <div className="d-flex justify-content-center col-12 col-md-4">
                        <button className="col-2" type="submit">Guardar</button>
                        <p className="button col-2" onClick={onReset} >Reset</p> 
                    </div>
                </div>
            </form>

            <Alerta
            tipo={alerta.tipo}
            mensaje={alerta.mensaje}
            estadoAlerta={estadoAlerta}
            cambiarEstadoAlerta={cambiarEstadoAlerta}/>


        </AeroMenuContainer>
     );
}
 
export default AeroMenu;

const AeroMenuContainer= styled.div`

        height: auto;
        min-height: 90vh;
        color: ${props => props.theme.fontPrim};
        background-color: ${props => props.theme.fourth};
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 35px;
        margin-top: 9vh;
        width: 95%;

        .button, button {
            height: 40px;
            width: 90px;
            background-color: ${props => props.theme.primary};
            color: ${props => props.theme.fontWhite};
            border: none;
            font-weight: 500;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px;
            cursor: pointer;
            &:hover {
                background-color: ${props => props.theme.hover};
                color: ${props => props.theme.fontWhite};
            }
        }

        form {
            width: 100%;
            height: auto;
            flex-direction: row;
            align-items: center;

            .list {
                height: 75vh;
            }
            .arr-list {
                height: 65vh;
                overflow: auto;

                .active {
                    color: ${props => props.theme.fontPrim}!important;
                    font-weight: 700;
                    display: block;
                }
                .arr-item {
                    margin-bottom: 10px;
                    width: fit-content;
                    font-size: 25px;
                    cursor: pointer;
                    @media (max-width: 921px) {
                        font-size: 20px;
                    }

                    @media (max-width: 765px) {
                        font-size: 18px;
                    }
                    &:hover {
                        font-weight: 700;
                    }
                }
            }
            select {
                overflow: hidden;
                margin-right: 10px;
                font-size: 20px;
                

                option {
                    height: auto;
                    background-color: inherit;
                    padding: 5px;

                }

                @media (max-width: 765px) {
                        font-size: 16px;
                    }

            }
        .inten-label {
            span {
                padding-left: 10px;
                a {
                    color: inherit;
                    text-decoration: none;
                }
            }
        }

            label {
                padding-bottom: 10px;
                margin-bottom: 10px;
                border-width: 100%!important;
                border-bottom: 1px solid ${props => props.theme.primary};
                font-size: 30px;
                font-weight: 400;
                
                @media (max-width: 921px) {
                        font-size: 27px;
                    }


                @media (max-width: 765px) {
                        font-size: 25px;
                    }


                span {
                    cursor: pointer;
                    font-size: 20px;
                    &:hover {
                        font-weight: bold;
                    }
                }
            }
            
        }
            .label-input {
                height: auto;
                padding: 0 0 30px 0;
                
                select {
                    color: ${props => props.theme.fontPrim};
                    option {
                        color: ${props => props.theme.fontPrim};
                    }
                }
                h1 {
                    font-size: 30px;
                    @media (max-width: 765px) {
                        font-size: 20px;
                    }

                }
            .series-type {
                p {
                    cursor: pointer;

                }
                .active {
                    font-weight: bold;
                }
            }
         }

`