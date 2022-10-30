import './App.css';
import axios from 'axios';
import Header from './Header/Header';
import Main from './Main/Main';
import Basket from './Basket/Basket';
import React from 'react';

function App() {

  /*---------------- Basket --------------------*/
let [basket, setBasket] = React.useState(false);
let closeBasket = () => {setBasket(false)};
let openBasket = () => {setBasket(true)};

let [itemsBusket, setItemsBusket] = React.useState([]);

let addBasket = (a) => {
  axios.post('https://6353f42dccce2f8c02000b84.mockapi.io/basket', a);
  setItemsBusket(prev => [...prev, a])
};
React.useEffect(() => {
  axios.get('https://6353f42dccce2f8c02000b84.mockapi.io/basket')
  .then((items) => {setItemsBusket(items.data)})},
[]);

let removeBasket = (id) => {
  axios.delete(`https://6353f42dccce2f8c02000b84.mockapi.io/basket/${id}`);
  setItemsBusket(prev => prev.filter(item => item.id !== id));
}


/*--------------------- Search -------------------------*/
let [searchBooks, setSearchBooks] = React.useState('');
let searchChange = (event) =>
setSearchBooks(event.target.value);



  return (
    <>

      {basket && <Basket 
      itemsBusket={itemsBusket} 
      closeBasket={closeBasket}
      removeBasket={removeBasket}
      />}
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
