import styled from "styled-components";


const Error404 = () => {

    return ( 
        <Container>
            <h3>Error 404</h3>
            <p>La Pagina que estas buscando no existe</p>
        </Container>
     );
}
 
export default Error404;

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

        p {
            font-size: 20px;
        }
        h3 {
            font-size: 30px;
        }

`