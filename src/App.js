import { Routes, Route } from 'react-router-dom';
import './App.scss';
import axios from 'axios';
import Header from './Header/Header';
import Main from './Main/Main';
import Basket from './Basket/Basket';
import React from 'react';
import Favorit from './Favorit/Favorite';
import { useState } from 'react';
import Orders from './Orders/Orders';

export let ContextApp = React.createContext({});

function App() {

  /*---------------- Basket --------------------*/
let [basket, setBasket] = React.useState(false);
let closeBasket = () => {setBasket(false)};
let openBasket = () => {setBasket(true)};

let [itemsBusket, setItemsBusket] = React.useState([]);

let addBasket = async (a) => {
  let {data} = await axios.get('https://6353f42dccce2f8c02000b84.mockapi.io/basket');
if (data.some((item) => (item.id === a.id))) {
  let {data} = await axios.delete(`https://6353f42dccce2f8c02000b84.mockapi.io/basket/${a.id}`);
  setItemsBusket(prev => prev.filter(item => item.id !== data.id));
} else {
  let {data} = await axios.post('https://6353f42dccce2f8c02000b84.mockapi.io/basket', a);
  setItemsBusket(prev => [...prev, data]);
}
};

React.useEffect(() => {
  axios.get('https://6353f42dccce2f8c02000b84.mockapi.io/basket')
  .then((items) => {setItemsBusket(items.data)})
}, []);

let removeBasket = async (id) => {
  let {data} = await axios.delete(`https://6353f42dccce2f8c02000b84.mockapi.io/basket/${id}`);
  setItemsBusket(prev => prev.filter(item => item.id !== data.id));
}

/* ------------------------Favorite--------------------------- */
let [itemsFavorite, setItemsFavorite] = React.useState([]);

let addFavorite = async (a) => {
  try {
    let {data} = await axios.get('https://6353f42dccce2f8c02000b84.mockapi.io/favorites');
  
  if (data.some((item) => (item.id === a.id))) {
    axios.delete(`https://6353f42dccce2f8c02000b84.mockapi.io/favorites/${a.id}`);
  } else {
    axios.post('https://6353f42dccce2f8c02000b84.mockapi.io/favorites', a);
  } } catch (error) {
    alert("Попробуйте ещё раз...");
  }
};

let updateFavorite = () => {
  axios.get('https://6353f42dccce2f8c02000b84.mockapi.io/favorites')
  .then((items) => {setItemsFavorite(items.data)});
}

/* ------------------------Main------------------------------ */

let [books, setBooks] = React.useState([]);
// ____________________Loading______________
let [loading, setLoading] = useState(true);
React.useEffect(() => { async function fetchUse() {
  setLoading(true);
  let favorited = await axios.get('https://6353f42dccce2f8c02000b84.mockapi.io/favorites');
  let mainProduct = await axios.get('https://6353f42dccce2f8c02000b84.mockapi.io/books');

  setLoading(false);
  setItemsFavorite(favorited.data);
  setBooks(mainProduct.data);
}
fetchUse();

}, []);

/*--------------------- Search -------------------------*/
let [searchBooks, setSearchBooks] = React.useState('');
let searchChange = (event) =>
setSearchBooks(event.target.value);



  return (
    <>

      <div className="App">

        <ContextApp.Provider value={{addBasket, addFavorite, searchBooks, itemsFavorite, updateFavorite, books, loading, closeBasket}}>

          
            {basket && <Basket 
            itemsBusket={itemsBusket}
            removeBasket={removeBasket}
            setItemsBusket={setItemsBusket}
            />}
            <Header 
            openBasket={openBasket}
            setSearchBooks={setSearchBooks}
            searchChange={searchChange}
            />
          <Routes>

            <Route path='/' element={ <Main /> } />
          
            <Route path='/favorite' element={ <Favorit /> } />

            <Route path='/orders' element={ <Orders /> } />

          </Routes>
        </ContextApp.Provider>

      </div>
      
    </>
  );
}

export default App;
