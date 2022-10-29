import React from 'react';
import axios from 'axios';
import './Main.scss';
import Cardmain from './Cardmain';

function Main(props) {
let [books, setBooks] = React.useState([])
    
        React.useEffect(() => {
            axios.get('https://6353f42dccce2f8c02000b84.mockapi.io/books')
            .then((books) => {setBooks(books.data)})},
         []);
        
    return(
        <>
            <div className='main'>
                <div className="container">

                    <h1>{props.searchBooks ? 'Поиск по запросу: ' + props.searchBooks : 'Все книги'}</h1>

                    <div className="container_items">

                        {books.filter((book) => book.name.toLowerCase().includes(props.searchBooks.toLowerCase())).map((book, index) => <Cardmain key={index} addBasket={props.addBasket} item = {book} />)}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;