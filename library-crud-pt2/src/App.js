import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './components/Home';



function App() {
  const [booksData, setBooksData] = useState([])

  useEffect( () => {
    axios.get('http://localhost:3001/books')
    .then( res => setBooksData(res.data))
  },[])
  console.log(booksData);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
