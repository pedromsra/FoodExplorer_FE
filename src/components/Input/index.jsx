import { Container } from "./styles";

export function Input({ header=false, classNameIcon, icon: Icon, ...rest }) {
    return (
        <Container isHeader={header} className={classNameIcon}>
            {Icon && <div className="icon">
                <Icon size = {24} />
            </div>}
            <input {...rest} />
        </Container>
    )
}