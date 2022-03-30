import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './UserForm';

import logo from './logo.svg';
import './App.css';

// Initial States
const InitialFormValues = {
  first_name: '',
  last_name: '',
  role: '',
  email: '',
  password: '',
  tos: false,
};
const initalFormErrors = {
  first_name: '',
  last_name: '',
  role: '',
  email: '',
  password: '',
};
const initalUser = [];
const initalDisabled = true;

function App() {
  const [users, setUsers] = useState(initalUser);
  const [formValues, setFormValues] = useState(InitialFormValues);
  const [formErrors, setFormErrors] = useState(initalFormErrors);
  const [disabled, setDisabled] = useState(initalDisabled);
  
const getUsers = () => {
  axios.get("https://reqres.in/api/users")
  .then(res => {
    //console.log(res.data);
    setUsers(res.data);
  }).catch(err => console.error(err))
}

const postNewUser = newUser => [
  axios.post("https://reqres.in/api/users", newUser)
    .then(res => {
      setUsers([res.data, ...users])
    }).catch(err => console.error(err))
    .finally(() => setFormValues(InitialFormValues))
]

const inputChange = (name, value) => {
  setFormValues({...formValues, [name]: value})
}

const formSubmit = () => {
  const newUser = {
    first_name: formValues.first_name.trim(),
    last_name: formValues.last_name.trim(),
    role: formValues.role.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    tos: [true, false].filter(choice => !!formValues[choice])
  }
  postNewUser(newUser);
}

useEffect(() => {
  getUsers()
}, [])

  return (
    <div className="App">
      <h1>User Onboarding App</h1>

      <UserForm 
        values={formValues}
        change={inputChange} 
        submit={formSubmit}
      />

    </div>
  );
}

export default App;
