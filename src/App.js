import './App.css';
import { useState } from 'react';

function App() {
  const [contactList, setContactList] = useState([]);

  
  function handleClick() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(
      (result) => {
        setContactList(result);
      },
      (error) => {
        console.log('error')
      }
    )
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Load Contacts</button>
      {contactList ? (contactList.map((data) => (
        <div className="contact" key={data.id}>
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.phone}</p>
        </div>
      ))) : (<h1>Loading</h1>)}
      {console.log(contactList)}
    </div>
  );
}

export default App;
