import React from 'react';
import styles from './modules/MenuEdit.module.css';
import axios from 'axios';
import Constants from '../Constants.json';
import MenuRedirect from './MenuRedirect';

class AddProduct extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
          newProductName: "",
          newProductPrice: "",
          newProductCategory: "",
          newProductDescription: "",
          newProductImage: "",
          image: "",
          fileName: "",
          fileContent: "",
          products: [],
          findString: "",
          cartItems: [],
          product: "",
          rememberMe: false,
          redirectAddress: "",
          amountOfItem: 0
        }
      }
      

    componentDidMount() {
        axios.get(Constants.API_ADDRESS + '/product')
            .then(response => {
                // console.log(response);
                this.setState({ products: response.data })
            })
            .catch(error => {
                console.log(error);
                this.setState({errorMsg: 'Error retrieving data'})
            })
            const rememberMe = localStorage.getItem('rememberMe') === 'true';
            const product = rememberMe ? localStorage.getItem('product') : '';
            this.setState({ product, rememberMe });
    }

      manageMenu = (id) => {
        this.props.manageMenu(id);
        const menuEditAddress = ("/menuedit/" + id);
        this.setState({redirectAddress: menuEditAddress});
      }

      onAddItem = (addedItem) => {
        this.setState(prev => ({cartItems: [...prev.cartItems, addedItem], addedItem: ''}))

        this.setState({amountOfItem: this.state.amountOfItem+1});

        console.log("This is the value of the item: ");
        console.log(this.state.amountOfItem);
      }

      onRemoveItem = (removedItem) => {
        console.log(removedItem.productname + " " + removedItem.productprice)

        const itemsInCart = this.state.cartItems.filter(item => item.productid !== removedItem.productid);
        this.setState({cartItems: itemsInCart});

        console.log('Item removed from shopping cart: ')
        console.log(removedProductName + " " + removedProductPrice)
    }


      manageMenu = (id) => {
        this.props.manageMenu(id);
        const menuEditAddress = ("/menuedit/" + id);
        this.setState({redirectAddress: menuEditAddress});
      }

      updatedPage = () => {
        console.log(this.state.cartItems);
      }

    render() {

        const { products, errorMsg, cartItems } = this.state
        const restaurantid = window.location.href.slice(-2)
        const filteredProducts = () => {
            const productsArray = products.filter((product) => product.restaurantpageid.toString().toLowerCase().includes(restaurantid.toLowerCase()));
            return productsArray
          }
          // console.log(products);
        const filteredProductsArray = filteredProducts();

        return (
            <div onLoad={() => this.manageMenu(restaurantid) }>
                <div className={styles.productContainer}>
                    {filteredProductsArray.length ?
                        filteredProductsArray.map(filteredproduct => 
                        <div className={styles.product} key={filteredproduct.id}>
                            <div className={styles.productImageContainer}>
                                <img className={styles.productImage} src={filteredproduct.productimage} alt="" />
                            </div>
                            <div className={styles.productName}>
                                <h1 >{filteredproduct.productname}</h1>
                                <h2>{filteredproduct.productdescription}</h2>
                            </div>
                            <div className={styles.productPrice}>
                                <p>{filteredproduct.productprice} €</p>
                            </div>
                            <div className={styles.productButtons}>
                                <button id="addToShoppingCart" key={filteredProductsArray.productid} onClick={() => this.onAddItem(filteredproduct) } > +</button>
                                <button id="removeFromShoppingCart" key={filteredProductsArray.productid} onClick={() => this.onRemoveItem(filteredproduct) }> - </button>
                            </div>
                        </div>) :
                        null}
                    {errorMsg ? <div>{errorMsg}</div> : null}
                </div>
                <div className={styles.productContainer}>
                    {cartItems.length ?
                        cartItems.map(cartItem => 
                        <div className={styles.product} key={cartItem.id}>
                            <div className={styles.productImage}>
                                <img className={styles.productImage} src={cartItem.productimage} alt="" />
                            </div>
                            <div className={styles.productName}>
                                <h1 >{cartItem.productname}</h1>
                                <h2>{cartItem.productdescription}</h2>
                            </div>
                            <div className={styles.productPrice}>
                                <p>{cartItem.productprice} €</p>
                            </div>
                        </div>) :
                        null}
                    {errorMsg ? <div>{errorMsg}</div> : null}
                </div>
                <div className={styles.productButtons}>
                    <MenuRedirect redirectAddress = { this.state.redirectAddress }/>
                </div>
            </div> 
            
        
        )
    }
}

export default AddProduct;