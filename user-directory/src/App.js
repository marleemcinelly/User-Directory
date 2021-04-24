import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import API from './utils/API'
import User from './components/User/index.js'

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
          image: user.picture.large,
          email: user.email,
          phone: user.phone
        }
      }))
    })
  }, [])

  console.log('USERS:', users);

  return (
    <div className="App">
      {users.map(u => <User name={u.name} gender={u.gender} image={u.image} email={u.email} phone={u.phone}/>)}
    </div>
  );
}

export default App;
