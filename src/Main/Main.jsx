import React from 'react';
import axios from 'axios';
import './Main.scss';
import Cardmain from './Cardmain';
import { ContextApp } from '../App';


function Main() {

let {searchBooks} = React.useContext(ContextApp);

let [books, setBooks] = React.useState([])
    
        React.useEffect(() => {
            axios.get('https://6353f42dccce2f8c02000b84.mockapi.io/books')
            .then((books) => {setBooks(books.data)})},
         []);
        
    return(
        <>
            <div className='main'>
                <div className="container">

                    <h1>{searchBooks ? 'Поиск по запросу: ' + searchBooks : 'Все книги'}</h1>

                    <div className="container_items">

                        {books.filter((book) => book.name.toLowerCase().includes(searchBooks.toLowerCase())).map((book, index) => <Cardmain key={index} item = {book} />)}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;