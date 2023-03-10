import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import musculos from "../data/info-muscles";
import aeroex from "../data/info-aero";
import useObtenerDatos2 from "../hooks/useObtenerDatos2";
import {useState} from 'react';
import Alerta from './Alerta'
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig"


const Peso = ({id}) => {
    
    // Falta la parte VISUAL de que oculte el peso para editarlo.

    
    const [hide, setHide] = useState(true)
    const [peso, setPeso] = useState('0')
    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({})



    const documento = doc(db, 'fitness-info', id)
        
        const handleChange = (e) => {
            setPeso(e.target.value)
        }   

    const handleSubmit =  async (e) => {
       
        e.preventDefault();
        
        if (peso !== "0" ) {
            try {
                await updateDoc(documento, 
                    {   peso: peso,
                    });
                    cambiarEstadoAlerta(true);
                    cambiarAlerta({
                        tipo: "exito",
                        mensaje: "Se ha agregado el peso correctamente"});
                        
                    } catch (error) {
                        console.log(error);
                    }
                    setPeso('0');
                    setHide(true)
                    
            } else {
                cambiarEstadoAlerta(true);
                cambiarAlerta({
                 tipo: "error",
                 mensaje: "Por favor completar el campo de peso"
                })
                return;
                }

        }


    return (

            <div className="d-flex justify-content-between">
                {hide === false ? 
                <>
                    <input className="input-peso" placeholder="0" value={peso} onChange={handleChange} type="number" />
                    <p className="dato">kgs</p>
                    <form onSubmit={handleSubmit} action="">
                        <button className="pesobtn" type="submit">Save</button>
                    </form>
                </>
                :
                <>  
                    <button className="pesobtn" onClick={() => setHide(false)}>Edit</button>
                </>
                }
                <Alerta
                tipo={alerta.tipo}
                mensaje={alerta.mensaje}
                estadoAlerta={estadoAlerta}
                cambiarEstadoAlerta={cambiarEstadoAlerta}/>
    
            </div>
     )
}


const ListMenu = () => {

    const [estadoAlerta, cambiarEstadoAlerta] = useState(false);
    const [alerta, cambiarAlerta] = useState({})
    const [datos, datos2, deleteInfo, deleteInfo2] = useObtenerDatos2('')

    return ( 
        <ListMenuContainer>
            {/* <div className="days">
                <label htmlFor="monday">Lunes</label>
                <input type="color" onChange={handleColor} id="monday" name="monday"/>
            </div> */}
            <div className="muscle-box">
                {musculos.sort((a, b) => a.name.localeCompare(b.name)).filter(musculo => musculo.id > 0).map((musculo) => {
                    return (
                            <div key={musculo.id} className="muscle-info">
                                <h1 key={musculo.id}>{musculo.name}</h1>
                                {datos.filter(dato => dato.muscle === musculo.name).map((dato) => {
                                    return (
                                        <div key={dato.id} id={dato.id}className="card-info">
                                            <div className="dato-close">
                                                <p className="dato"><b>Ejercicio:</b> {dato.exercise}</p>
                                                <FontAwesomeIcon onClick={() => deleteInfo(dato.id)} className="close" icon={faXmark} />
                                            </div>
                                            <div className="datos">
                                                <p className="dato"><b>Series:</b> {dato.serie}</p>
                                                <p className="dato"><b>Reps:</b> {dato.reps}</p>
                                                <p className="dato"><b>Cals:</b> {dato.calories}</p>
                                                <>
                                                    <p className="dato"><b>Peso:
                                                        </b> <span>
                                                                    {dato.peso}
                                                            </span>
                                                            kgs
                                                        </p>
                                                    <Peso id={dato.id}/>
                                                    
                                                </>
                                            </div>
                                        </div>
           
                                        )
                                })}
                            </div>
                        )
                    })}
                    {aeroex.sort((a, b) => a.name.localeCompare(b.name)).filter(aero => aero.id > 0).map((aero) => {
                    return (
                            <div key={aero.id} className="muscle-info">
                                <h1 key={aero.id}>{aero.name}</h1>
                                {datos2.filter(dato2 => dato2.aero === aero.name).map((dato2) => {
                                    return (
                                        <div key={dato2.id} className="card-info">
                                            <div className="dato-close">
                                                <p className="dato"><b>Ejercicio:</b> {dato2.exercise}</p>
                                                <FontAwesomeIcon onClick={() => deleteInfo2(dato2.id)} className="close" icon={faXmark} />
                                            </div>
                                            <div className="datos">
                                                <p className="dato "><b>Tiempo:</b> {dato2.tiempo}</p>
                                                <p className="dato "><b>Cals:</b> {dato2.calories}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>

                <Alerta
            tipo={alerta.tipo}
            mensaje={alerta.mensaje}
            estadoAlerta={estadoAlerta}
            cambiarEstadoAlerta={cambiarEstadoAlerta}/>


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
        width: 90%;
        @media (max-width: 1200px) {
            width: 95%;
            padding: 20px;
            /* margin-top: 1vh;
            padding-bottom: 8vh; */
        }

        .input-peso {
            width: 50px;
            font-size: 14px;
            background-color: white;
            border: none;

        }
        .pesobtn {
            background: inherit;
            border: none;
            color: ${props => props.theme.fontWhite};
            font-weight: 600;
            font-size: 12px;
        }
        
        .muscle-box { 
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            height: 100%;
            width: 100%;
            min-height: 100vh;

            .muscle-info {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 350px;
                height: auto!important;
                min-height: 200px;
                padding: 15px;
                gap: 5px;
                
                @media (max-width: 778px) {
                    width: 100%;
                }

    
                h1 {
                    font-size: 30px;
                    font-weight: 400;
                    padding-bottom: 5px;
                    margin-bottom: 10px;
                    border-bottom: 1px solid ${props => props.theme.primary};
                    width: 100%;

                    @media (max-width: 778px) {
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