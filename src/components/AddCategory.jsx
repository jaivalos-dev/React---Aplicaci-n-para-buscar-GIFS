import { useState } from "react"

// El componente se utilizará para agregar nuevas categorias a la lista
// recibe el atributo que le colocamos en la pagina principal
export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState("") //Creamos el hook para la entrada

  // La funcion se utiliza para agregar el texto que ingresamos desde el teclado
  const onInputChange = ( event ) => setInputValue( event.target.value ) 
  
  // La funcion se utiliza al moemnto dar click en enter y enviar el formulario
  const onSubmit = (event) =>{
    event.preventDefault()
    if (inputValue.trim().length <= 1) return

    onNewCategory( inputValue.trim() )
    setInputValue("")
  }

  return (

    // Se crea un formulario para obtener la informacion del usuario
    <form onSubmit={ onSubmit }>
        <input type="text" placeholder="Buscar GIF" value={ inputValue }
            onChange={ onInputChange }
        />
    </form>

  )
}

