import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GIFGrid } from "./components/GIFGrid"

export const GIFExpertApp = () => {

  const [categories, setCategories] = useState([])  //Hook para manerjar las categorias

  //La funcion se encarga de actualzar el hook con la nueva categoría.
  const onAddCategory = (newCategory) => {
    if ( categories.includes( newCategory ) ) return;
    setCategories([newCategory, ...categories])
  }

  return (
    <>
        <h1>GIF Expert App</h1>

        {/* Input 
            El AddCategory es un componenete creado con el fin de que el usuario
            tenga la capacidad de agregar nuevas categorias al programa. */}
        <AddCategory onNewCategory = {onAddCategory}/>

        {/* Creamos una lista ordenada para mostrar las categorias */}

          { 
              categories.map(category => (
                  <GIFGrid key={category} category = {category}/>
              )) 
          }

    </>
  )
}
