import React from 'react';
import { Link } from 'react-router-dom';
import { ContextApp } from '../App';



function Absence({tittle}) {

let {closeBasket} = React.useContext(ContextApp);

    return(
        <>
            <div className="absence">
                <h2>{tittle}</h2>
                <img src={require('../Img/box.png')} alt="" />
                <Link to='/'><button onClick={closeBasket}>Вернуться назад</button></Link>
            </div>
        </>
    )
}

export default Absence;