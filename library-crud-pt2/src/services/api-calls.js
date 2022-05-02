import axios from "axios";


export const getAllBooks = () => {
    let response = axios.get('http://localhost:3001/books')
    return response;
}

export const getBook = (id) => {
    let response = axios.get(`http://localhost:3001/books/${id}`)
    return response;
  }
  
  export const createBook = (newBook) => {
    let response = axios({
      url:`http://localhost:3001/book`,
      method: 'POST',
      data: newBook
  })
    return response;
  }
  
  export const deleteBook = (id) => {
    let response = axios({
      url:`http://localhost:3001/book/${id}`,
      method: 'DELETE'
  })
    return response;
  }

  export const editBook = (editValue, id) => {
      let response = axios ({
          url:`http://localhost:3001/books/${id}`,
          method: 'PUT',
          data: editValue
      })
      return response;
  }