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
          cartContent: [],
          orderStatus: "",
          seconds: 0
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


    onChangeDeliveryStatus=()=>{
        this.f=setInterval(this.deliveryStatus,1000);
      }
    deliveryStatus=()=>{
        this.setState({seconds:this.state.seconds+1});
        if(this.state.seconds < 5) {
            this.setState({orderStatus: "Your order has been received!"});
        }
        else if (this.state.seconds >= 5 && this.state.seconds <= 10) {
            this.setState({orderStatus: "Your order is being prepared!"});
        }
        else if (this.state.seconds > 10 && this.state.seconds <= 15) {
            this.setState({orderStatus: "Your order is on it's way!"});
        }
        else if (this.state.seconds > 15 && this.state.seconds <= 20) {
            this.setState({orderStatus: "Your order has been delivered! Thank you for your order!"});
        }
        else {
            this.setState({orderStatus: ""});
            this.onResetDeliveryStatus();
        }
     }
     onResetDeliveryStatus=()=>{
         clearInterval(this.f);
         this.setState({seconds:0})
        //  this.setState({cartContent: []})
     }



    onStatusChange = () => {
        if(this.state.seconds < 20) {
            this.setState({orderStatus: "Your order has been received!"});
        }
        else if (this.state.seconds > 21) {
            this.setState({orderStatus: "Your order is being prepared!"});
        }
        else if (this.state.seconds > 41) {
            this.setState({orderStatus: "Your order is on it's way!"});
        }
        else {
            this.setState({orderStatus: "Your order has been delivered! Thank you for your order!"})
        }
    }

    render() {

        const { cartContent } = this.state

        const subCost = parseFloat((cartContent.reduce((subPrice, cartContent) =>
        subPrice + ((cartContent.cartitemprice)*(cartContent.cartitemamount)), 0)).toFixed(2))

        const vatCost = (0.24 * subCost).toFixed(2)
        const deliveryCost = parseFloat((subCost*0.1).toFixed(2))
        const totalCost = (subCost + deliveryCost).toFixed(2)

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
                        <button id='btn' onClick={this.onChangeDeliveryStatus}>Confirm Order</button>
                    </div>
                </div>
                <div className={ styles.rightSide }>
                
                    <div id="orderPrepared" className={ styles.orderStatus }>
                        <h1>{ this.state.orderStatus }</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShoppingCartClass;