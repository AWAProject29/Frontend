import React, { useState } from 'react'
import styles from './modules/MenuEdit.module.css'

export default function MenuEdit(props) {

    const [newProductName, addNewProductName] = useState("");
    const [newProductPrice, addNewProductPrice] = useState("");
    const [newProductCategory, addNewProductCategory] = useState("");
    const [newProductDescription, addNewProductDescription] = useState("");
    const [newProductImage, addNewProductImage] = useState("");
    //const [newProductImage, addProductImage] = useState("");
    
    const addNewProduct = () => {
      props.addNewProduct(newProductName, newProductPrice, newProductCategory, newProductDescription, newProductImage);
    }


    return (
      <div>
        <div>
          <h1>Add new product</h1>
          <div>
            Product Name <input type="text" onChange={ (event) => addNewProductName(event.target.value) } />
          </div>
          <div>
            Price <input type="text" onChange={ (event) => addNewProductPrice(event.target.value) } />
          </div>
          <div>
            Category <input type="text" onChange={ (event) => addNewProductCategory(event.target.value) } />
          </div>
          <div>
            Product Description <input type="text" onChange={ (event) => addNewProductDescription(event.target.value) } />
          </div>
          <div>
            Image <input type= "file" name="sampleFile" onChange={ (event) => addNewProductImage(event.target.value) } />
          </div>
          <button onClick={ addNewProduct }>Add Product</button>
        </div>
    </div>
    )
}