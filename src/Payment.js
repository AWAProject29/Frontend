import React from 'react';
import styles from './components/modules/Payment.module.css';

export default function Payment() {
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
        <div className={ styles.payment }>
            Enter payment credentials and fictional card system here
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