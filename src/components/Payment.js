import React, { useState } from 'react';
import styles from '../components/modules/Payment.module.css';
import Popup from '../components/Popup.js';
import visa from '../components/images/visa.png';
import paypal from '../components/images/paypal.png';

export default function Payment() {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    return (
        <div className={ styles.siteBackground }>
        <div className={styles.leftSide}>
        <div className={styles.address}>
            <label>
                Delivery Address:
            </label>
            <input type="text" name="address" />
            <label>
                City:
            </label>
            <input type="text" name="text" />
            <label>
                Postal Code:
            </label>
            <input type="text" name="number" />
            <label>
                Additional notes for delivery driver:
            </label>
            <textarea className= { styles.addInfo } type="text" name="text" />
        </div>
            <div className={ styles.order }>
            Order from shopping cart here
            </div>
            <div className={ styles.paymentContainer }>
            Choose payment method
                <div className={ styles.imageContainer }>
                    <img className={ styles.image } onClick={ togglePopup } src={ visa } alt='' />
                    { isOpen && <Popup content = { <>
                    <p>Payment method chosen</p>
                    <button onClick={ togglePopup }>Ok</button> </>}
                    handleClose={ togglePopup } />}
                    <img className={ styles.image } onClick={ togglePopup } src={ paypal } alt='' />
                    { isOpen && <Popup content = { <>
                    <p>Payment method chosen</p>
                    <button onClick={ togglePopup }>Ok</button> </>}
                    handleClose={ togglePopup } />}
                </div>
                <button> Confirm order </button>
            </div>
        
        </div>
        
            <div className={ styles.rightSide }>
                <div className={ styles.orderStatus }>
                Order Status here
                </div>
            </div>
        </div>
    )
}