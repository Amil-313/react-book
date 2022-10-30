import React from 'react';
import './Header.scss';

function Header({openBasket, searchBooks, searchChange, setSearchBooks}) {

    
    return(
        <>
            <header>
                <div className="container">

                    <div className="header">
                        
                        <div className="logo">
                            <img src={require("../Img/books.png")} alt="logo" />
                            <h1>Oxu</h1>
                        </div>

                       <nav>
                            <div className="search">
                                <img src={require("../Img/search.svg").default} alt="search" />
                                <input onChange={searchChange} value={searchBooks} className="search_input" type="text" />
                               {searchBooks && <img onClick={() => setSearchBooks('')} src={require("../Img/censel.png")} alt="clear" />}
                            </div>
                            <img onClick={openBasket} src={require("../Img/basket.png")} alt="basket" />
                            <img src={require("../Img/heart.png")} alt="favorit" />
                            <img src={require("../Img/profil.png")} alt="profil" />
                        </nav>

                    </div>

                </div>
            </header>

        </>
    )
}

export default Header;