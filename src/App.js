import React from 'react';
import axios from 'axios';
import SignUp from './components/SignUpView.js';
import './components/modules/App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import LoginManager from './components/LoginManager';
import Home from './components/Home.js';
import ManagerSignUp from './components/ManagerSignUpClass';
import AddRestaurant from './components/AddRestaurantClass.js';
import Payment from './components/Payment.js';
import Menu from './components/Menu.js';
import Order from './components/Order.js';
import MenuEdit from './components/MenuEditClass.js';
import ShoppingCart from './components/ShoppingCart.js';
import ProtectedCustomer from './components/ProtectedCustomer.js';
import ProtectedManager from './components/ProtectedManager.js';


//const jwtFromStorage = window.localStorage.getItem('appAuthData');



class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: [],
      cartItems: [],
      setCartItems: [],
      isUserLoggedIn: false,
      setIsUserLoggedIn: false,
      userJwt: null,
      setUserJwt: null

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

  addNewProduct = (productname, productprice, productcategory, productdescription, productimage, restaurantpageid) => {
    console.log("in addNewProduct function");
    console.log("This is restaurantpageid in addNewProduct: " + restaurantpageid);
    axios.post('http://localhost:3000/product/addProduct', 
      {
        productname,
        productprice,
        productcategory,
        productdescription,
        productimage,
        restaurantpageid
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

  removeProduct = (productId) => {
    console.log("in removeProduct function. productId is: " + productId);
    axios.delete(`http://localhost:3000/product/removeProduct/${productId}`)
      .then(response => {
        console.log(JSON.stringify(response));
      })
      .catch(err => {
        console.log(err);
      })
  }

  manageMenu = (redirectAddress) => {
    return redirectAddress;
  }

  onAdd = (product) => {
    const exist = this.props.cartItems.find((x) => x.id === product.id);
    if (exist) {
      this.props.setCartItems(
        this.props.cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      this.props.setCartItems([...this.props.cartItems, { ...product, qty: 1 }]);
    }
  }

 onRemove = (product) => {
    this.props.exist = this.props.cartItems.find((x) => x.id === product.id);
    if (this.props.exist.qty === 1) {
      this.props.setCartItems(this.props.cartItems.filter((x) => x.id !== product.id));
    } else {
      this.props.setCartItems(
        this.props.cartItems.map((x) =>
          x.id === product.id ? { ...this.props.exist, qty: this.props.exist.qty - 1 } : x
        )
      );
    }
  }

  setUserJwt = (newJwt) => {
    this.setState({userJwt: newJwt})
  }

  setIsUserLoggedIn = () => {
    this.setState({isUserLoggedIn: true})
  }

  logOut = () => {
    this.setState({userJwt: null})
    this.setState({isUserLoggedIn: false})
  }

  render() {


    
    let authRoutes = <>

        <Route path="/login" element={ <Login login= { newJwt => {
          this.setIsUserLoggedIn();
          this.setUserJwt(newJwt);
          console.log("This is new JWT: " + newJwt);
        } }/> } />
        <Route path="/signup" element={ <SignUp addNewCustomerAccount={ this.addNewCustomerAccount }/> } />

    </>
    if(this.state.isUserLoggedIn == true) {
        authRoutes = <>
        <Route path="/ProtectedManager" element={ <ProtectedManager /> } />
        <Route path="/ProtectedCustomer" element={ <ProtectedCustomer /> } />
        <Route path="/shoppingcart" element={ <ShoppingCart cartItems={ this.props.cartItems } onAdd={ this.onAdd } onRemove={ this.onRemove }/>} />
        <Route path="*" element= { <ProtectedCustomer userLoggedIn={this.state.isUserLoggedIn}/> } />
        <Route path="/" element= { <ProtectedCustomer userLoggedIn={this.state.isUserLoggedIn}/> } />
        </>
    }

    return (
      
      <BrowserRouter>
      <div className="App">
        <Header logout={() => this.logOut()}/>
        <Routes>
          <Route path="*" element= { <Home userLoggedIn={this.state.isUserLoggedIn}/> } />
          <Route path="/" element= { <Home userLoggedIn={this.state.isUserLoggedIn}/> } />
         
          { authRoutes }
          <Route path="/loginmanager" element={ <LoginManager />} />
          <Route path="/managersignup" element={ <ManagerSignUp addNewManagerAccount={ this.addNewManagerAccount }/> } />
          <Route path="/addrestaurant" element={ <AddRestaurant addNewRestaurant={ this.addNewRestaurant }/> } />
          <Route path="/payment" element={ <Payment /> }/>
          <Route path="/menu/*" element={ <Menu manageMenu={ this.manageMenu }/> }/>
          <Route path="/order" element={ <Order/>} />
          <Route path="/menuedit" element={ <MenuEdit cartItems={ this.props.cartItems } setCartItems={ this.props.setCartItems } onAdd={ this.onAdd } addNewProduct={ this.addNewProduct } /> }/>
        </Routes>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;