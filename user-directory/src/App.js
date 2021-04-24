import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import API from './utils/API'

function App() {

  const [users, setUsers] = useState([
    {
      name: '',
      gender: '',
      image: '',
      email: '',
      phone: ''
    }
  ]);

  useEffect(() => {
    API.search().then(result => {
      setUsers(result.data.results.map(user => {
        return {
          name: user.name.first + ' ' + user.name.last,
          gender: user.gender,
          image: user.picture.thumbnail,
          email: user.email,
          phone: user.phone
        }
      }))
    })
  }, [])

  console.log('USERS:', users);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
