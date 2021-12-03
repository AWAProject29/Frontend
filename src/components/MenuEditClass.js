import React from 'react';
import styles from './modules/MenuEdit.module.css';
import axios from 'axios';
import Constants from '../Constants.json';


class AddProduct extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
          newProductName: "",
          newProductPrice: "",
          newProductDescription: "",
          image: "",
          fileName: "",
          fileContent: "",
          products: [],
          findString: "",
          cartItems: []
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
    }
    
      addNewProduct = () => {
        this.props.addNewProduct(this.state.newProductName, this.state.newProductPrice, this.state.newProductDescription);
      }

      onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
          let reader = new FileReader();
          reader.onload = (e) => {
            this.setState({image: e.target.result});
            this.setState({fileName: file.name, fileContent: reader.result});
            console.log(this.state.fileName);
          };
          reader.onerror = () => {
              console.log("File Error", reader.error)
          }
          reader.readAsDataURL(file);
        }
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

    render() {

        const { products, errorMsg } = this.state

        return (
            <div>
                <div className={styles.addProduct}>
                    <div className={styles.formContainer}>
                        <div className={styles.ProductFields}>
                            <div className={styles.form}>
                                <label>Product Name:</label>
                                <input type="text" id="ProductName" onChange={(event) => this.setState({ newProductName: event.target.value })} value={this.state.newProductName} />
                            </div>
                            <div className={styles.form}>
                                <label>Product Description:</label>
                                <input type="text" id="ProductDescription" onChange={(event) => this.setState({ newProductDescription: event.target.value })} value={this.state.newProductDescription} />
                            </div>
                            <div className={styles.form}>
                                <label>Price:</label>
                                <input type="text" id="ProductPrice" onChange={(event) => this.setState({ newProductPrice: event.target.value })} value={this.state.newProductPrice} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.addImage}>
                        <p>Add Product photo</p>
                        <input type="file" onChange={this.onImageChange} className={styles.filetype} id="group_image" />
                        <img className={styles.imageTarget} id="target" src={this.state.image} alt="" />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button id="addNewProductButton" onClick={this.addNewProduct} disabled={!this.state.newProductName | !this.state.newProductPrice | !this.state.newProductDescription}>Add Product</button>
                    </div>
                </div>
                <div className={styles.productContainer}>
                    {products.length ?
                        products.map(product => 
                        <div className={styles.product} key={product.id}>
                            <div className={styles.productImage}>
                                <img className={styles.productImage} src={product.productimage} alt="" />
                            </div>
                            <div className={styles.productName}>
                                <h1>{product.productname}</h1>
                                <h2>{product.productdescription}</h2>
                            </div>
                            <div className={styles.productPrice}>
                                <p>{product.productprice} €</p>
                            </div>
                            <div className={styles.productButtons}>
                                <button id="addItem" onClick={this.onAdd(product)} > +</button>
                                <button id=""></button>
                            </div>
                        </div>) :
                        null}
                    {errorMsg ? <div>{errorMsg}</div> : null}
                </div>
            </div> 
            
        
        )
    }
}

export default AddProduct;