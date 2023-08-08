import { useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth"

import { Container, Form } from "./styles";

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"

import {BsFillHexagonFill} from "react-icons/bs"

export function SignIn(){
    const {signIn} = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    function handleSignIn(){
        signIn({email, password})
    }

    return (
        <Container>
            <div className="logo">
                <BsFillHexagonFill className = "logoIcon" size={50}/>
                <h1>food explorer</h1>
            </div>
            <Form>
                <h1 className="login">Faça login</h1>
                <div>
                    <p>Email</p>
                    <Input type="text" placeholder="Exemplo: maria.silva@exemple.com" onChange={e => setEmail(e.target.value) } />
                </div>
                <div>
                    <p>Senha</p>
                    <Input type="password" placeholder="No mínimo 6 caractéres" onChange={e => setPassword(e.target.value) }/>
                </div>
                <Button title="Entrar" onClick={() => handleSignIn()} />
                <Link to="/register">
                    <ButtonText title="Criar uma conta" isActive />
                </Link>
            </Form>
        </Container>
    )
}