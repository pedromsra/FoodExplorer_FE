import {Container} from "./styles"

import { ButtonText } from "../ButtonText"

export function MealsResume({title, quantity, value, image, ...rest}){

    let decimals = "00"
    const valueSplit = (value + "").split(".");
    if(valueSplit[1]){
        if(valueSplit[1] < 10) {
            decimals = valueSplit[1].slice(0,2) + "0"
        } else {
            decimals = valueSplit[1].slice(0,2)
        }
    }
    
    const valueReal = "R$ " + valueSplit[0] + "," + decimals;

    return(
        <Container {...rest}>
            <img src={image} alt="camarao" />
            <div>
                <div className="infos">
                    <h3 className="quantityTitle">{quantity} x  {title}</h3>
                    <p className="value">{valueReal}</p>
                </div>
                <ButtonText title="Excluir" isActive />
            </div>
        </Container>
    )
}