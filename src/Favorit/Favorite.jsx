import React from "react";
import { ContextApp } from "../App";
import './Favorite.scss';
import Cardmain from "../Main/Cardmain";
import Absence from "../Main/Absence";

function Favorit() {

    let { itemsFavorite } = React.useContext(ContextApp);

    return(
        <>

            <div className='favorite'>
                <div className="container">

                    <h1>Мои закладки</h1>

                     <div className="container_items">

                        { itemsFavorite.length > 0 ?
                        itemsFavorite.map((item) => <Cardmain item = {item} />) :
                        <Absence tittle={"Нет избранных товаров..."} />
                    }

                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Favorit;