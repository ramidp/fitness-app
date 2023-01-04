import React, {createContext, useContext,useEffect,useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth'
import {auth} from "../firebase/firebaseConfig"

const AuthContext = createContext();

const useAuth = () => {
    return useContext(AuthContext)
}

const AuthProvider = ({children}) => {

    const [usuario, cambiarUsuario] = useState(); 
    const [cargando, cambiarCargando] = useState(false); 

    useEffect(() => {
        const cancelarSuscripcion = onAuthStateChanged(auth, (usuario) => {
            cambiarUsuario(usuario);
            cambiarCargando(false);
    });

    return cancelarSuscripcion;
});

    return ( 
        <AuthContext.Provider value={{usuario: usuario}}>
            {cargando == false && children} 
            </AuthContext.Provider>
     );
}

export {AuthProvider, AuthContext, useAuth}