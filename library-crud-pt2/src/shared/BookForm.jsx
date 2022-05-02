import {Link} from 'react-router-dom'

export default function BookForm({book, handleSubmit, handleChange, cancelPath}) {


    return(
       
        <form onSubmit={(e) => handleSubmit(e)}>
          
            <input 
            placeholder="title"  
            defaultValue={book.value} 
            name="title" 
            onChange={(e) => handleChange(e)} />

            <input 
            placeholder="author" 
            defaultValue={book.value } 
            name="author" 
            onChange={(e) => handleChange(e)} /> 

            <input 
            placeholder="year" 
            defaultValue={book.value} 
            name="year" 
            onChange={(e) => handleChange(e)} />

            <input 
            placeholder="genres" 
            defaultValue={book.value} 
            name="genres" 
            onChange={(e) => handleChange(e)} />

            <input 
            placeholder="imageLink" 
            defaultValue={book.value} 
            name="imageLink" 
            onChange={(e) => handleChange(e)} />

            <input 
            placeholder="ISBN" 
            defaultValue={book.value} 
            name="ISBN" 
            onChange={(e) => handleChange(e)} />

            <button type="submit">Submit</button>

            <button><Link to={cancelPath}>cancel</Link></button>

        </form>
        

    )
}