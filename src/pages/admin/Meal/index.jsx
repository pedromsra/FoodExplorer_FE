import { useState, useEffect } from "react";
import {  useParams, useNavigate } from "react-router-dom";

import { api } from "../../../services/api";

import { Container  } from "./styles";

import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import {ButtonText} from "../../../components/ButtonText";
import { Ingredient } from "../../../components/Ingredient";
import { Button } from "../../../components/Button";

import {RiArrowLeftSLine} from "react-icons/ri"

import mealPlaceHolder from "../../../assets/mealPlaceHolder.jpg";

export function Meal() {

    const params = useParams();
    const navigate = useNavigate();

    const [meal, setMeal] = useState({})

    const imageURL = meal.image ? `${api.defaults.baseURL}/files/${meal.image}` : mealPlaceHolder

    function handleBack(){
        navigate(-1);
    }

    function handleEdit(){
        navigate(`/edit/${meal.id}`)
    }

    useEffect(() => {
        async function fetchMeal(){
            const response = await api.get(`/meals/${params.id}`);
            setMeal(response.data);
        }
        fetchMeal();
    },[])

    return (
        <Container>
            <Header admin />
            <main>
                <ButtonText onClick={() => handleBack()} className="back" title="voltar" icon={RiArrowLeftSLine} />
                <div className="meal">
                    <img src={imageURL} alt="prato de camarão" />
                    <div className="mealDescription">
                        <h1>{meal.title}</h1>
                        <p>{meal.description}</p>
                        <div className="ingredients">
                            {meal.ingredients && meal.ingredients.map(ingredient => (
                                <Ingredient key={String(ingredient.id)} name={ingredient.name} />
                            ))}
                        </div>
                        <div className="buttonEdit">
                            <Button onClick={() => handleEdit()} title="Editar prato" />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </Container>
    )
}