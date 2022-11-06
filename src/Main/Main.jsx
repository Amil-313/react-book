import React from 'react';
import './Main.scss';
import Cardmain from './Cardmain';
import { ContextApp } from '../App';
import Loading from './Loading';


function Main() {

let {searchBooks, books, loading} = React.useContext(ContextApp);
        
    return(
        <>
            <div className='main'>
                <div className="container">

                    <h1>{searchBooks ? 'Поиск по запросу: ' + searchBooks : 'Все книги'}</h1>

                    <div className="container_items">

                        {loading ? [...Array(8)].map((i) => <Loading key={i} className='loading' />) : books.filter((book) =>
                         book.name.toLowerCase().includes(searchBooks.toLowerCase())).map((book) => <Cardmain key={book.parId} item = {book} />)}
                        

                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;