import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GIFExpertApp = () => {

  const [categories, setCategories] = useState([])  

  const onAddCategory = () => {
    setCategories(["Valorant", ...categories])
  }

  return (
    <>
        <h1>GIF Expert App</h1>

        {/* Input */}

        <AddCategory/>

        <button onClick={onAddCategory}>Agregar</button>

        <ol>
            { 
                categories.map(category => {
                    return <li key = {category}>{ category }</li>
                }) 
            }
        </ol>

    </>
  )
}
