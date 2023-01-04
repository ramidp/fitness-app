import styled from "styled-components";

const LoadingScreen = () => {
    return ( 
        <LoadingScreenContainer>
            <h1>
                Loading Screen . . .
            </h1>
        </LoadingScreenContainer>
     );
}
 
export default LoadingScreen;

const LoadingScreenContainer = styled.div`

    display: flex;
    flex-direction: column;
    padding-top: 300px;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.primary};

    h1 {
        color: ${props => props.theme.fontWhite};
    }

    
    
`