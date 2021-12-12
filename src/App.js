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
import Constants from './Constants.json'

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
      
      isManagerLoggedIn: false,
      setIsManagerLoggedIn: false,

      userJwt: null,
      setUserJwt: null,
      managerJwt: null,
      setManagerJwt: null,
      statusNumber: null


    }
  
    console.log("Constructor");
  }


  addNewCustomerAccount = (email, password, firstname, lastname, address) => {
    console.log("in addNewCustomerAccount function");
    axios.post(Constants.API_ADDRESS +'/customer/addCustomer', 
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
    axios.post(Constants.API_ADDRESS + '/manager/addManager', 
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
    axios.post(Constants.API_ADDRESS + '/restaurant/addRestaurant', 
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
    axios.post(Constants.API_ADDRESS + '/product/addProduct', 
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
    axios.delete(Constants.API_ADDRESS + `/product/removeProduct/${productId}`)
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

  setStatusId = (statusId) => {
    this.setState({statusNumber: statusId});
  }

  setUserJwt = (newJwt) => {
    this.setState({userJwt: newJwt})
  }

  setIsUserLoggedIn = () => {
    this.setState({isUserLoggedIn: true})
  }

  setUserLoggedOut = () => {
    this.setState({isUserLoggedIn: false})
  }

  setManagerJwt = (managerJwt) => {
    this.setState({managerJwt: managerJwt})
  }

  setIsManagerLoggedIn = () => {
    this.setState({isManagerLoggedIn: true})
  }

  logOut = () => {
    this.setState({userJwt: null})
    this.setState({isUserLoggedIn: false})
    this.setState({isManagerLoggedIn: false})
  }

  render() {


    
    let authRoutes = <>

        <Route path="/login" element={ <Login statusId={statusId => { 
          this.setStatusId(statusId);
          console.log("This is the app.js statusnumber: ")
          console.log(this.state.statusNumber);
        }} login={ newJwt => {
          this.setIsUserLoggedIn();
          this.setUserJwt(newJwt);
          
        } }/> } />
        <Route path="/signup" element={ <SignUp addNewCustomerAccount={ this.addNewCustomerAccount }/> } />

    </>

    let managerAuthRoutes = <>

        <Route path="/loginmanager" element={ <LoginManager login= { managerJwt => {
          // this.setUserLoggedOut();
          this.setIsManagerLoggedIn();
          this.setManagerJwt(managerJwt);
          this.setUserJwt(managerJwt);
      
        }}/>} />
        
        <Route path="/managersignup" element={ <ManagerSignUp addNewManagerAccount={ this.addNewManagerAccount }/> } />
    </>


    if(this.state.isUserLoggedIn == true) {
        
      
        authRoutes = <>

        <Route path="/ProtectedCustomer" element={ <ProtectedCustomer /> } />
        <Route path="/shoppingcart" element={ <ShoppingCart cartItems={ this.props.cartItems } onAdd={ this.onAdd } onRemove={ this.onRemove }/>} />
    
        </>
    }

    if(this.state.isManagerLoggedIn == true) {
      
      managerAuthRoutes = <>
        
        <Route path="/ProtectedManager" element={ <ProtectedManager /> } />
        <Route path="/addrestaurant" element={ <AddRestaurant addNewRestaurant={ this.addNewRestaurant }/> } />
        <Route path="/shoppingcart" element={ <ShoppingCart cartItems={ this.props.cartItems } onAdd={ this.onAdd } onRemove={ this.onRemove }/>} />
        <Route path="/menuedit/*" element={ <MenuEdit cartItems={ this.props.cartItems } setCartItems={ this.props.setCartItems } onAdd={ this.onAdd } addNewProduct={ this.addNewProduct } /> }/>
      </>
    }

    return (
      
      <BrowserRouter>
      <div className="App">
        <Header logout={() => this.logOut()} changeStatus={this.state.statusNumber} />
        <Routes>
          {/* <Route path="*" element= { <Home userLoggedIn={this.state.isUserLoggedIn}/> } /> */}
          <Route path="/" element= { <Home userLoggedIn={this.state.isUserLoggedIn}/> } />
          { authRoutes }
          { managerAuthRoutes }
          <Route path="/payment" element={ <Payment /> }/>
          <Route path="/menu/*" element={ <Menu manageMenu={ this.manageMenu }/> }/>
          <Route path="/order" element={ <Order/>} />
          
        </Routes>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;