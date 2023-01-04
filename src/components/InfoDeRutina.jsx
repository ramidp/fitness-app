import styled from "styled-components";

const InfoDeRutina = () => {
    return ( 
        <InfoContainer>
            <h1>
                Info de Rutina:
                Aca va a ir todo lo calculado acorde a toda la info que sumamos tanto de Musculatura como de Aerobico.
                Por eso es importante tener KPIs como Intensidad, tiempos y dias.
                También hay que sumar en Info Util una tabla de calorias promedio para usar como calculo de todo lo que hacemos.
                Ejemplo:
                Rutina de Intensidad moderada 45 mins = 250cals
                Saltar la soga 10 mins moderadamente = 120cals
                Total = 370cals
                Si esto se repite 5 veces por semana
                La quema total es de 1850 calorias

                A esto le podemos sumar un orientativo, es decir.
                Calorias basales hombre 2000 cals x 7 = 14.000
                2000 - 370 = 1630 cals (Aca podemos dar la info de que estamos en DEFICIT calorico, por ende implicaria bajar 250grs aprox por semana, 1kgs en 1 mes )
                Esto ultimo es info SUPER valiosa para quien no sabe nada. Porque ya por armar la rutina y planificarla facilmente, puede tener ese dato SUPER facil de leer.
                Obvio que hay que explicar que todo es aproximado y que depende de las ingestas y nutricion, y esto tendria que verlo con un NUTRICIONISTA y EXPERTO.
            </h1>
        </InfoContainer>
     );
}
 
export default InfoDeRutina;

const InfoContainer = styled.div`
        height: auto;
        color: ${props => props.theme.fontPrim};
        background-color: ${props => props.theme.fourth};
        display: flex;
        justify-content: center;
        padding: 15px;
        padding-top: 10vh;
        width: 100%;

            h1 {
                font-size: 30px;
            }


`