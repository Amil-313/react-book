import React from "react";
function Cardmain({item, addBasket}) {
    
    let [done, setDone] = React.useState(false);

    let doneProduct = () => {
        setDone(!done)
        addBasket(item);
    };


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
                        <button><img src={ require("../Img/heart.png")} alt="favorit" /></button>
                        <button onClick={doneProduct}><img src= { !done ? require("../Img/plus.png") : require("../Img/done.png")} alt="plus" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cardmain;