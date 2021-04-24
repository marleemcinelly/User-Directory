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
            phone: user.phone,
            age: user.registered.age.toString()
          }
      })
      // .sort((user) => user.gender)
      // )})
      // .sort((a,b) => a.name.localeCompare(b.name))
      )})
    
  }, [])

  // const handleNameSort = () => {
  //     console.log('beep boop heres yer name sort function');
  //     setSortName(!sortName);
  // }

  // var female = sortName.filter(e => e.type === "female")

  const fuckThePatriarchy =() => {
    console.log('this is where the gender would be if I had one HAHA');
    setUsers((a,b)=> {
      if('gender' === 'female'){
        console.log('look at all those women');
      } else {
        console.log('when will you learn that your actions have consequences');
      }
    });
  }

  console.log('USERS:', users);

  return (
    <div className="App">
      <button onClick={fuckThePatriarchy}>I wish this button worked</button><p></p>
      <button onClick={() => setSortName('name')}>Sort by Name</button>
      <button onClick={() => setSortName('age')}>Sort by Age</button>
      {users
        .sort((a,b) => { 
          if(sortName) {
            return a[sortName].localeCompare(b[sortName])
          } else {
            return b[sortName].localeCompare(a[sortName])
          }
        })
        .map(u => <User name={u.name} gender={u.gender} image={u.image} email={u.email} phone={u.phone} age={u.age}/>)}
    </div>
  );
}

export default App;
