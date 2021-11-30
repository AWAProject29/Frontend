import React from 'react';
import styles from './modules/MenuEdit.module.css';
import axios from 'axios';
import Constants from '../Constants.json'

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
          findString: ""
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


    render() {


        const { products, errorMsg } = this.state

        return (
            <div>
                <div className = { styles.categoryContainer }> Kebab
                </div>
                <div className = { styles.container }>
                    <div className = { styles.formContainer }> 
                        <div className = { styles.ProductFields }>
                            <div className = { styles.form }>
                                <label>Product Name:</label>
                                <input type="text" id="ProductName" onChange={ (event) => this.setState({ newProductName: event.target.value }) } value={this.state.newProductName}/>
                            </div>
                            <div className = { styles.form }>
                                <label>Product Description:</label>
                                <input type="text" id="ProductDescription" onChange={ (event) => this.setState({ newProductDescription: event.target.value }) } value={this.state.newProductDescription}/>
                                <label>Price:</label>
                                <input type="text" id="ProductPrice" onChange={ (event) => this.setState({newProductPrice: event.target.value}) } value={this.state.newProductPrice}>
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className = { styles.ProductImage }>
                        <p>Add Product photo</p> 
                        <input type= "file" onChange={this.onImageChange} className= { styles.filetype } id="group_image" />
                        <img className = { styles.imageTarget } id="target" src={this.state.image} alt=""/>
                    </div>
                    <div className = { styles.buttonContainer }>
                        <button id="addNewProductButton" onClick={ this.addNewProduct } disabled={!this.state.newProductName | !this.state.newProductPrice | !this.state.newProductDescription}>Add Product</button>
                    </div>

             <div>
                   List of products
                   {
                        products.length ?
                        products.map(product => 
                        <div className = { styles.product } key = {product.id}>
                            <div className = { styles.productImage }>
                                <img className = { styles.productImage } src = {product.productimage} alt = "" />
                            </div>
                            <div className = { styles.productName }>
                                <h1>{product.productname}</h1>
                            </div>
                            <div className = { styles.productDetails }>
                                <p className = { styles.price }>{product.productprice}</p>
                            </div>
                            {/*{product.productdescription}*/}
                        </div>) :
                        null
                   }
                   { errorMsg ? <div>{errorMsg}</div> : null }
                </div> 
            
                </div>
            </div>
        
        )
    }
}

export default AddProduct;