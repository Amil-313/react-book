import React from 'react';
import './Basket.scss';

function Busket({closeBasket, itemsBusket}) {

    return(
        <>
                <div className='back_basket'>
                    <div className='basket'>
                        <div className="busket_tittle">
                            <h2>Корзина</h2>
                            <img onClick={closeBasket} className='cansel' src={ require("./Image/censel.png")} alt="Censel" />
                        </div>
                        <div className="busket_product">

                        {itemsBusket.map((item) => (
                            <div className="product_add">
                                <img className='product_img' src= {item.img} alt="Book" />
                                <div>
                                    <p>{item.name}</p>
                                    <strong>{item.price} руб.</strong>
                                </div>
                                <img className='cansel' src= { require("./Image/censel.png")} alt="Censel" />
                            </div>
))}


                        </div>
                        <div className="busket_sum">
                            <div>
                                <p>Итого:</p><span></span><strong>12 450 руб.</strong>
                            </div>
                            <div>
                                <p>Налог 5%:</p><span></span><strong>1 250 руб.</strong>
                            </div>
                            <button>
                                Оформить заказ
                            <img src= { require("./Image/rightarrow.png")} alt="Arrow" />
                            </button>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Busket;