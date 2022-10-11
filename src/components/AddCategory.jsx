import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
  
    const [inputValue, setInputValue] = useState()
  
    //Para escribir en el campo
    const onInputChange = ({target}) =>{
        setInputValue(target.value);
    }

    //Para mandar Informacion
    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().lenght <= 1) return;
        onNewCategory(inputValue.trim());

        setInputValue('');
    }

    return (
        <form onSubmit={onSubmit}>

            <input
            type="text"
            placeholder="Buscar gifs"
            onChange={ onInputChange }
            />

        </form>
  )
}
