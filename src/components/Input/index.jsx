import { Container } from "./styles";

export function Input({ header=false, icon: Icon, ...rest }) {
    return (
        <Container isHeader={header}>
            {Icon && <div className="icon">
                <Icon size = {24} />
            </div>}
            <input {...rest} />
        </Container>
    )
}