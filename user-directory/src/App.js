import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import API from './utils/API'

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.search().then(result => {
      console.log(result.data.results)
    })
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
