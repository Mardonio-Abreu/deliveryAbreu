import db from "../db/db.js"
import { useState, useEffect } from "react"
import ItemDetailCard from "./ItemDetailCard.jsx"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})

  const { itemId } = useParams()

  const obtenerProducto = () => {
    const docRef = doc( db, "items", itemId )
    getDoc(docRef)
      .then((respuesta) => {
        const data = { id: respuesta.id, ...respuesta.data() }
        setProducto(data)
      })
  }

  useEffect(()=> {
    obtenerProducto()
  }, [])

  return (
    <ItemDetailCard producto={producto} />
  )
}
export default ItemDetailContainer