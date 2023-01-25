import {useAuth} from '../context/AuthContext'
import {Navigate} from 'react-router-dom'

const RutaPrivada = ({children} : any) => {
    
    const {usuario} = useAuth()

    if(usuario) {
        return children
    } else {
            return <Navigate replace to="/iniciar-sesion"/>
    }
}
 
export default RutaPrivada;