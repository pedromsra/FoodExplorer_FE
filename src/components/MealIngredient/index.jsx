import { Container } from "./styles";


import {MdAdd, MdClose} from "react-icons/md";

export function MealIngredient({isNew=false, value, onClick, ...rest}){
    return (
        <Container isNew = {isNew} >
            <input type = "text" value = {value}
                readOnly={!isNew} {...rest} 
            />

            <button type = "button"
                onClick={onClick}
            >
                {isNew ? <MdAdd size={8} /> : <MdClose size={8} />}
            </button>
            
        </Container>
    )
}