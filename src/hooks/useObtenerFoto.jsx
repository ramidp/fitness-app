import { useState, useEffect } from "react"
import { storage } from "../firebase/firebaseConfig"
import { listAll, ref, getDownloadURL} from 'firebase/storage'
import {useAuth} from '../context/AuthContext'


const useObtenerFoto = () => {

    const [fotos, setFotos] = useState(' ')

    localStorage.setItem('photo', fotos)

    const {usuario} = useAuth()

    const imageListRef = ref(storage, `profile-photos/${usuario.email}`)

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setFotos(url)
                })
            })
        })
    },[])



    return [fotos, setFotos]
}
 
export default useObtenerFoto;