import { collection, deleteDoc, doc, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useState, useEffect } from "react"
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase/firebaseConfig"

const useObtenerDatos2 = () => {

    const {usuario} = useAuth();
    const [datos, setDatos] = useState([])
    const [datos2, setDatos2] = useState([])

    const consulta = query(
        collection(db, 'fitness-info'),
        orderBy('fecha', 'asc'),
        where('uidUsuario', "==", usuario.uid)
    )

    const consulta2 = query(
        collection(db, 'aero-info'),
        orderBy('fecha', 'asc'),
        where('uidUsuario', "==", usuario.uid)

    )

    const deleteInfo = async (id) => {
        try {
            await deleteDoc(doc(db, 'fitness-info', id));
        } catch(error){
            console.log(error)
        };
    }

    const deleteInfo2 = async (id) => {
        try {
            await deleteDoc(doc(db, 'aero-info', id));
        } catch(error){
            console.log(error)
        };
    }

    useEffect(() => {
        onSnapshot(
            consulta,
            (snapshot) => {
                const dataForm = snapshot.docs.map((documento) => {
                    return {...documento.data(), id: documento.id}
                });
                const dataForm2 = snapshot.docs.map((documento) => {
                    return {...documento.data(), id: documento.id}
                });
                setDatos2(dataForm2)
                setDatos(dataForm);
            },
            (error) => {
                console.log(error)
            }
        )

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

    return [datos, datos2, deleteInfo, deleteInfo2]
}
 
export default useObtenerDatos2;