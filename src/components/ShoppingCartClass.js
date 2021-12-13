import React from 'react';
import axios from 'axios';
import Constants from '../Constants.json';
import MenuRedirect from './MenuRedirect';
import styles from './modules/ShoppingCartClass.module.css';
import visa from './images/visa.png';
import paypal from './images/paypal.png';

class ShoppingCartClass extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
          cartContent: []
        }
      }
      

    componentDidMount() {
        axios.get(Constants.API_ADDRESS + '/shoppingcart')
            .then(response => {
                // console.log(response);
                this.setState({ cartContent: response.data })
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
                this.setState({errorMsg: 'Error retrieving data'})
            })
            console.log(this.state.cartContent)
    }

      addItemToOrder = (chosenItem) => {
          this.props.addItemToOrder(chosenItem);
          window.location.reload();
      }

      removeItemFromOrder = (chosenItem) => {
          this.props.removeItemFromOrder(chosenItem);
          window.location.reload();
      }

    /*
    OrderStatus = function (){
        document.getElementById("orderPrepared").style.visibility="visible"
    }
    */
    render() {

        const { cartContent } = this.state
        const subCost = cartContent.reduce((subPrice, cartContent) => subPrice + cartContent.cartitemprice, 0)
        const vatCost = (0.24 * subCost).toFixed(2) 
        const deliveryCost = parseFloat((Math.random() * (15 - 1 )).toFixed(2))
        const totalCost = subCost + deliveryCost
        console.log(typeof(deliveryCost))
        console.log(typeof(subCost))
        

        return (
            <div className={ styles.siteBackground }>
                <div className={styles.leftSide}>
                    <div className={styles.customerInfo}>
                        <label>Delivery Address:</label>
                        <input type="text" name="address" />
                        <label>City:</label>
                        <input type="text" name="text" />
                        <label>Postal Code:</label>
                        <input type="text" name="number" />
                        <label>Additional notes for delivery driver:</label>
                        <textarea className= { styles.addInfo } type="text" name="text" />
                    </div>
                    <div className={ styles.cartContainer }>
                        <h2>Cart</h2>
                    {
                        this.state.cartContent.map(item =>
                            <div className = {styles.cartItem}>
                                <div className={styles.itemName}>
                                    <p>{item.cartitemname}</p>
                                </div>
                                <div className={styles.itemPrice}>
                                    <p>{item.cartitemprice} €</p>
                                </div>
                                <div className={styles.itemQuantity}>
                                    <button id="addToShoppingCart" key={item.idcartitem} onClick={() => this.addItemToOrder(item.idcartitem) }>+</button>
                                    <p>{item.cartitemamount}</p>
                                    <button id="removeFromShoppingCart" key={item.idcartitem} onClick={() => this.removeItemFromOrder(item.idcartitem) }>-</button>
                                </div>
                            </div>
                        )
                        }
                    </div>
                    <div className={styles.priceContainer}>
                        <h2>Total Cost</h2>
                        {
                            <div>
                                <div className={styles.priceLabel}>
                                    <p>Subtotal:</p>
                                    <p>{subCost}  €</p>
                                </div>
                                <div className={styles.priceLabel}>
                                    <p>Delivery:</p>
                                    <p>{deliveryCost} €</p>
                                </div>
                                <div className={styles.priceLabel}>
                                    <p>VAT (Included):</p>
                                    <p>{vatCost}  €</p>
                                </div>
                                <div className={styles.priceLabel}>
                                    <p>Total:</p>
                                    <p>{totalCost} €</p>
                                </div>
                            </div>
                        }
                    </div>
                    <div className={ styles.paymentContainer }>
                        <p>Choose payment method</p>
                        <div className={ styles.imageContainer }>
                            <button className={styles.paymentOption}><img src={ visa } alt='' /></button>
                            <button className={styles.paymentOption}><img src={ paypal } alt='' /></button>
                        </div>
                        <button>Confirm Order</button>
                    </div>
                </div>
                <div className={ styles.rightSide }>
                    <div id="orderPrepared" className={ styles.orderStatus }>
                        <h1>Your order is being prepared!</h1>
                        <img className={ styles.image } src={ visa } alt='' />
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoppingCartClass;