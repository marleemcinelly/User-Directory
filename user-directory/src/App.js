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

  // const [sortAscending, setSortAscending] = useState(true)
  // const [sortColumn, setSortColumn] = useState('choose your filter type')
  const [sortName, setSortName] = useState('name')

  useEffect(() => {
    API.search().then(result => {
      setUsers(result.data.results
        .map(user => {
          return {
            name: user.name.first.toString() + ' ' + user.name.last.toString(),
            gender: user.gender,
            image: user.picture.large,
            email: user.email.toString(),
            phone: user.phone
          }
      })
      // .sort((a,b) => a.name.localeCompare(b.name))
      // )})
      // .sort.gender((a,b) => a.gender.localeCompare(b.gender))
      )})
    
  }, [])

  // const handleNameSort = () => {
  //     console.log('beep boop heres yer name sort function');
  //     setSortName(!sortName);
  // }

  const searchFunction =() => {
    console.log('this is where your search function would be if you had one HAHA')
  }

  console.log('USERS:', users);

  return (
    <div className="App">
      <button onClick={searchFunction}>Search</button><p></p>
      <button onClick={() => setSortName('name')}>Sort by Name</button>
      <button onClick={() => setSortName('email')}>Sort by Email</button>
      {users
        .sort((a,b) => { 
          if(sortName) {
            return a[sortName].localeCompare(b[sortName])
          } else {
            return b[sortName].localeCompare(a[sortName])
          }
        })
        .map(u => <User name={u.name} gender={u.gender} image={u.image} email={u.email} phone={u.phone}/>)}
    </div>
  );
}

export default App;
