import React from "react";
import { ContextApp } from "../App";

function Cardmain({item}) {
    
    
    let {addBasket, addFavorite, itemsFavorite, itemsBusket} = React.useContext(ContextApp);
    
    let [doneBusket, setDoneBusket] = React.useState(itemsBusket.some((items) => items.parId === item.parId) ? true : false);
    let searchProduct = () => {
        addBasket(item);
        setDoneBusket(!doneBusket)
    };

    let [doneFavorite, setDoneFavorite] = React.useState(itemsFavorite.some((items) => items.parId === item.parId) ? true : false);
    let searchFavorit = () => {
        addFavorite(item);
        setDoneFavorite(!doneFavorite);
    };

    /* itemsFavorite.some((items) => items.parId === item.parId) && setDoneBusket(false); */

    return(
        <>
            <div className="card" >
                <img className="image" src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
                <i>Автор: {item.author}</i>
                <div>
                    <div className="price">
                        <p><i>Цена: </i></p><strong>{item.price} руб.</strong>
                    </div>
                    <div className="card_btn">
                        <button onClick={searchFavorit}><img src={ !doneFavorite ? require("../Img/heart.png") : require("../Img/heartdone.png") } alt="favorit" /></button>
                        
                        <button onClick={searchProduct}><img src= { !doneBusket ? require("../Img/plus.png") : require("../Img/done.png")} alt="plus" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cardmain;