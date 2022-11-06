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
 try {
  let productBusket = itemsBusket.find((item) => (item.parId === a.parId));

  if (productBusket) {
    setItemsBusket(prev => prev.filter(item => item.parId !== a.parId));
    await axios.delete(`https://6353f42dccce2f8c02000b84.mockapi.io/basket/${productBusket.id}`);
  } else {
    setItemsBusket(prev => [...prev, a]);
    await axios.post('https://6353f42dccce2f8c02000b84.mockapi.io/basket', a);
    let {data} = await axios.get('https://6353f42dccce2f8c02000b84.mockapi.io/basket');
    setItemsBusket(data);

  }
 } catch (error) {
  alert("Ошибка при добавлении в карзуину...");
  console.error(error);
 }
};

let removeBasket = async (itemProduct) => {
  try {
    setItemsBusket(prev => prev.filter(item => item.id !== itemProduct.id));
    await axios.delete(`https://6353f42dccce2f8c02000b84.mockapi.io/basket/${itemProduct.id}`);
  } catch (error) {
    alert("Ошибка при удалении из корзины...");
    console.error(error);
  }
}

/* ------------------------Favorite--------------------------- */
let [itemsFavorite, setItemsFavorite] = React.useState([]);

let addFavorite = async (a) => {
  try {
    let {data} = await axios.get('https://6353f42dccce2f8c02000b84.mockapi.io/favorites');
    let productFavorite = data.find((item) => (item.parId === a.parId));

    if (productFavorite) {
      axios.delete(`https://6353f42dccce2f8c02000b84.mockapi.io/favorites/${productFavorite.id}`);
  } else {
    axios.post('https://6353f42dccce2f8c02000b84.mockapi.io/favorites', a);
  } } catch (error) {
    alert("Попробуйте ещё раз...");
    console.error(error);
  }
};

let updateFavorite = () => {
  try {
    axios.get('https://6353f42dccce2f8c02000b84.mockapi.io/favorites')
  .then((items) => {setItemsFavorite(items.data)});
  } catch (error) {
    alert("Ошибка при получении данных избранных товаров...");
    console.error(error);
  }
}

/* ------------------------Main------------------------------ */

let [books, setBooks] = React.useState([]);
// ____________________Loading______________
let [loading, setLoading] = useState(true);
React.useEffect(() => { async function fetchUse() {
  try {
  let [favorited, mainProduct, busket] = await Promise.all([
    axios.get('https://6353f42dccce2f8c02000b84.mockapi.io/favorites'),
    axios.get('https://6353f42dccce2f8c02000b84.mockapi.io/books'),
    axios.get('https://6353f42dccce2f8c02000b84.mockapi.io/basket')
  ]);

  setLoading(false);
  setItemsBusket(busket.data);
  setItemsFavorite(favorited.data);
  setBooks(mainProduct.data);

  } catch (error) {
    alert("Ошибка при получении данных...");
    console.error(error);
  }
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

        <ContextApp.Provider value={{
              addBasket,
              addFavorite,
              searchBooks,
              itemsFavorite,
              itemsBusket, 
              updateFavorite, 
              books, loading, 
              closeBasket,
              basket
              }}>

            <Basket 
            removeBasket={removeBasket}
            setItemsBusket={setItemsBusket}
            />
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
