// import React from 'react';
// import styles from './modules/MenuEdit.module.css';
// import axios from 'axios';
// import Constants from '../Constants.json';
// import trashcan from './images/trashcan.png';

// class ShowRestaurants extends React.Component {
    
//     constructor(props) {
//         super(props);
//         this.state = {
//           image: ""
//         }
//       }
    
//       addNewImage = () => {
//         this.props.addNewImage(this.state.newProductImage);
//       }

//     render() {
//         const { products, errorMsg } = this.state

//         return (
//             <div>
//                 <div className={styles.addProduct}>
//                     <div className={styles.formContainer}>
//                         <div className={styles.ProductFields}>
//                             <div className={styles.form}>
//                                 <img src="" onChange={(event) => this.setState({ newProductImage: event.target.value })} value={this.state.newProductName} />
//                             </div>
//                     </div>
//                     <div className={styles.addImage}>
//                         <p>Add Product photo</p>
//                         <input type="file" onChange={this.onImageChange} className={styles.filetype} id="group_image" />
//                         <img className={styles.imageTarget} id="target" src={this.state.image} alt="" />
//                     </div>
//                 </div>

//             </div> 
            
                
            
        
//         )
//     }
// }

// export default AddProduct;