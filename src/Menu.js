import React from 'react'
import styles from './components/modules/Menu.module.css'
import { products } from './components/data/products.js'

export default function Menu() {
    return (
        <div>
            <div className = { styles.restaurantHeader }>
                <p>BIIG IMAGE HERE</p>
                <p>RESTAURANT NAME HERE</p>
                <p>PRICE HERE ---- RESTAURANT TYPE HERE</p>
            </div>
            
            <div className= { styles.categoryContainer }>  Pizza
            </div>
             <div className = { styles.productContainer }>
            {
                products.map((data) => (
                    <div className = { styles.product } key = { data.productID }>
                        <div className = { styles.productImage }>
                            <img className = { styles.productImage } src = { data.image } alt = "logo" />
                        </div>
                        <div className = { styles.productName }>
                            <h1>{ data.name }</h1>
                        </div>
                        <div className = { styles.productDetails}>
                            <p>{ data.type }</p>
                            <p className = { styles.price }>{ data.price }</p>
                        </div>
                    </div>
                ))
            }
            </div>
            <div className = { styles.categoryContainer }> Kebab
            </div>
            <div className = { styles.productContainer }>
            {
                products.map((data) => (
                    <div className = { styles.product } key = { data.productID }>
                        <div className = { styles.productImage }>
                            <img className = { styles.productImage } src = { data.image } alt = "logo" />
                        </div>
                        <div className = { styles.productName }>
                            <h1>{ data.name }</h1>
                        </div>
                        <div className = { styles.productDetails}>
                            <p>{ data.type }</p>
                            <p className = { styles.price }>{ data.price }</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}