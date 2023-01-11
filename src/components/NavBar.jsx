import styled from "styled-components";
import { useEffect, useState } from "react";
import {OffCanvasTop} from "./OffCanvasMenu";
import {Link} from 'react-router-dom'
import BotonCerrarSesion from "./CerrarSesion";

const NavBar = () => {
    
    const [linkId, setLinkId] = useState([])
    
    const handleClick = (e) => {
        setLinkId(e.target.id)
    }


    return ( 
        <NavBarContainer>
            <Link to={{pathname: '/main-menu'}}><h1 id="12" className={linkId === '12' ? 'active' : ''} selected onClick={handleClick} >Menu</h1></Link>
            <Link to={{pathname: '/'}}><h1 id="11" className={linkId === '11' ? 'active' : ''} selected onClick={handleClick} >Principal</h1></Link>
            <Link to={{pathname: '/armado-rutina'}}><h1 id="1" className={linkId === '1' ? 'active' : ''} selected onClick={handleClick} >Armado Rutina</h1></Link>
            <Link to={{pathname: '/semana'}}><h1 id="3" className={linkId === '3' ? 'active' : ''} onClick={handleClick} >Mi Semana</h1></Link>
            <Link to={{pathname: '/rutina'}}><h1 id="4" className={linkId === '4' ? 'active' : ''} onClick={handleClick} >Mi Rutina</h1></Link>
            <Link to={{pathname: '/recomendados'}}><h1 id="5" className={linkId === '5' ? 'active' : ''} onClick={handleClick} >Recomendados</h1></Link>
            <Link to={{pathname: '/info-util'}}><h1 id="6" className={linkId === '6' ? 'active' : ''} onClick={handleClick} >Glosario</h1></Link>
            {/* <Link to={{pathname: '/calculosderutina'}}><h1 id="5" className={linkId === '5' ? 'active' : ''} onClick={handleClick} >Info Útil</h1></Link> */}
            <Link to={{pathname: '/contacto'}}><h1 id="7" className={linkId === '7' ? 'active' : ''} onClick={handleClick} >Contacto</h1></Link>

            
            <div className="menu-celu">
                <OffCanvasTop/>
            </div>
            <BotonCerrarSesion/>
        </NavBarContainer>
     );
}
 
export default NavBar;

const NavBarContainer = styled.div`
    width: 100%;
    height: 7vh;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.theme.primary};
    position: fixed;
    top: 0;
    min-width: 190px;

    @media (max-width: 1200px ) {
        justify-content: space-between;
        /* top: 93vh; */
    }

   .menu-celu {
     display: none;
        .open-menu {
            background-color: inherit;
            font-weight: bold;
            color: white;
            border: 1px solid white;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px 20px;
            &:hover {
                filter: invert(100%)
            }
        }

     @media (max-width: 1200px) {
        display: block;
        
     }
   }

    .hidden {
        font-weight: bolder;
    }

    a {
    width: fit-content;
    text-decoration: none;
    cursor: auto;
    display: flex;
    justify-content: center;

    @media (max-width: 1200px) {
        display: none;
    }
    
    .active {
        text-decoration: underline;
        text-underline-offset: 10px;
    }
        h1 {
            margin: 0;
            cursor: pointer;
            width: fit-content;
            color: ${props => props.theme.fontWhite};
            font-size: 22px;
            font-weight: 400;
            &:hover {
                text-decoration: underline;
                text-underline-offset: 10px;
            }
        }
}
    
`