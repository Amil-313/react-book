function Order({item}) {
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
                        <button><img src= { require("../Img/done.png")} alt="done" /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order;