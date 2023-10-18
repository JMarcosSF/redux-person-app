// src/App.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstName, setLastName, setAddress } from './slices/personSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const person = useSelector(state => state.person);

  return (
      <div className="App">
        <h1>Manage Person</h1>
        <div>
          <label>First Name:</label>
          <input
              value={person.firstName}
              onChange={(e) => dispatch(setFirstName(e.target.value))}
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
              value={person.lastName}
              onChange={(e) => dispatch(setLastName(e.target.value))}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
              value={person.address}
              onChange={(e) => dispatch(setAddress(e.target.value))}
          />
        </div>
        <div>
          <pre>{JSON.stringify(person, null, 2)}</pre>
        </div>
      </div>
  );
}

export default App;
