import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GIFExpertApp = () => {

  const [categories, setCategories] = useState([])  

  const onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories])
  }

  return (
    <>
        <h1>GIF Expert App</h1>

        {/* Input */}

        <AddCategory 
          // setCategories = {setCategories}
          onNewCategory = {onAddCategory}
        />

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
