import styled from "styled-components";
import {ReactComponent as UpArrow} from '../images/icons/arrow-up.svg'

const UpBtn = () => {
    return ( 
        <UpBtnContainer>
            <a href="#top">
                <UpArrow/>
            </a>
        </UpBtnContainer>
     );
}
 
export default UpBtn;

const UpBtnContainer = styled.div `
    
    position: fixed;
    bottom: 11%;
    right: 5%;
    z-index: 100;
    
    cursor: pointer;
    a {
        text-decoration: none;
        border: 3px solid ${props => props.theme.primary};
        background-color: ${props => props.theme.fourth};
        padding: 8px;
        &:hover {
            filter: contrast(60%)
        }
        svg {
            height: 20px;
            fill: ${props => props.theme.fontPrim};
        }
    
        }
`