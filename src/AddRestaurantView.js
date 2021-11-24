import React, { useState } from 'react'

export default function AddRestaurantView(props) {

    const [newRestaurantName, addRestaurantName] = useState("");
    const [newAddress, addAddress] = useState("");
    const [newRestaurantType, addRestaurantType] = useState("");
    const [newPriceLevel, addNewPriceLevel] = useState("");
    //const [newRestaurantImage, addRestaurantImage] = useState("");
    const [newRestaurantDescription, addRestaurantDescription] = useState("");
  
    const addNewRestaurant = () => {
      props.addNewRestaurant(newRestaurantName, newAddress, newRestaurantType, newPriceLevel, newRestaurantDescription);
    }

    return (
        <div>
            <div>
                <h1>Add New Restaurant</h1>
                <div>
                    Restaurant Name <input type="text" onChange={ (event) => addRestaurantName(event.target.value) } />
                </div>
                <div>
                    Address <input type="password" onChange={ (event) => addAddress(event.target.value) } />
                </div>
                <div>
                    Restaurant Type <input type="text" onChange={ (event) => addRestaurantType(event.target.value) } />
                </div>
                <div>
                    Price Level <input type="radio" name="priceLevel" value="€" onChange={ (event) => addNewPriceLevel(event.target.value) } /> €   
                    <input type="radio" name="priceLevel" value="€€" onChange={ (event) => addNewPriceLevel(event.target.value) } /> €€
                    <input type="radio" name="priceLevel" value="€€€" onChange={ (event) => addNewPriceLevel(event.target.value) } /> €€€
                    <input type="radio" name="priceLevel" value="€€€€" onChange={ (event) => addNewPriceLevel(event.target.value) } /> €€€€ 
                </div>
                <div>
                    Restaurant Description <input type="text" onChange={ (event) => addRestaurantDescription(event.target.value) } />
                </div>
                <button onClick={ addNewRestaurant }>Create Restaurant</button>
            </div>
        </div>
    )
}