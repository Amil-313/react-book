import axios from "axios";
import React from "react";
import Absence from "../Main/Absence";
import Loading from "../Main/Loading";
import Order from "./Order";
import './Orders.scss'

function Orders() {
    let [orders, setOrders] = React.useState([]);
    let [loadingOrder, setLoadingOrder] = React.useState(true);

    React.useEffect(() => {
        ( async () => {
    try {
        let {data} = await axios.get('https://6353f42dccce2f8c02000b84.mockapi.io/orders');
    setOrders(data.reduce((prev, next) => [...prev, ...next.items], []));
    setLoadingOrder(false);
    } catch (error) {
        alert("Ошибка при запросе данных о заказе...")
    }
    })()}, []);

    return(
        <>
            <div className="orders">

                <div className="container">

                    <h1>Мои заказы</h1>

                    <div className="container_items">

                        {loadingOrder ? [...Array(8)].map((i) =>
                         <Loading key={i} className="loadingOrders" />) : 
                         orders.length > 0 ? orders.map((item) => <Order key={item.parId} item={item} /> ) : <Absence tittle={"Заказов не было..."} />
                         }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders;