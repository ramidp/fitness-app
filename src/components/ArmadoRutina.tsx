import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import AeroMenu from "./AeroMenu";
import MuscMain from "./MuscMenu";
import RutaPrivada from "./RutaPrivada";

const ArmadoRutina = () => {

  const [linkId, setLinkId] = useState<string>('')
    
  const handleClick = (e : any) => {
      setLinkId(e.target.id)
  }
    return ( 
        <Container>
            <div className="menu">
                <Link id="1" onClick={handleClick} className={linkId == '1' ? 'active' : ''} to={"*/musculacion"}>Musculación</Link>
                <Link id="2" onClick={handleClick} className={linkId == '2' ? 'active' : ''} to={"*/aerobico"}>Aeróbico</Link>
            </div>
            
            <div>
                <Routes>
                <Route path="*/musculacion" element={
                    <RutaPrivada>
                      <MuscMain/>
                    </RutaPrivada>
                  }/>

                <Route path="*/aerobico" element={
                    <RutaPrivada>
                      <AeroMenu/>
                    </RutaPrivada>
                  }/>

                </Routes>
            </div>
        </Container>
     );
}
 
export default ArmadoRutina;

const Container = styled.div`
        height: auto;
        color: ${props => props.theme.fontPrim};
        background-color: ${props => props.theme.fourth};
        display: flex;
        flex-direction: column;
        padding: 20px;
        margin-top: 9vh;
        width: 90%;
        
        .menu {
          text-align: center;
          background-color: ${props => props.theme.primary};
          padding: 7px 0;
          .active {
          text-decoration: underline;
          text-underline-offset: 5px;
        }
          a {
            text-decoration: none;
            color: ${props => props.theme.fontWhite};
            font-size: 27px;
            margin: 0 20px;
            @media (max-width: 767px) {
              font-size: 22px;
            }


            &:hover {
              text-decoration: underline;
              text-underline-offset: 5px;
            }
          }
        }

        @media (max-width: 1200px) {
            width: 95%;
            padding: 20px;
            /* margin-top: 1vh;
            padding-bottom: 8vh; */
        }

`