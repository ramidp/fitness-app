import styled from "styled-components";
import BotonCerrarSesion from "./CerrarSesion";


// Paleta actual: https://palettes.shecodes.io/palettes/1448

const MainMenu = () => {

  return ( 
    <Container>
        <div className="main-footer">
            <p>Página creada por ramidp@gmail.com</p>
            <div className="d-flex justify-content-end gap-3">
                <a href="/contacto">Contacto</a>
                <BotonCerrarSesion/>
            </div>
        </div>
        <div className="grid">
            <div className="menu">
                <a href="/armado-rutina/*">Crear mi Rutina</a>
            </div>
            <div className="menu">
                <a href="">Rutinas Sugeridas</a>
            </div>
            <div className="menu">
                <a href="/main">Mi Dia</a>
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
            padding: 0 5px;
            a, p {
                text-align: center;
                margin: 0;
                color: ${props => props.theme.fontPrim};
                text-decoration: none;
            }
            a:hover {
                cursor: pointer;
                font-weight: bold;
            }
            svg {
                fill: ${props => props.theme.primary};
            }
        }
`