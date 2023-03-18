import { Container} from './styles';

export function ButtonText({title, icon: Icon, isActive = false, ...rest}){
    return(
        <Container type="button" isActive = {isActive} {...rest}>
            {Icon && <Icon size = {32} />}
            {title}
        </Container>
    );
}