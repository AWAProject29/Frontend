import React from 'react';
import styles from './modules/Payment.module.css';
import visa from './images/visa.png';
import paypal from './images/paypal.png';

export default function Payment() {

    const OrderStatus = function (){
        document.getElementById("orderPrepared").style.visibility="visible"
    }

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
                <div className={ styles.orderContainer }>
                    <p>Order from shopping cart here</p>
                </div>
                <div className={ styles.paymentContainer }>
                    <p>Choose payment method</p>
                    <div className={ styles.imageContainer }>
                        <button className={styles.paymentOption}><img src={ visa } alt='' /></button>
                        <button className={styles.paymentOption}><img src={ paypal } alt='' /></button>
                    </div>
                    <button onClick={ OrderStatus }>Confirm Order</button>
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