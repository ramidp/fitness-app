import { Link } from "react-router-dom";
import styled from "styled-components";


// Paleta actual: https://palettes.shecodes.io/palettes/1448

const MainMenu = () => {


  return ( 
    <Container>
        <div className="grid">
            <div className="menu">
                <a href="/armado-rutina/*">Crear mi Rutina</a>
            </div>
            <div className="menu">
                <a href="">Rutinas Sugeridas</a>
            </div>
            <div className="menu">
                <a href="/">Mi Dia</a>
            </div>
            <div className="menu">
                <a href="/semana">Mi Semana</a>
            </div>
            <div className="menu">
                <a href="/rutina">Mi Rutina</a>
            </div>
            <div className="menu">
                <a href="/recomendados">Recomendados</a>
            </div>
        </div>
        <div className="main-footer">
            <a href="/contacto">Contacto</a>
            <p>Página creada por ramidp@2k144hz99fps</p>
        </div>
    </Container>
   )
}
 
export default MainMenu;

const Container = styled.div`
        height: 100vh;
        background-color: ${props => props.theme.primary};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        .grid {
            height: 95vh;
            width: 100%;
            display: grid;
            grid-template-columns: 50% 50% ;
            grid-template-rows: 33.33% 33.33% 33.33%;
            align-items: center;
            justify-content: center;
            .menu {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 2px solid white;
    
                &:hover {
                    box-shadow: 10px 10px 76px -10px rgba(0,0,0,0.75);
                }
                a { 
                    width: 70%;
                    height: 100%;
                    color: ${props => props.theme.fontWhite};
                    text-decoration: none;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 40px;
                    text-align: center;
                    @media (max-width: 767px) {
                        font-size: 25px;
                    }
                    }
                }
        }

        .main-footer {
            height: 5vh;
            display: grid;
            grid-template-columns: 50% 50%;
            width: 100%;
            justify-content: space-around;
            align-items: center;
            background-color: ${props => props.theme.fourth};
            a, p {
                text-align: center;
                margin: 0;
                color: ${props => props.theme.fontPrim};
                text-decoration: none;
            }
        }
`