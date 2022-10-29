import './App.css';
import axios from 'axios';
import Header from './Header/Header';
import Main from './Main/Main';
import Basket from './Basket/Basket';
import React from 'react';

function App() {

let [basket, setBasket] = React.useState(false);
let closeBasket = () => {setBasket(false)};
let openBasket = () => {setBasket(true)};

let [itemsBusket, setItemsBusket] = React.useState([]);
let addBasket = (a) => {
  axios.post('https://6353f42dccce2f8c02000b84.mockapi.io/basket', a);
  setItemsBusket(prev => [...prev, a])
};

let [searchBooks, setSearchBooks] = React.useState('');
let searchChange = (event) =>
setSearchBooks(event.target.value);



  return (
    <>

      {basket && <Basket itemsBusket={itemsBusket} closeBasket={closeBasket} />}
      <Header 
      openBasket={openBasket}
      searchBooks={searchBooks}
      setSearchBooks={setSearchBooks}
      searchChange={searchChange}
       />
      <Main 
      addBasket={addBasket}
      searchBooks={searchBooks}
      />
      
    </>
  );
}

export default App;
