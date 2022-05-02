import { useState, useEffect } from 'react';
import axios from 'axios';
import { getAllBooks } from '../services/api-calls';


export default function Home() {
    const [booksData, setBooksData] = useState([]);

    useEffect( () => {
        getAllBooks()
            .then( (res) => setBooksData(res.data) );
    }, []);
    console.log(booksData);

    const books = booksData.map( (book) => {
        const genres = book.genres.join(', ');

        return (
            <div className='book-info-map'>
                <h1>{book.title}</h1>
                <img src={book.imageLink} />
                
                <h3>Author: {book.author} Year: {book.year}</h3>

                <p>Genres: {genres} </p>
            </div>
        )
    });

    return (
        <div className='Home'>
            {books}
        </div>
    )
}