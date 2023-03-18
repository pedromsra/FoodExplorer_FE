import {useState} from "react"

import { Container, OrderItems, OrderStatus } from "./styles";

import {Header} from "../../../components/Header";
import {Footer} from "../../../components/Footer";
import { MealsResume } from "../../../components/MealsResume";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import Pix from "../../../assets/pix.svg"
import CreditCard from "../../../assets/creditcard.svg"
import QRcode from "../../../assets/qrcode.svg"

import Gambe from "../../../assets/100.png"

import {BiReceipt, BiTime, BiCheckCircle, BiRestaurant} from "react-icons/bi";

export function Order(){
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

    const [payed, setPayed] = useState("created")

    return(
        <Container>
            <Header />
            <main>
                <div className="order">
                    <h1>Meu Pedido</h1>
                    <OrderItems>
                        <MealsResume title="Risoto de camarão" image={Gambe} value={25.97} quantity={4} />
                        <MealsResume title="Risoto de camarão" image={Gambe} value={25.97} quantity={4} />
                        <MealsResume title="Risoto de camarão" image={Gambe} value={25.97} quantity={4} />
                        <MealsResume title="Risoto de camarão" image={Gambe} value={25.97} quantity={4} />
                        <MealsResume title="Risoto de camarão" image={Gambe} value={25.97} quantity={4} />
                        <MealsResume title="Risoto de camarão" image={Gambe} value={25.97} quantity={4} />
                        <MealsResume title="Risoto de camarão" image={Gambe} value={25.97} quantity={4} />
                    </OrderItems>
                    <h3 className="total">Total: R$ 727,16</h3>
                </div>
                <div className="payment">
                    <h1>Pagamento</h1>
                    <div className="paymentArea">
                        {
                            tabTitle && tabTitle.map(tab => (
                                <div key={tab.title} className={tab.title}><button onClick={() => setMethod(tab.title)}><img src={tab.icon} />{tab.labelName}</button></div>
                            ))
                        }
                        <OrderStatus isPayed={payed}>
                            <div className="created">
                                <BiTime size={104} />
                                <div className="message">Aguardando pagamento no caixa</div>
                            </div>
                            <div className="preparing">
                                <BiCheckCircle size={104} />
                                <div>
                                    <div className="message">Pagamento aprovado!</div>
                                    <div className="message">Seu pedido está sendo preparado</div>
                                </div>
                            </div>
                            <div className="delivered">
                                <BiRestaurant size={104} />
                                <div className="message">Pedido entregue!</div>
                            </div>
                        </OrderStatus>
                    </div>
                </div>
            </main>
            <Footer />
        </Container>
    )
}