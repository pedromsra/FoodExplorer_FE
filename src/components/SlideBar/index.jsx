import {Container} from "./styles"

import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"

import {BiReceipt, BiSearch} from "react-icons/bi"

export function SlideBar({onChange}) {


    const { signOut } = useAuth();

    function handleSignOut(){
        signOut();
    }

    return (
        <Container>
            <div>
                <Input classNameIcon="desktop" header placeholder="Busque por pratos ou ingredientes" onChange={onChange} icon={BiSearch} />
            </div>
        </Container>
    )
}