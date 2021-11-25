import React from 'react';
import SignUp from './SignUpClass';
import './components/modules/App.css';
import Header from './components/Header';
import Search from './components/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import { render } from '@testing-library/react';
import ManagerSignUp from './ManagerSignUpClass';
import AddRestaurant from './AddRestaurantClass.js';
import FrontPage from './FrontPage.js';
import Payment from './Payment.js';
import Menu from './Menu.js';

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
    axios.post('http://localhost:4000/customer/addCustomer', 
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

  addNewManagerAccount = (email, password, firstname, lastname, managerauthentication) => {
    console.log("in addNewManagerAccount function");
    axios.post('http://localhost:3000/manager/addManager', 
      {
        email,
        password,
        firstname,
        lastname,
        managerauthentication
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

  addNewRestaurant = (restaurantname, address, restauranttype, pricelevel, operatinghours, restaurantdescription) => {
    console.log("in addNewRestaurant function");
    axios.post('http://localhost:3000/restaurant/addRestaurant', 
      {
        restaurantname,
        address,
        restauranttype,
        pricelevel,
        operatinghours,
        restaurantdescription
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
          <Route path="/" element={ <FrontPage /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/signup" element={ <SignUp addNewCustomerAccount={ this.addNewCustomerAccount }/> } />
          <Route path="/managersignup" element={ <ManagerSignUp addNewManagerAccount={ this.addNewManagerAccount }/> } />
          <Route path="/addrestaurant" element={ <AddRestaurant addNewRestaurant={ this.addNewRestaurant }/> } />
          <Route path="/payment" element={ <Payment /> }/>
          <Route path="/menu" element={ <Menu /> }/>
        </Routes>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;