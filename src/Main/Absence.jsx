import React from 'react';
import { ContextApp } from '../App';



function Absence({tittle}) {

let {closeBasket} = React.useContext(ContextApp);

    return(
        <>
            <div className="absence">
                <h2>{tittle}</h2>
                <img src={require('../Img/box.png')} alt="" />
                <button onClick={closeBasket}>Вернуться назад</button>
            </div>
        </>
    )
}

export default Absence;