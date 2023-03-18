import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../../services/api";

import { Container, Tr } from "./styles";

import {Header} from "../../../components/Header";
import {Footer} from "../../../components/Footer";
import { Button } from "../../../components/Button";

export function Historic(){

    const navigate = useNavigate();

    const [orders, setOrders] = useState([])

    function handleOrderById(order_id) {
        navigate(`/order/${order_id}`)
    }

    useEffect(() => {
        async function fetchOrders(){
            const response = await api.get(`/orders`);
            const myOrder = response.data.map(order => {
                const LastUpdate = order.updated_at.split(" ")
                const myDate = LastUpdate[0].split("-")[2] + "/" + LastUpdate[0].split("-")[1]
                const myTime = LastUpdate[1].split(":")[0] + "h" + LastUpdate[1].split(":")[1]
                const myLastUpdate = myDate + " às " + myTime
                return {
                    id: order.id,
                    status: order.status,
                    meals: order.meals,
                    updated_at: myLastUpdate
                }
            })
            setOrders(myOrder);
        }
        fetchOrders();
    },[])

    return (
        <Container>
            <Header />
            <main>
                <h1>Histórico de pedidos</h1>
                <table className="historic" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Código</th>
                            <th>Detalhamento</th>
                            <th>Data e hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders && orders.map(order => (
                            <Tr key={String(order.id)} orderStatus={order.status}>
                                <td><div className="orderStatus"><div className="indication" />{order.status}</div></td>
                                <td><Button title={order.id} onClick={() => handleOrderById(order.id)} /></td>
                                <td>{order.meals.map(meal => (meal.quantity  + " x " + meal.title + ", "))}</td>
                                <td className="update">{order.updated_at}</td>
                            </Tr>
                        ))}
                    </tbody>
                </table>
            </main>
            <Footer />
        </Container>
    )
}