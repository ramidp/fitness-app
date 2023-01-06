import styled from "styled-components";
import musculos from "../data/info-muscles";
import {useEffect, useState} from 'react'
import {db} from '../firebase/firebaseConfig'
import { addDoc, collection, query} from 'firebase/firestore';
import {useAuth} from '../context/AuthContext'
import Alerta from './Alerta'

const MuscMain = () => {
    
    const consulta = query(
        collection(db, 'fitness-info'),
    )

    const {usuario} = useAuth()

    const [serie, setSerie] = useState(0)
    const [reps, setReps] = useState(0)
    const [muscle, setMuscle] = useState('')
    const [exName, setExName] = useState("Sin Ejercicio Seleccionado")
    const [result, setResult] = useState('')
    const [day, setDay] = useState('Elegir Dia')
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({})
    const [infoHidden, setInfoHidden] = useState(false)

    useEffect (() => {
            const multiply = reps * serie;
            setResult(multiply)
    },[reps, serie])



    const handleSubmit = async (e) => {
        e.preventDefault()

            if (serie !== 0 && reps !== 0 && muscle !== "" && exName !== "Sin Ejercicio Seleccionado" && day !== "Elegir Dia") {
                try {
                    await addDoc(consulta,
                    {
                        muscle: muscle,
                        exercise: exName,
                        serie: serie,
                        reps: reps,
                        fecha: new Date(),
                        intensity: result,
                        day: day,
                        uidUsuario: usuario.uid,

                    });
                } catch (error) {
                    console.log(error);
                }
                setSerie(0);
                setReps(0);
                setMuscle('');
                setExName('Sin Ejercicio Seleccionado');
                setDay('Elegir Dia');
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
                {musculos.sort((a, b) => a.name.localeCompare(b.name)).filter(musculo => musculo.id > 0).map((musculo) => {
                    return (
                        <p className={muscle === musculo.name ? 'arr-item active' : 'arr-item'} key={musculo.id}  id={musculo.id} onClick={() => {setMuscle(musculo.name); setExName('Sin Ejercicio Seleccionado') }}>{musculo.name}</p>
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
            {musculos.filter(musculo => musculo.name === muscle).map(list => (
                <div className="arr-list"key={list.id}>  
                    {list.exercises.ex1 ? <p className={exName === list.exercises.ex1 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex1)} >{list.exercises.ex1}</p> : ''}
                    {list.exercises.ex2 ? <p className={exName === list.exercises.ex2 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex2)} >{list.exercises.ex2}</p> : ''}
                    {list.exercises.ex3 ? <p className={exName === list.exercises.ex3 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex3)} >{list.exercises.ex3}</p> : ''}
                    {list.exercises.ex4 ? <p className={exName === list.exercises.ex4 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex4)} >{list.exercises.ex4}</p> : ''}
                    {list.exercises.ex5 ? <p className={exName === list.exercises.ex5 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex5)} >{list.exercises.ex5}</p> : ''}
                    {list.exercises.ex6 ? <p className={exName === list.exercises.ex6 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex6)} >{list.exercises.ex6}</p> : ''}
                    {list.exercises.ex7 ? <p className={exName === list.exercises.ex7 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex7)} >{list.exercises.ex7}</p> : ''}
                    {list.exercises.ex8 ? <p className={exName === list.exercises.ex8 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex8)} >{list.exercises.ex8}</p> : ''}
                    {list.exercises.ex9 ? <p className={exName === list.exercises.ex9 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex9)} >{list.exercises.ex9}</p> : ''}
                    {list.exercises.ex10 ? <p className={exName === list.exercises.ex10 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex10)} >{list.exercises.ex10}</p> : ''}
                    {list.exercises.ex11 ? <p className={exName === list.exercises.ex11 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex11)} >{list.exercises.ex11}</p> : ''}
                    {list.exercises.ex12 ? <p className={exName === list.exercises.ex12 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex12)} >{list.exercises.ex12}</p> : ''}
                    {list.exercises.ex13 ? <p className={exName === list.exercises.ex13 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex13)} >{list.exercises.ex13}</p> : ''}
                    {list.exercises.ex14 ? <p className={exName === list.exercises.ex14 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex14)} >{list.exercises.ex14}</p> : ''}
                    {list.exercises.ex15 ? <p className={exName === list.exercises.ex15 ? 'arr-item active' : 'arr-item'} onClick={() => setExName(list.exercises.ex15)} >{list.exercises.ex15}</p> : ''}
                </div>
            ))}
            </>
        )
    }

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'series':
            setSerie(e.target.value);
                break;
            case 'repeticiones':
            setReps(e.target.value);
                break;
            case 'week':
            setDay(e.target.value);
                break;
        }
    }

    const Arrange = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    const WeekAndColors = [
        {
            dia: 'Elegir Dia',
            color: 'none'
        },
        {
            dia: 'Lunes',
            color: 'green'
        },
        {
            dia: 'Martes',
            color: 'red'
        },
        {
            dia: 'Miercoles',
            color: 'blue'
        },
        {
            dia: 'Jueves',
            color: 'purple'
        },
        {
            dia: 'Viernes',
            color: 'violet'
        },
        {
            dia: 'Sabado',
            color: 'brown'
        },
        {
            dia: 'Domingo',
            color: 'white'
        }]

    const onReset = () => {
        setSerie(0);
        setReps(0);
        setMuscle('');
        setExName('Sin Ejercicio Seleccionado');
        setDay('Elegir Dia');
    }

    const [typeRepes, setTypeRepes] = useState(false)

    return ( 
        <MainMenuContainer>
            <form onSubmit={handleSubmit}>
                <div className="row p-0 m-0 d-flex justify-content-center">
                    <div className="list col-6 col-md-4">
                        <label className="col-12" htmlFor="muscle">Musculo</label>
                            <MuscMenu/>
                    </div>

                    <div className="list col-6 col-md-4">
                        <label className="col-12" htmlFor="exercise">Ejercicio</label>
                            <ExMenu/>
                    </div>
                    
                    <div className="list col-12 col-md-4">
                        <div className="label-input col-12">
                            <label className="col-12" htmlFor="series">Series</label>
                            <select value={serie} onChange={handleChange} name="series" id="">
                            <option disabled value={Arrange[0]}>{Arrange[0]}</option>
                                {Arrange.slice(1,30).filter(item => item < 11).map((item) => {
                                    return (
                                        <option key={item} value={item}>{item}</option>
                                    )
                                })}

                            </select>
                        </div>

                        <div className="label-input col-12">
                            <label className="col-12" htmlFor="repeticiones">Repeticiones</label>

                            <div className="series-type d-flex gap-3">
                                <p className={typeRepes === false ? 'active' : ''} onClick={() => setTypeRepes(false)}>Lineal</p>
                                <p className={typeRepes === false ? '' : 'active'} onClick={() => setTypeRepes(true)}>Mix</p>
                            </div>

                            <select value={reps} onChange={handleChange} name="repeticiones" id="">
                            <option disabled value={Arrange[0]}>{Arrange[0]}</option>
                                {Arrange.slice(1,31).map((item) => {
                                    return (
                                        <option key={item} value={item}>{item}</option>
                                    )
                                })}

                                </select>
                        </div>
                        <div className="label-input col-12">
                            <label className="col-12" htmlFor="">Día de semana</label>
                            <select value={day} onChange={handleChange} name="week" id="">
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
                                    (Mas info)
                                    </a>
                                </span>
                            </label>
                            <h1>{result} </h1>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-12 col-md-4">
                        <button className="col-2" type="submit">Guardar</button>
                        {/* Esto es una p y no un button para que no tome el cartel del Submit (Please fill the fields)  */}
                        <p className="button col-2" onClick={onReset} >Reset</p> 
                    </div>
                </div>
            </form>

            <Alerta
            tipo={alerta.tipo}
            mensaje={alerta.mensaje}
            estadoAlerta={estadoAlerta}
            cambiarEstadoAlerta={cambiarEstadoAlerta}/>

        </MainMenuContainer>
     );
}
 
export default MuscMain;

const MainMenuContainer= styled.div`

        height: auto;
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

        .inten-label {
            span {
                padding-left: 10px;
                a {
                    color: inherit;
                    text-decoration: none;
                }
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
                margin-right: 10px;
                font-size: 20px;

                @media (max-width: 765px) {
                        font-size: 16px;
                    }
                

            }

            label {
                padding-bottom: 10px;
                margin-bottom: 10px;
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
                    height: 58px;
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