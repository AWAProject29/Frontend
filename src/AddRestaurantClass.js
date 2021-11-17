import React from 'react';
import styles from './components/modules/AddRestaurantClass.module.css';
import { Link } from 'react-router-dom'

class AddRestaurant extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          newRestaurantName: "",
          newAddress: "",
          newRestaurantType: "",
          newPriceLevel: "",
          newOperatingHours: "",
          restaurantDescription: ""
        }
      }
    
      addNewRestaurant = () => {
        this.props.addNewRestaurant(this.state.newRestaurantName, this.state.newAddress, this.state.newRestaurantType, this.state.newPriceLevel, this.state.newOperatingHours, this.state.newRestaurantDescription);
      }

    render() {
        return (
            <div>
                <div className = { styles.container }>
                    <div className = { styles.formContainer }> 
                    <form className = { styles.email }>
                        <label>
                        Restaurant Name:
                        </label>
                        <input type="text" id="name" onChange={ (event) => this.setState({ newRestaurantName: event.target.value }) }/>
                        <label>
                        Address:
                        </label>
                        <input type="text" id="address" onChange={ (event) => this.setState({ newAddress: event.target.value }) }/>
                        <label>
                         Restaurant Type:
                        </label>
                        <input type="text" id="type" onChange={ (event) => this.setState({ newRestaurantType: event.target.value }) }/>
                        <label>
                        Price Level
                        </label>
                        <input type="text" id="name" onChange={ (event) => this.setState({ newPriceLevel: event.target.value }) }/>
                        <label>
                        Operating Hours:
                        </label>
                        <input type="text" id="time" onChange={ (event) => this.setState({ newOperatingHours: event.target.value }) }/>
                        <label>
                        Restaurant Description:
                        </label>
                        <input type="text" id="text" onChange={ (event) => this.setState({ newRestaurantDescription: event.target.value }) }/>
                    </form>
                    </div>
                    <div className = { styles.buttonContainer }>
                        <button onClick={ this.addNewRestaurant } className = { styles.signUpButton }> Create Restaurant
                        </button>
                        <Link to ="/login"><button className = { styles.signUpButton }>Back To Login</button></Link>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default AddRestaurant;
