import { useState, useEffect } from 'react';
import axios from 'axios';
import { getAllBooks } from '../services/api-calls';
import Layout from '../shared/Layout';
import {NavLink} from 'react-router-dom'


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
                <p>Year:{book.year}</p>
                <p>Genres: {genres} </p>
                <p>ISBN:{book.ISBN}</p>
                <NavLink to={`/books/${book._id}`}>
                    <button> Info</button>
                </NavLink>
            </div>
        )
    });

    return (
        <Layout>
        <h1>Books</h1>
        <div>
            {books}
        </div>


     </Layout>
    )
}