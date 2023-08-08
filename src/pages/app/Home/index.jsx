import { useState, useEffect } from "react";
import {  useParams, useNavigate } from "react-router-dom";

import { api } from "../../../services/api";

import { Container, Image, Meals } from "./styles";

import { Header } from "../../../components/Header";
import { Section } from "../../../components/Section";
import { Footer } from "../../../components/Footer";
import { MealCard } from "../../../components/MealCard";

import flyingMacarons from "../../../assets/macarons.png";
import flyingMacaronsMobile from "../../../assets/macaronsMobile.png";

export function Home(){
    const [meal, setMeal] = useState([])
    const [dessert, setDessert] = useState([])
    const [drink, setDrink] = useState([])
    const [search, setSearch] = useState("")
    const [mealsCount, setMealsCount] = useState(0)
    
    function mealsCountAtt(){
        if(!Array.isArray(JSON.parse(localStorage.getItem("@foodexplorer:orderMeals")))){
            setMealsCount(Number(1))
        } else {
            setMealsCount(JSON.parse(localStorage.getItem("@foodexplorer:orderMeals")).length)
        }
    }

    useEffect(() => {
        async function fetchMeals(){
            let dataMeal = [];
            let dataDessert = [];
            let dataDrink = [];

            const response = await api.get(`/meals?title=${search}&ingredient=${search}`);

            dataMeal = response.data.filter(meal => meal.type === "meal");
            dataDessert = response.data.filter(meal => meal.type === "dessert");
            dataDrink = response.data.filter(meal => meal.type === "drink");

            setMeal(dataMeal);
            setDessert(dataDessert);
            setDrink(dataDrink);
        }
        fetchMeals();
    }, [search])

    
    useEffect(() => {
        if(localStorage.getItem("@foodexplorer:orderMeals")){
            if(!Array.isArray(JSON.parse(localStorage.getItem("@foodexplorer:orderMeals")))){
                setMealsCount(Number(1))
            } else {
                setMealsCount(JSON.parse(localStorage.getItem("@foodexplorer:orderMeals")).length)
            }
        }
    }, [])

    return (
        <Container>
            <Header mealsCount={mealsCount} onChange={e=>setSearch(e.target.value)} />
            <main>
                <Image >
                    <svg className="desktopImage" width="656" height="412">
                        <mask id="svgmask3">
                            <rect width="116" height="322" fill="#ffffff" x="0" y="95" ></rect>
                            <rect width="570" height="398" fill="#ffffff" x="86" y="0" ></rect>
                        </mask>
                        <image href={flyingMacarons} mask="url(#svgmask3)"></image>
                    </svg>
                    <div className="mobileImage">
                        <img src={flyingMacaronsMobile} />
                    </div>
                    <div>
                        <h2>Sabores inigualáveis</h2>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                    </div>
                </Image>
                <Meals>
                    {meal.length !== 0 && <Section title="Refeições" childrensName="primeiro" >
                            {meal.map(oneMeal => (
                                <MealCard key={String(oneMeal.id)} meal={oneMeal} onClickr={() => mealsCountAtt()} />
                            ))}
                        </Section>}

                    {dessert.length !== 0 && <Section title="Sobremesas" childrensName="segundo" >
                            {dessert.map(oneMeal => (
                                <MealCard key={String(oneMeal.id)} meal={oneMeal} onClickr={() => mealsCountAtt()} />
                            ))}
                        </Section>}

                    {drink.length !== 0 && <Section title="Bebidas" childrensName="terceiro" >
                            {drink.map(oneMeal => (
                                <MealCard key={String(oneMeal.id)} meal={oneMeal} onClickr={() => mealsCountAtt()} />
                            ))}
                        </Section>}
                </Meals>
            </main>
            <Footer />
        </Container>
    )
}