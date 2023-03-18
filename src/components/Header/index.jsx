import {useState, useEffect} from "react"

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth"

import {Container} from "./styles.js"

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"

import {BiReceipt, BiSearch} from "react-icons/bi"
import {BsFillHexagonFill} from "react-icons/bs"
import {FiLogOut} from "react-icons/fi"

export function Header({admin, onChange}) {

    const [quantityOfMeals, setQuantityOfMeals] = useState(0)
    
    const { signOut } = useAuth();

    function handleSignOut(){
        signOut();
    }

    useEffect(()=>{
        if(localStorage.getItem("@foodexplorer:orderMeals")){
            setQuantityOfMeals(JSON.parse(localStorage.getItem("@foodexplorer:orderMeals")).length)
        }
    },[])


    return (
        <Container>
            <div>
                <BsFillHexagonFill className = "logo" size={30} />
                {!admin &&
                    <Link to="/">
                        <h3>food explorer</h3>
                    </Link>
                }
                {admin && <Link to="/" className="logoName">
                        <h3>food explorer</h3>
                        <p>admin</p>
                    </Link>
                }
            </div>
            <Input header placeholder="Busque por pratos ou ingredientes" onChange={onChange} icon={BiSearch} />
            {!admin && <Link to="/favorites">
                <ButtonText title="Meus Favoritos" isActive />
            </Link>}
            {!admin && <Link to="/historic">
                <ButtonText title="Histórico de pedidos" isActive />
            </Link>}
            {admin ? <Link to="/new"><Button title="Novo prato" /></Link> : <Link to="/newOrder"><Button title={"Pedidos (" + quantityOfMeals + ")"} icon = {BiReceipt} /></Link>}
            <Link to="/" onClick={() => handleSignOut()} className="logout">
                <FiLogOut size={32} />
            </Link>
        </Container>
    );
}