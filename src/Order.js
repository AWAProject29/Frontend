import React from 'react'
import styles from './components/modules/Order.module.css';

export default function Order() {
    return (
        <div className = { styles.orders } >
            <div className = { styles.activeOrders } > 
                <h1> Active Orders </h1>
                <p> Active test </p>
                <p> Active test </p>
                <p> Active test </p>
                <p> Active test </p>
            </div>
            <div className = { styles.oldOrders }> 
                <h1> Old Orders </h1>
                <p> Old test </p>
                <p> Old test </p>
                <p> Old test </p>
            </div>
        </div>
    )
}