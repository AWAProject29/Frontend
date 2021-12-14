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
import Menu from './components/Menu.js';
import MenuEdit from './components/MenuEditClass.js';
import ShoppingCart from './components/ShoppingCartClass.js';
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
      selectedOption: null,    
    }
  }

  
 
  

  addNewCustomerAccount = (email, password, firstname, lastname, address) => {
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

  onAddItemToCart = (idshoppingcart, idcartitem, cartitemname, cartitemprice, cartitemamount) => {
    axios.post(Constants.API_ADDRESS + '/shoppingcart/addToCart', 
      {
        idshoppingcart,
        idcartitem,
        cartitemname,
        cartitemprice,
        cartitemamount
      }
    )
      .then(response => {
        this.setState({ items: response.data.items })
        console.log(JSON.stringify(response));
        console.log(JSON.stringify(response.data.errno));
        if(JSON.stringify(response.data.errno) === '1062') {
          console.log("Error number matched!");
          axios.put(Constants.API_ADDRESS + '/shoppingcart/addAmount',
            {
              idcartitem
            }
          );
          console.log(idcartitem);
        } else {
          console.log("Error number didn't match to duplicate");
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

  onRemoveItemFromCart = (idcartitem) => {
    axios.put(Constants.API_ADDRESS + '/shoppingcart/removeFromCart', 
      {
        idcartitem
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

  addItemToOrder = (idcartitem) => {
    axios.put(Constants.API_ADDRESS + '/shoppingcart/addAmount',
    {
      idcartitem
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

  removeItemFromOrder = (idcartitem) => {
    axios.put(Constants.API_ADDRESS + '/shoppingcart/removeFromCart',
    {
      idcartitem
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

  clearCart = (teststring) => {
    console.log("We're in cleaCart function in appjs")
    console.log(teststring)
    axios.put(Constants.API_ADDRESS + '/shoppingcart/clearCart')
    .then(response => {
      this.setState({ items: response.data.items })
      console.log(JSON.stringify(response));
    })
    .catch(err => {
      console.log(err);
    })
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
        <Route path="/login" element={ <Login statusId={statusId => { this.setStatusId(statusId);}} login={ newJwt => {
          this.setIsUserLoggedIn();
          this.setUserJwt(newJwt);    
        } }/> } />
    </>

    let managerAuthRoutes = <>
        <Route path="/loginmanager" element={ <LoginManager login= { managerJwt => {
          this.setIsManagerLoggedIn();
          this.setManagerJwt(managerJwt);
          this.setUserJwt(managerJwt);  
        }}/>} />
        <Route path="/managersignup" element={ <ManagerSignUp addNewManagerAccount={ this.addNewManagerAccount }/> } />
    </>


    if(this.state.isUserLoggedIn === true) { 
        authRoutes = <>
        <Route path="/ProtectedCustomer" element={ <ProtectedCustomer /> } />
        <Route path="/shoppingcart" element={ <ShoppingCart addItemToOrder={ this.addItemToOrder } removeItemFromOrder={ this.removeItemFromOrder } clearCart={ this.clearCart }/>} />

        </>
    }

    if(this.state.isManagerLoggedIn === true) {
      managerAuthRoutes = <>
        <Route path="/ProtectedManager" element={ <ProtectedManager /> } />
        <Route path="/addrestaurant" element={ <AddRestaurant addNewRestaurant={ this.addNewRestaurant }/> } />
        <Route path="/shoppingcart" element={ <ShoppingCart addItemToOrder={ this.addItemToOrder } removeItemFromOrder={ this.removeItemFromOrder } clearCart={ this.clearCart }/>} />
        <Route path="/menuedit/*" element={ <MenuEdit cartItems={ this.props.cartItems } setCartItems={ this.props.setCartItems } addNewProduct={ this.addNewProduct } removeProduct={ this.removeProduct } isManagerLoggedIn={this.state.isManagerLoggedIn}/> }/>
      </>
    }

    return (   
      <BrowserRouter>
      <div className="App">
        <Header logout={() => this.logOut() } isUserLoggedIn={this.state.isUserLoggedIn} isManagerLoggedIn={this.state.isManagerLoggedIn} />
        <Routes>
          { authRoutes }
          { managerAuthRoutes }
          <Route path="/" element= { <Home userLoggedIn={this.state.isUserLoggedIn}/> } />
          <Route path="/signup" element={ <SignUp addNewCustomerAccount={ this.addNewCustomerAccount }/> } />
          <Route path="/menu/*" element={ <Menu manageMenu={ this.manageMenu } onAddItemToCart={ this.onAddItemToCart } onRemoveItemFromCart={ this.onRemoveItemFromCart } isManagerLoggedIn={this.state.isManagerLoggedIn}/> }/>
        </Routes>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;