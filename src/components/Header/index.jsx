import {useState, useEffect} from "react"

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth"

import {Container} from "./styles.js"

import {Input} from "../../components/Input"
import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"

import {BiReceipt, BiSearch, BiMenu, BiX} from "react-icons/bi"
import {BsFillHexagonFill} from "react-icons/bs"
import {FiLogOut} from "react-icons/fi"

export function Header({admin, onChange, mealsCount}) {

    const [quantityOfMeals, setQuantityOfMeals] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false)
    
    const { signOut } = useAuth();

    function handleSignOut(){
        signOut();
    }

    useEffect(()=>{
        if(localStorage.getItem("@foodexplorer:orderMeals")){
            if(!Array.isArray(JSON.parse(localStorage.getItem("@foodexplorer:orderMeals")))) {
                let quant = [JSON.parse(localStorage.getItem("@foodexplorer:orderMeals"))]
                setQuantityOfMeals(quant.length)
            } else {
                setQuantityOfMeals(JSON.parse(localStorage.getItem("@foodexplorer:orderMeals")).length)
            }
        }
    },[mealsCount])


    return (
        <Container className="container">
            <div className="slider">
                <BiMenu size={30} onClick = {() => setMenuOpen(!menuOpen)} />
            </div>
            {menuOpen && <div className="menu">
                <div className="head">
                    <BiX size={38} onClick = {() => setMenuOpen(!menuOpen)} />
                    <h3>Menu</h3>
                </div>
                <div className="options">
                    <Input placeholder="Busque por pratos ou ingredientes" onChange={onChange} icon={BiSearch} />
                    <div className="navigationOptions">
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
                            <ButtonText title="Sair" isActive />
                        </Link>
                    </div>
                </div>
            </div>}
            <div className="logoContainer">
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
            {!admin && <div className="mobileNewOrder">
                <Link to="/newOrder"><BiReceipt size={32} /></Link>
                <p>{quantityOfMeals}</p>
            </div>}
            <Input classNameIcon="desktop" header placeholder="Busque por pratos ou ingredientes" onChange={onChange} icon={BiSearch} />
            {!admin && <Link to="/favorites">
                <ButtonText className="desktop" title="Meus Favoritos" isActive />
            </Link>}
            {!admin && <Link to="/historic">
                <ButtonText className="desktop" title="Histórico de pedidos" isActive />
            </Link>}
            {admin ? <Link to="/new"><Button className="desktop" title="Novo prato" /></Link> : <Link to="/newOrder"><Button className="desktop" title={"Pedidos (" + quantityOfMeals + ")"} icon = {BiReceipt} /></Link>}
            <Link to="/" onClick={() => handleSignOut()} className="logout">
                <FiLogOut className="desktop" size={32} />
            </Link>
        </Container>
    );
}