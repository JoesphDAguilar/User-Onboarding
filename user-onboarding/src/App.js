import React, {useState} from 'react';
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
  const [user, setUser] = useState(initalUser);
  const [formValues, setFormValues] = useState(InitialFormValues);
  const [formErrors, setFormErrors] = useState(initalFormErrors);
  const [disabled, setDisabled] = useState(initalDisabled);
  



  return (
    <div className="App">
      <h1>User Onboarding App</h1>

      <UserForm 
        values={formValues}
      />

    </div>
  );
}

export default App;
