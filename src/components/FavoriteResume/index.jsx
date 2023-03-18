import { Container } from "./styles";

import { ButtonText } from "../ButtonText";

export function FavoriteResume({title, onTitleClick, onRemoveClick, image, ...rest}){
    return(
        <Container {...rest}>
            <img src={image} alt="camarao" />
            <div>
                <button className="title" onClick={onTitleClick} >{title}</button>
                <ButtonText title="Remover dos Favoritos" isActive onClick={onRemoveClick} />
            </div>
        </Container>
    )
}