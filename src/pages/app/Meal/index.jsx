import { useState, useEffect } from "react";
import {  useParams, useNavigate } from "react-router-dom";

import { api } from "../../../services/api";

import { Container  } from "./styles";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import {ButtonText} from "../../../components/ButtonText";
import { Ingredient } from "../../../components/Ingredient";
import { QuantitySelector } from "../../../components/QuantitySelector";

import {RiArrowLeftSLine} from "react-icons/ri"

import mealPlaceHolder from "../../../assets/mealPlaceHolder.jpg";

export function Meal() {

    const params = useParams();
    const navigate = useNavigate();

    const [quant, setQuant] = useState(1)
    const [meal, setMeal] = useState({})
    const [image, setImage] = useState()

    function handleOnClickPlus() {
        setQuant(quant + 1)
    }

    function handleOnClickMinus() {
        setQuant(quant - 1)
        if (quant <= 1) {
            setQuant(1)
        }
    }

    function handleClickAdd({quantity, price, title, id}){
        const newOrderMeal = {quantity, price, title, id}
        let newOrderMeals = []
        if(!localStorage.getItem("@foodexplorer:orderMeals")){
            localStorage.setItem("@foodexplorer:orderMeals", JSON.stringify(newOrderMeal));
        } else {
            const old = JSON.parse(localStorage.getItem("@foodexplorer:orderMeals"))
            
            if(old.length) {
                const oldEdited = old.filter(meal => meal.id !== Number(params.id))
                newOrderMeals = oldEdited.map(meal => meal)
                
                newOrderMeals = [...newOrderMeals, newOrderMeal]
            } else {
                if(old.id === Number(params.id)){
                    localStorage.setItem("@foodexplorer:orderMeals", JSON.stringify(newOrderMeal));
                } else {
                    newOrderMeals = [old, newOrderMeal]
                }
            }
            
            localStorage.setItem("@foodexplorer:orderMeals", JSON.stringify(newOrderMeals));
        }
        navigate("/")
    }

    function handleBack(){
        navigate(-1);
    }

    useEffect(() => {
        async function fetchMeal(){
            const response = await api.get(`/meals/${params.id}`);

            setMeal(response.data);
            
            const imageURL = response.data.image ? `${api.defaults.baseURL}/files/${response.data.image}` : mealPlaceHolder
            setImage(imageURL)
            console.log(imageURL)
        }
        fetchMeal();

    },[])

    useEffect(() => {
        const myLocalStorage = JSON.parse(localStorage.getItem("@foodexplorer:orderMeals"))
        let oldMeal
        if(myLocalStorage){
            if(myLocalStorage.length){
                myLocalStorage.forEach(localStorageMeal => {
                    if(localStorageMeal.id === Number(params.id)){
                        oldMeal = localStorageMeal
                        setQuant(oldMeal.quantity)
                    }
                })
            } else if(myLocalStorage.id === Number(params.id)) {
                setQuant(myLocalStorage.quantity)
            }
        }
    }, [])

    

    return (
        <Container>
            <Header />
            <main>
                <ButtonText onClick={() => handleBack()} className="back" title="voltar" icon={RiArrowLeftSLine} />
                <div className="meal">
                    <img src={image} alt="prato de camarão" />
                    <div className="mealDescription">
                        <h1>{meal.title}</h1>
                        <p>{meal.description}</p>
                        <div className="ingredients">
                            {meal.ingredients && meal.ingredients.map(ingredient => (
                                <Ingredient key={String(ingredient.id)} name={ingredient.name} />
                            ))}
                        </div>
                        <QuantitySelector onClick={() => handleClickAdd({quantity: quant, price: meal.price, title: meal.title, id: meal.id})} quantity={quant} value={meal.price} onClickPlus={handleOnClickPlus} onClickMinus={handleOnClickMinus} />
                    </div>
                </div>
            </main>
            <Footer />
        </Container>
    )
}