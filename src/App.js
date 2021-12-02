import React from 'react';
import axios from 'axios';
import SignUp from './components/SignUpView.js';
import './components/modules/App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
// import { render } from '@testing-library/react';
import Home from './components/Home.js';
import ManagerSignUp from './components/ManagerSignUpClass';
import AddRestaurant from './components/AddRestaurantClass.js';
import Payment from './components/Payment.js';
import Menu from './components/Menu.js';
import Order from './components/Order.js';
import MenuEdit from './components/MenuEditClass.js';


//const jwtFromStorage = window.localStorage.getItem('appAuthData');



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

  addNewRestaurant = (restaurantname, address, restauranttype, pricelevel, operatinghours, restaurantimage, restaurantdescription) => {
    console.log("in addNewRestaurant function");
    axios.post('http://localhost:3000/restaurant/addRestaurant', 
      {
        restaurantname,
        address,
        restauranttype,
        pricelevel,
        operatinghours,
        restaurantimage,
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

  addNewProduct = (productname, productprice, productdescription) => {
    console.log("in addNewProduct function");
    axios.post('http://localhost:3000/product/addProduct', 
      {
        productname,
        productprice,
        productdescription
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
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/signup" element={ <SignUp addNewCustomerAccount={ this.addNewCustomerAccount }/> } />
          <Route path="/managersignup" element={ <ManagerSignUp addNewManagerAccount={ this.addNewManagerAccount }/> } />
          <Route path="/addrestaurant" element={ <AddRestaurant addNewRestaurant={ this.addNewRestaurant }/> } />
          <Route path="/payment" element={ <Payment /> }/>
          <Route path="/menu" element={ <Menu /> }/>
          <Route path="/order" element={ <Order/>} />
          <Route path="/menuedit" element={ <MenuEdit addNewProduct={ this.addNewProduct }/> }/>
          {/* <Route path="/showrestaurants" element={ <ShowRestaurants /> }/> */}
        </Routes>
       
      </div>
      </BrowserRouter>
    );
  }
}

export default App;