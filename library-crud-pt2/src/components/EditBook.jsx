import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../shared/Layout";
import BookForm from "../shared/BookForm";
import { getAllBooks, editBook } from '../services/api-calls';
import axios from 'axios';




function EditBook() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [editUpdateBook, setEditUpdateBook] = useState({
        title: "",
        author: "",
        year: "",
        genres:[""],
        imageLink: "",
        ISBN: ""
    })

    const [updated, setUpdated] = useState(false)

    const fetchData = async ( ) => {
        try { 
            const response = await axios(`http://localhost:3001/books/`);
            console.log('edit', response)
            setEditUpdateBook(response);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect( () => {

        fetchData()
    }, []);

    


    const handleChange = ( event ) => {
        const updateField = { [event.target.name] : event.target.value }
        const editedBook = Object.assign(editUpdateBook, updateField)
        setEditUpdateBook(editedBook)
    }

    const handleSubmit = ( event ) => {
        event.preventDefault()

        // axios({
        //     url: `http://localhost:3001/books/${id}`,
        //     method: 'PUT',
        //     data: editUpdateBook
        // }).then(() => setUpdated(true)).catch(console.error)

        editBook(editUpdateBook, id ).then(() => setUpdated(true)).catch(console.error)
    }

    useEffect( () => {
        if (updated) {
            return navigate(`/books/${id}`)
        }
    })





    return(

        <Layout>
            <BookForm
                book={editUpdateBook}
                handleChange={(e) => handleChange(e)}
                handleSubmit={(e) => handleSubmit(e)}
                cancelPath={`/books/${id}`}
            />
        </Layout>
    )
}

export default EditBook;