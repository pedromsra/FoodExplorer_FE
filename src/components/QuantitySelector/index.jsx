import { Container } from "./styles";

import {Button} from "../../components/Button"

import {FiMinus, FiPlus} from "react-icons/fi";

export function QuantitySelector({quantity, value, admin=false, onClick, onClickPlus, onClickMinus}){
    let Quantity
    let Value = Number(quantity) * Number(value)

    if(Number(quantity) < 10){
        Quantity = '0' + quantity;
    } else {
        Quantity = quantity
    }

    const valueSplit = (Value + "").split(".");
    let decimals = "00"
    if(valueSplit[1]){
        if(valueSplit[1] < 10) {
            decimals = valueSplit[1] + "0"
        } else {
            decimals = valueSplit[1]
        }
    }
    
    const valueReal = "R$ " + valueSplit[0] + "," + decimals;

    return (
        <Container isAdmin={admin}>
            <div className="selector">
                <button id="reduce" onClick={onClickMinus}>
                    <FiMinus size = {24} />
                </button>
                <h3>{Quantity}</h3>
                <button id="increase" onClick={onClickPlus}>
                    <FiPlus size = {24} />
                </button>
            </div>
            {value ? <Button onClick={onClick} type="submit" title={"Incluir ∙ " + valueReal} isActive /> : <Button onClick={onClick} type="submit" title="Incluir" isActive />}
        </Container>
    )
}