import { Container } from "./styles"

export function Ingredient({name}) {
    return (
        <Container>
            <p>{name}</p>
        </Container>
    )
}