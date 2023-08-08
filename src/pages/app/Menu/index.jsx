import {useState, useEffect} from "react"

import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../../hooks/auth"

import {Container} from "./styles.js"

import {Input} from "../../../components/Input"
import {Button} from "../../../components/Button"
import {ButtonText} from "../../../components/ButtonText"

import {BiReceipt, BiSearch, BiMenu, BiX} from "react-icons/bi"

export function Menu({admin, onChange}) {
    const { signOut } = useAuth();

    const navigate = useNavigate();

    function handleSignOut(){
        signOut();
    }

    function handleBack(){
        navigate(-1)
    }

    return (
        <Container>
            <div className="header">
                <BiX size={30} onClick={() => handleBack()} />
                <h3 className="menu">Menu</h3>
            </div>
            <Input placeholder="Busque por pratos ou ingredientes" onChange={onChange} icon={BiSearch} />
            {!admin && <Link to="/favorites">
                <ButtonText title="Meus Favoritos" isActive />
            </Link>}
            {!admin && <Link to="/historic">
                <ButtonText title="Histórico de pedidos" isActive />
            </Link>}
            {admin && <Link to="new">
                    <ButtonText title="Novo Prato" isActive />
                </Link>}
            <Link to="/" onClick={() => handleSignOut()} className="logout">
                Sair
            </Link>
        </Container>
    );
}