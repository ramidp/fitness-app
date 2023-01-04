import styled from "styled-components";

const Calculos = () => {
    return ( 
        <CalculosContainer>

            <h1>Calculos</h1>

        </CalculosContainer>
     );
}
 
export default Calculos;

const CalculosContainer = styled.div`   
    
        height: 30vh;
        color: ${props => props.theme.fontWhite};
        background-color: ${props => props.theme.primary};
        display: flex;
        justify-content: center;
        padding: 15px;
        padding-top: 7vh;

`