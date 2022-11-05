import React from 'react';
import axios from 'axios';
import { ContextApp } from '../App';
import './Basket.scss';
import Absence from '../Main/Absence';

function Busket({itemsBusket = [], removeBasket, setItemsBusket}) {

    let {closeBasket} = React.useContext(ContextApp);
    let [orderComplete, setOrderComplete] = React.useState(false);
    let [numberOrder, setNumberOrder] = React.useState([]);
    let [loadBtn, setLoadBtn] = React.useState(false);
    let sendOrder = async () => {
        try {
        setLoadBtn(true);
        let {data} = await axios.post('https://6353f42dccce2f8c02000b84.mockapi.io/orders', {items: itemsBusket});
        setNumberOrder(data.id);
        setOrderComplete(true);

        for (let i = 0; i < itemsBusket.length; i++) {
            const item = itemsBusket[i];
            await axios.delete(`https://6353f42dccce2f8c02000b84.mockapi.io/basket/` + item.id);
            setItemsBusket([]);
        }
        } catch (error) {
            alert("Ошибка при создании заказа...")
        }
        setLoadBtn(false);
    };

    let totalPrice = itemsBusket.reduce((sum, obj) => obj.price + sum, 0);

    return(
        <>
                <div className='back_basket'>
                    <div className='basket'>
                        <div className="busket_tittle">
                            <h2>Корзина</h2>
                            <img onClick={closeBasket} className='cansel' src={ require("./Image/censel.png")} alt="Censel" />
                        </div>
                        
                            {
                                itemsBusket.length > 0 ? 
                                    <>
                                        <div className="busket_product">
                                            {itemsBusket.map((item) => (
                                                <div className="product_add">
                                                    <img className='product_img' src= {item.img} alt="Book" />
                                                    <div>
                                                        <p>{item.name}</p>
                                                        <strong>{item.price} руб.</strong>
                                                    </div>
                                                    <img onClick={() => removeBasket(item.id)} className='cansel' src= { require("./Image/censel.png")} alt="Censel" />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="busket_sum">
                                            <div>
                                                <p>Итого:</p><span></span><strong>{totalPrice} руб.</strong>
                                            </div>
                                            <div>
                                                <p>Налог 5%:</p><span></span><strong>{totalPrice * 0.05} руб.</strong>
                                            </div>
                                            <button disabled={loadBtn} onClick={sendOrder}>
                                                <strong> Оформить заказ </strong>
                                                <img src= { require("./Image/rightarrow.png")} alt="Arrow" />
                                            </button>
                                        </div>
                                    </> : <Absence tittle={orderComplete ? `Заказ #${numberOrder} оформлен` : "Корзина пуста"} />
                                }
                        
                        
                        
                    </div>
                </div>
        </>
    )
}

export default Busket;