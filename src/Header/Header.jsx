import React from 'react';
import { Link } from 'react-router-dom';
import { ContextApp } from '../App';
import './Header.scss';

function Header({openBasket, searchChange, setSearchBooks}) {

    let {searchBooks, updateFavorite} = React.useContext(ContextApp);
    
    return(
        <>
            <header>
                <div className="container">

                    <div className="header">
                        
                        <Link to='/'>
                            <div className="logo">
                                <img src={require("../Img/books.png")} alt="logo" />
                                <h1>Oxu</h1>
                            </div>
                        </Link>

                       <nav>
                            <div className="search">
                                <img src={require("../Img/search.svg").default} alt="search" />
                                <input onChange={searchChange} value={searchBooks} className="search_input" type="text" />
                               {searchBooks && <img onClick={() => setSearchBooks('')} src={require("../Img/censel.png")} alt="clear" />}
                            </div>
                            <img onClick={openBasket} src={require("../Img/basket.png")} alt="basket" />
                            <Link to='/favorite'> <img onClick={updateFavorite} src={require("../Img/heart.png")} alt="favorit" /> </Link>
                            <img src={require("../Img/profil.png")} alt="profil" />
                        </nav>

                    </div>

                </div>
            </header>

        </>
    )
}

export default Header;