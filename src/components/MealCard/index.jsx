import {useState, useEffect} from "react"

import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import {Container, LikeButton} from "./styles.js"

import {Button} from "../../components/Button"

import {FiMinus, FiPlus} from "react-icons/fi";

import {BsFillHexagonFill} from "react-icons/bs"
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {TbPencil} from "react-icons/tb";
import {BiChevronRight} from "react-icons/bi"

import mealPlaceHolder from "../../assets/mealPlaceHolder.jpg";

export function MealCard({meal, admin = false, onClickr, onChange, counterClassName, ...rest}){
    const navigate = useNavigate()

    const [quant, setQuant] = useState(1)
    const [price, setPrice] = useState(meal.price)
    const [favorite, setFavorite] = useState(false)

    

    const imageURL = meal.image ? `${api.defaults.baseURL}/files/${meal.image}` : mealPlaceHolder

    function handleOnClickPlus(quant) {
        setPrice((quant+1)*meal.price)
        setQuant(quant + 1)
    }

    function handleOnClickMinus(quant) {
        setPrice((quant-1)*meal.price)
        setQuant(quant - 1)
        if (quant <= 1) {
            setPrice(meal.price)
            setQuant(1)
        }
    }

    function handleClickAdd({quantity, price, title, id, image}){
        const newOrderMeal = {quantity, price, title, id, image}
        let newOrderMeals = []
        if(!localStorage.getItem("@foodexplorer:orderMeals")){
            localStorage.setItem("@foodexplorer:orderMeals", JSON.stringify(newOrderMeal));
        } else {
            const old = JSON.parse(localStorage.getItem("@foodexplorer:orderMeals"))
            
            if(old.length || Array.isArray(old)) {
                const oldEdited = old.filter(meal => meal.id !== Number(id))
                newOrderMeals = oldEdited.map(meal => meal)
                newOrderMeals = [...newOrderMeals, newOrderMeal]
            } else {
                if(old.id === Number(id)){
                    localStorage.setItem("@foodexplorer:orderMeals", JSON.stringify(newOrderMeal));
                } else {
                    newOrderMeals = [old, newOrderMeal]
                }
            }
            
            localStorage.setItem("@foodexplorer:orderMeals", JSON.stringify(newOrderMeals));
        }
    }

    function handleDetailsClick(id) {
        navigate(`/meal/${id}`)
    }

    async function handleFavoritesButton(){
        if(!favorite) {
            const response = await api.post(`/favorites/${meal.id}`)
            setFavorite(response.data)
        } else {
            const response = await api.delete(`/favorites/${meal.id}`)
            setFavorite(response.data)
        }
        
    }

    function handleEditButton(){
        navigate(`/edit/${meal.id}`)
    }

    let Quantity

    if(Number(quant) < 10){
        Quantity = '0' + quant;
    } else {
        Quantity = quant
    }

    let decimals = "00"
    const valueSplit = (price + "").split(".");
    if(valueSplit[1]){
        if(valueSplit[1] < 10) {
            decimals = valueSplit[1].slice(0,2) + "0"
        } else {
            decimals = valueSplit[1].slice(0,2)
        }
    }
    const valueReal = "R$ " + valueSplit[0] + "," + decimals;

    useEffect(() => {
        const myLocalStorage = JSON.parse(localStorage.getItem("@foodexplorer:orderMeals"))
        let oldMeal

        if(myLocalStorage){
            if(myLocalStorage.length){
                myLocalStorage.forEach(localStorageMeal => {
                    if(localStorageMeal.id === Number(meal.id)){
                        oldMeal = localStorageMeal
                        setQuant(oldMeal.quantity)
                        setPrice(oldMeal.quantity*meal.price)
                    }
                })
            } else if(myLocalStorage.id === Number(meal.id)) {
                setQuant(myLocalStorage.quantity)
                setPrice(myLocalStorage.quantity*meal.price)
            }
        }
    }, [])

    useEffect(() => {
        async function fetchFavorite() {
            const response = await api.get(`/favorites/${meal.id}`)
            setFavorite(response.data)
        }
        fetchFavorite()
    }, [favorite])

    return(
        <Container isAdmin={admin}>
            {admin ? <LikeButton onClick={() => handleEditButton()} ><TbPencil size={30} /></LikeButton> : <LikeButton onClick={() => handleFavoritesButton()} >{favorite ? <AiFillHeart size={24} /> : <AiOutlineHeart size={24} />}</LikeButton>}
            <img src={imageURL} alt="" />
            <button className="detailButton" onClick={() => handleDetailsClick(meal.id)} ><div className="title">{meal.title}</div><BiChevronRight size={28} /></button>
            <p>{meal.description}</p>
            <h2>{valueReal}</h2>
            {!admin && <div className="selector">
                <div>
                    <button id="reduce" onClick={() => handleOnClickMinus(quant)}>
                        <FiMinus size = {24} />
                    </button>
                    <input onChange={onChange} type="number" value={Quantity} />
                    <button id="increase" onClick={() => handleOnClickPlus(quant)}>
                        <FiPlus size = {24} />
                    </button>
                </div>
                <Button className="addButton" onClick={() => {onClickr(), handleClickAdd({quantity: quant, price: price, title: meal.title, id: meal.id, image: imageURL})}} type="submit" title="Incluir" isActive />
            </div>}
        </Container>
    )
}