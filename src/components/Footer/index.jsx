import {Container} from "./styles.js"

import {BsFillHexagonFill} from "react-icons/bs"

export function Footer(){
    return(
        <Container>
            <div>
                <BsFillHexagonFill className = "logo" />
                <h3>food explorer</h3>
            </div>
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}