import { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Layout from '../shared/Layout'
import { getBook } from '../services/api-calls'

export default function BookInfo(){
     const [book,setBook] = useState([])
     // const [genres,setGenres] = useState(book.genres)
    const [deleted, setDeleted] = useState(false)
    const { id } = useParams();
    let navigate = useNavigate()

    const fetchData = async (idNum) => {
        try {
            const response = await getBook(idNum)
            console.log(response)
            const result = response.data.book
            setBook(result)
        }catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchData(id)
        
    },[])

    useEffect(() => {
        if (!book) {
          return <p>Loading...</p>
        }
      }, [book])
    
      const destroy = () => {
       axios({
          url: `http://localhost:3001/books/${id}`,
          method: 'DELETE'
        }).then(() => setDeleted(true)).catch(console.error)
      }
    
      useEffect(() => {
        if (deleted) {
          return navigate("/")
        }
      }, [deleted, navigate])
    
    //  const genres = book.genres
    // const genre = genres.join(', ')
    //  console.log(genres)

      return ( 
    
        <Layout>
            
            <img src={book.imageLink} alt='Have a nice day'/>
          <h3>{book.title}</h3>
          <p>Author :{book.author}.</p>
          <p>Genres:{book.genres}</p>)
          <p>Year:{book.year}</p>
          <p>ISBN:{ book.ISBN} </p>
          <button onClick={(e) => destroy(e)} >Delete Item</button>
    
          <NavLink to={`/books/${id}/edit`} >
            <button>Edit</button>
          </NavLink>
    
          <NavLink to="/" >Back to all items</NavLink>
          
        </Layout>
      )
    }