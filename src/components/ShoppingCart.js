import React from 'react'
import styles from './modules/ShoppingCart.module.css';
import { Link } from 'react-router-dom'

export default function ShoppingCart(props) {

    const { cartItems = [], onAdd, onRemove } = props;
    const itemsPrice = 20 /*cartItems.reduce((a, c) => a + c.qty * c.productprice, 0);*/;
    const taxPrice = itemsPrice * 0.24;
    const deliveryPrice = itemsPrice > 30 ? 0 : 10;
    const totalPrice = itemsPrice + taxPrice + deliveryPrice;

    return ( 

      <div className="block col-1">
        <h2>Cart Items</h2>
        <div>
        {console.log(cartItems.length)}
          {cartItems.length === 0 && <div>Cart is empty</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="col-2">{item.name}</div>
              <div className="col-2">
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>{' '}
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
              </div>
  
              <div className="col-2 text-right">
                {item.qty} x ${item.productprice.toFixed(2)}
              </div>
            </div>
          ))}
  
          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Tax Price</div>
                <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Delivery Price</div>
                <div className="col-1 text-right">
                  ${deliveryPrice.toFixed(2)}
                </div>
              </div>
  
              <div className="row">
                <div className="col-2">
                  <strong>Total Price</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>
              </div>
              <hr />
              <div className="row">
              <Link to ="/payment"> <button> Checkout  </button> </Link>
              </div>
            </>
          )}
          
        </div>
      </div> 
    );
  }