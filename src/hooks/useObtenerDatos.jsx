import { query, collection, orderBy, where, onSnapshot } from "firebase/firestore"
import { useState, useEffect } from "react"
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase/firebaseConfig"

const useObtenerDatos = () => {

    const {usuario} = useAuth();
    const [datos, setDatos] = useState([])
    const [datos2, setDatos2] = useState([])

    const consulta = query(
        collection(db, 'fitness-info'),
        orderBy('muscle', 'asc'),
        where('uidUsuario', "==", usuario.uid)
    )

    const consulta2 = query(
        collection(db, 'aero-info'),
        orderBy('aero', 'asc'),
        where('uidUsuario', "==", usuario.uid)
    )

    useEffect(() => {
        onSnapshot(
            consulta,
            (snapshot) => {
                const dataForm = snapshot.docs.map((documento) => {
                    return {...documento.data(), id: documento.id}
                })
                setDatos(dataForm);
            },
            (error) => {
                console.log(error)
            }
        )

    },[])

    useEffect(() => {

        onSnapshot(
            consulta2,
            (snapshot) => {
                const dataForm2 = snapshot.docs.map((documento) => {
                    return {...documento.data(), id: documento.id}
                })
                setDatos2(dataForm2);
            },
            (error) => {
                console.log(error)
            }
        )
    },[])

    return [datos, datos2]
}
 
export default useObtenerDatos;