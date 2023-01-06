import styled from "styled-components";


const InfoUtil = () => {

    return ( 
        <InfoUtilContainer>
            <div className="submenu">
                <a href="#calorias">Calorias</a>
                <a href="#intensidad">Intensidad</a>
                <a href="#tipsyconsejos">Tips/Consejos</a>
            </div>
            <div id="calorias" className="col-12 section calorias">
                <h1>Calorias</h1>

                <div className="row g-3">
                    <div className="col-12 col-md-6 m-0">
                        <p className="m-0">Para calcular las calorias totales de una serie tomaremos como referencia la siguiente tabla donde se aconsejan los siguientes tiempos para una serie y descanso.
                            De 1 Minuto a 1 Minuto y 30 Segundos de descanso entre series.
                            1 Minuto de Ejecución de la serie.
                            de 2 a 3 Minutos de Descanso entre ejercicios 
                            Esto da un total de 6 a 10 minutos por ciclo total de series de un ejercicio dependiendo la cantidad de series y repeticiones.
                            Siempre tener en cuenta que esto es una referencia, que las calorias quemadas dependerán de varios otros factores como la intensidad del ejercicio y las pulsaciones por minuto al momento de ejecución.
                        </p>
                    </div>

                    <div className="d-flex flex-column align-items-center col-12 col-md-6 m-0 gap-2">
                        <h4>Tabla Referencia Calorias:</h4>
                        <table>
                            <thead>
                                <tr>    
                                    <th>Tiempos</th>
                                    <th>Calorias</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>45-50 Mins</td>
                                    <td>250-300 cals</td>
                                </tr>
                                <tr>
                                    <td>8-10 Mins</td>
                                    <td>50-60 cals</td>
                                </tr>
                                <tr>
                                    <td>1 Minuto</td>
                                    <td>6-8 Cals</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                    {/* <h1>Tabla Calorias:</h1>
                    <table>
                        <tr>
                            <th>Intensidad</th>
                            <th>Calorias</th>
                        </tr>
                        <tr>
                            <td>Muy Bajo (1 - 30)</td>
                            <td>20 cals</td>
                        </tr>
                        <tr>
                            <td>Bajo (31 - 60)</td>
                            <td>20 cals</td>
                        </tr>
                        <tr>
                            <td>Intermedio (61 - 100)</td>
                            <td>20 cals</td>
                        </tr>
                        <tr>
                            <td>Alto (101 - 150)</td>
                            <td>20 cals</td>
                        </tr>
                        <tr>
                            <td>Muy Alto (151+)</td>
                            <td>20 cals</td>
                        </tr>
                    </table> */}
            </div>
            <div id="intensidad" className="col-12 section intensidad">
                <h1>Intensidad</h1>
                <div className="row g-3">
                    <p className="col-12 col-md-6 m-0"> Es un índice que se calcula para medir el desgaste y la potencia del ejercicio en relación a las repeticiones que hacemos, a la cantidad de series, al peso y al tiempo. 
                        Es decir que tomamos como unidades de medida las siguientes unidades:

                        Repeticiones realizadas en el total de una serie de un ejercicio determinado

                        Series totales en un ejercicio determinado.

                        Peso utilizado para la totalidad de la serie.

                        Tiempo ejercido en una serie tanto de descanso como tiempo utilizado para ejercitar neto.

                        Cuenta:
                        (Reps x Series x Peso x Tiempo)
                    </p>
                    <div className="d-flex flex-column align-items-center col-12 col-md-6 m-0 gap-2">
                        <h4>Tabla Referencia Intensidad:</h4>
                        <table>
                            <thead>
                                <tr>
                                    <th>Guia de Nivel de Intensidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> Bajo (31-60) </td>
                                </tr>
                                <tr>
                                    <td> Muy Bajo (30-100) </td>
                                </tr>
                                <tr>
                                    <td> Intermedio (61-100) </td>
                                </tr>
                                <tr>
                                    <td>Alto (101-150) </td>
                                </tr>
                                <tr>
                                    <td> Muy Alto (151+)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div id="tipsyconsejos" className="col-12 section">
                <h1>Tips/Consejos</h1>
                <div>
                    <p className="col-6 m-0"> 
                    </p>
                </div>
            </div>
        </InfoUtilContainer>
     );
}
 
export default InfoUtil;

const InfoUtilContainer = styled.div`

        height: auto;
        color: ${props => props.theme.fontWhite};
        background-color: ${props => props.theme.primary};
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 35px;
        margin-top: 9vh;
        width: 70%;
        @media (max-width: 1200px) {
            width: 95%;
        }

    .submenu {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        @media (max-width: 700px) {
            gap: 10px;
        }
        a { 
            padding: 5px;
            width: auto;
            color: ${props => props.theme.fontWhite};
            margin: 0;
            text-decoration: none;
            &:hover {
                font-weight: 700;
            }
        }
    }
    
    table {
        border: 1px solid white;
        width: 70%;
        tr, td, th {
            border: 1px solid white;
            padding: 10px;
            text-align: center;
            @media (max-width: 700px) {
                padding: 5px;
            }
        }
    }
    p { 
        padding: 10px;
        font-size: 20px;
        text-align: justify;
        @media (max-width: 700px) {
            font-size: 16px;
        }
    }
    h1 {
        width: fit-content;
        font-size: 30px;
        @media (max-width: 700px) {
            font-size: 25px;
        }

    }
    h4 {
        width: fit-content;
        font-size: 24px;
        text-align: center;
        @media (max-width: 700px) {
            font-size: 20px;
        }

    }

    .calorias {
        border-bottom: 1px solid ${props => props.theme.fourth};
        div {
            display: flex;
        }
    }
    .intensidad {
        border-bottom: 1px solid ${props => props.theme.fourth};
        div {
            display: flex;
        }
    }
    .section {
        height: auto;
        min-height: 90vh;
        width: 100%;
        padding-top: 80px;
        padding: 15px 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 80px;
        padding-bottom: 50px;
    }
`
