import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Form, AdminPassword } from "./styles";

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"

import {BsFillHexagonFill} from "react-icons/bs"

export function SignUp(){

    const [showAdminInput, setShowAdminInput] = useState(false)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); /*[nome de estado, função que atualiza esse estado*/
    const [rolePassword, setRolePassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password ){
            return alert("preencha todos os campos")
        } else if(showAdminInput && !rolePassword) {
            return alert("preencha todos os campos")
        }

        api.post("/users", { name, email, password, role_password: rolePassword})
            .then(()=> {
                alert("Usuário cadastrado com sucesso!")
                navigate("/")
            })
            .catch(error => {
                if(error.response){
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar")
                }
            })
    }

    function handleShowAdminInput() {
        if(showAdminInput === false){
            setShowAdminInput(true)
        } else {
            setShowAdminInput(false)
        }
    }

    return (
        <Container>
            <div className="logo">
                <BsFillHexagonFill className = "logoIcon" size={50} />
                <h1>food explorer</h1>
            </div>
            <Form>
                <h1 className="singup">Crie sua conta</h1>
                <div>
                    <p>Seu nome</p>
                    <Input type="text" placeholder="Exemplo: Maria da Silva" onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <p>Email</p>
                    <Input type="text" placeholder="Exemplo: maria.silva@exemple.com" onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <p>Senha</p>
                    <Input type="password" placeholder="No mínimo 6 caractéres" onChange={e => setPassword(e.target.value)} />
                </div>
                <AdminPassword showInput={showAdminInput}>
                    <p>Senha Admnistrador</p>
                    <Input type="password" placeholder="Digite a Senha de acesso Administrador" onChange={e => setRolePassword(e.target.value)} />
                </AdminPassword>
                <Button title="Criar conta" onClick={() => handleSignUp()} />
                <div className="footerButtons">
                    <Link to="/">
                        <ButtonText className="signin" title="Já tenho uma conta" isActive />
                    </Link>
                    <ButtonText className="admin" title="Admin" isActive onClick={() => handleShowAdminInput()} />
                </div>
            </Form> 
        </Container>
    )
}