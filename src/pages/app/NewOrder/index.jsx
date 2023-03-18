import {useState, useEffect} from "react"

import { api } from "../../../services/api";


import { Container, OrderItems, PaymentMethods } from "./styles";

import { useNavigate } from "react-router-dom";

import {Header} from "../../../components/Header";
import {Footer} from "../../../components/Footer";
import { MealsResume } from "../../../components/MealsResume";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import Pix from "../../../assets/pix.svg"
import CreditCard from "../../../assets/creditcard.svg"
import QRcode from "../../../assets/qrcode.svg"

import {BiReceipt, BiTime, BiCheckCircle, BiRestaurant} from "react-icons/bi";

export function NewOrder(){
    const navigate = useNavigate()
    
    const tabTitle = [
        {
            title: "pix",
            labelName: "PIX",
            icon: Pix
        },
        {
            title: "credit",
            labelName: "Crédito",
            icon: CreditCard
        }
    ]

    const [meals, setMeals] = useState()
    const [method, setMethod] = useState(tabTitle[0].title)
    const [qrcode, setQrcode] = useState("")
    const [payed, setPayed] = useState(false)

    let total = 0
    if(localStorage.getItem("@foodexplorer:orderMeals")){
        setMeals(JSON.parse(localStorage.getItem("@foodexplorer:orderMeals")))
        meals.forEach(meal => {
            total = total + meal.price
        })
    }
    
    

    function handleDeleteItem(meal_id){
        const myLocalStorage = JSON.parse(localStorage.getItem("@foodexplorer:orderMeals"))
        let newMeals

        if(myLocalStorage){
            if(myLocalStorage.length){
                newMeals = myLocalStorage.filter(localStorageMeal => localStorageMeal.id !== meal_id)
            }
        }
        setMeals(newMeals)
        localStorage.setItem("@foodexplorer:orderMeals", JSON.stringify(newMeals))
    }

    function handlePayment(){
        setPayed("preparing")
        navigate("/order/1")
    }

    let decimals = "00"
    const valueSplit = (total + "").split(".");
    if(valueSplit[1]){
        if(valueSplit[1] < 10) {
            decimals = valueSplit[1].slice(0,2) + "0"
        } else {
            decimals = valueSplit[1].slice(0,2)
        }
    }
    const totalReal = "R$ " + valueSplit[0] + "," + decimals;

    useEffect(() => {
        if(!localStorage.getItem("@foodexplorer:PixLocation")){
            async function fetchLocation() {
                const data = {
                    pixValue: "1.00",
                    pixKey: "pedromsra@gmail.com",
                    pixMessage: "Referente a nossa última consulta"
                }
                const response = await api.post(`/pix`, data)
                localStorage.setItem("@foodexplorer:PixLocation", JSON.stringify(response.data))
            }
            fetchLocation()
        }

        async function fetchQrcode() {
            const response = await api.put(`/pix`, {loc_id: JSON.parse(localStorage.getItem("@foodexplorer:PixLocation"))})
            setQrcode(response.data.imagemQrcode)
        }
        fetchQrcode()
    }, [])

    return(
        <Container>
            <Header />
            <main>
                <div className="order">
                    <h1>Meu Pedido</h1>
                    <OrderItems>
                        {meals && meals.map(meal => (
                            <MealsResume key={String(meal.id)} title={meal.title} image={meal.image} value={meal.price} quantity={meal.quantity} onClick={()=>handleDeleteItem(meal.id)} />
                        ))}
                    </OrderItems>
                    <h3 className="total">{totalReal}</h3>
                </div>
                <div className="payment">
                    <h1>Pagamento</h1>
                    <div className="paymentArea">
                        {
                            tabTitle && tabTitle.map(tab => (
                                <div key={tab.title} className={tab.title}><button onClick={() => setMethod(tab.title)}><img src={tab.icon} />{tab.labelName}</button></div>
                            ))
                        }
                        <PaymentMethods paymentMethod={method}>
                            <form>
                                <div className="number">
                                    <p>Número do cartão</p>
                                    <Input placeholder="0000 0000 0000 0000" />
                                </div>
                                <div className="cardInfos">
                                    <div className="vality">
                                        <p>Validade</p>
                                        <Input className="input" placeholder="04/25" />
                                    </div>
                                    <div className="cvc">
                                        <p>CVC</p>
                                        <Input placeholder="000" />
                                    </div>
                                </div>
                                <Button title="Finalizar pagamento" icon={BiReceipt} onClick={() => handlePayment()} />
                            </form>
                            <div className="PIXMethod">
                                <img src={qrcode} alt="" />
                            </div>
                        </PaymentMethods>
                    </div>
                </div>
            </main>
            <Footer />
        </Container>
    )
}