import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GIFExpertApp = () => {

  const [categories, setCategories] = useState([])  

  return (
    <>
        <h1>GIF Expert App</h1>

        {/* Input */}

        <AddCategory setCategories = {setCategories}/>

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
