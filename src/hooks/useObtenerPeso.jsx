import { collection, deleteDoc, doc, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useState, useEffect } from "react"
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase/firebaseConfig"

const useObtenerDatos2 = () => {

    const {usuario} = useAuth();
    const [datosPeso, setDatosPeso] = useState([])

    const consulta = query(
        collection(db, 'peso-info'),
        where('uidUsuario', "==", usuario.uid)
    )

    useEffect(() => {
        onSnapshot(
            consulta,
            (snapshot) => {
                const dataForm = snapshot.docs.map((documento) => {
                    return {...documento.data(), id: documento.id}
                });
                setDatosPeso(dataForm);
            },
            (error) => {
                console.log(error)
            }
        )
        
    },[])

    return [datosPeso]
}
 
export default useObtenerDatos2;