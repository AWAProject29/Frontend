import React from 'react';
import SignUp from './SignUpClass';
import './components/modules/App.css';
import Header from './components/Header';
import Search from './components/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import { render } from '@testing-library/react';

import axios from 'axios';

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: []
    }
    console.log("Constructor");
  }

  addNewCustomerAccount = (email, password, firstname, lastname, address) => {
    console.log("in addNewCustomerAccount function");
    axios.post('http://localhost:3000/customer/addCustomer', 
      {
        email,
        password,
        firstname,
        lastname,
        address
      }
    )
      .then(response => {
        this.setState({ items: response.data.items })
        console.log(JSON.stringify(response));
        
      })
      .catch(err => {
        console.log(err);
      })
      
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/login" element={ <Login /> } />
          <Route path="/signup" element={ <SignUp addNewCustomerAccount={ this.addNewCustomerAccount }/> } />
        </Routes>
        <Search/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;