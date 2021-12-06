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

          redirectAddress: ""
        }
      }
      

    componentDidMount() {
        axios.get(Constants.API_ADDRESS + '/product')
            .then(response => {
                console.log(response);
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
        console.log(id);
        const menuEditAddress = ("/menuedit/" + id);
        console.log(menuEditAddress);
        this.setState({redirectAddress: menuEditAddress});
        console.log(this.state.redirectAddress);
      }

      onAdd = (product) => {
        // const exist = this.state.cartItems.find((x) => x.id === product.id);
        const exist = false;
        console.log("values between these");
        console.log(this.state.cartItems);
        console.log(exist);
        console.log(product);
        console.log("values between these");

        if (exist) {
          this.cartItems.setState(
            this.state.cartItems.map((x) =>
              x.id === product.id ? { ...this.state.cartItems, qty: product.qty + 1 } : x
            )
          );
        } else {
        //   this.cartItems.setState([...this.state.cartItems, { ...product, qty: 1 }]);this.state.cartItems
        }
      };

      onSubmit = () => {
        const { product, rememberMe } = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('product', rememberMe ? product : product.productname);
        console.log('this is product' +product);
      }
    

    render() {

        const { products, errorMsg } = this.state

        return (
            <div onLoad={() => this.manageMenu(window.location.href.slice(-2)) }>
                <div className={styles.productContainer}>
                    {products.length ?
                        products.map(product => 
                        <div className={styles.product} key={product.id}>
                            <div className={styles.productImage}>
                                <img className={styles.productImage} src={product.productimage} alt="" />
                            </div>
                            <div className={styles.productName}>
                                <h1 >{product.productname}</h1>
                                <h2>{product.productdescription}</h2>
                            </div>
                            <div className={styles.productPrice}>
                                <p>{product.productprice} €</p>
                            </div>
                            <div className={styles.productButtons}>
                                <button id="addItem" onClick={/*this.onAdd(product),*/ this.onSubmit} > +</button>
                                <button id=""> - </button>
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