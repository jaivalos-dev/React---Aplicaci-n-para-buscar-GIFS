import { useState } from "react"

export const GIFExpertApp = () => {

  const [categories, setCategories] = useState(["NBA"])  

  console.log(categories)

  return (
    <>
        <h1>GIF Expert App</h1>

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
