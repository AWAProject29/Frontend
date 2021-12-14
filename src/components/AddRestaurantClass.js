import React from 'react';
import styles from '../components/modules/AddRestaurantClass.module.css';
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
          newRestaurantDescription: "",
          newRestaurantImage: "",
          fileName: "",
          fileContent: ""
        }
      }
   
      addNewRestaurant = () => {
        this.props.addNewRestaurant(this.state.newRestaurantName, this.state.newAddress, this.state.newRestaurantType, this.state.newPriceLevel, this.state.newOperatingHours, this.state.newRestaurantImage, this.state.newRestaurantDescription);
      }
    
      onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
            let reader = new FileReader();
          reader.onload = (e) => {
            this.setState({newRestaurantImage: e.target.result});
            this.setState({fileName: file.name, fileContent: reader.result});
            console.log(this.state.fileName);
          };
          reader.onerror = () => {
              console.log("File Error", reader.error)
          }
          reader.readAsDataURL(file);
        }
      }

    render() {
        return (
            <div>
                <div className = { styles.container }>
                    <div className = { styles.formContainer }> 
                        <div className = { styles.restaurantFields }>
                            <div className = { styles.form }>
                                <label>Restaurant Name:</label>
                                <input type="text" id="restaurantName" onChange={ (event) => this.setState({ newRestaurantName: event.target.value }) } value={this.state.newRestaurantName}/>
                                <label>Address:</label>
                                <input type="text" id="restaurantAddress" onChange={ (event) => this.setState({ newAddress: event.target.value }) } value={this.state.newAddress}/>
                                <label>Restaurant Type:</label>
                                <select className= { styles.option } id="restaurantType" onChange={ (event) => this.setState({ newRestaurantType: event.target.value }) } value={this.state.newRestaurantType}>
                                <option value="" selected disabled hidden>--Please Select--</option>
                                    <option value = "Buffet">Buffet</option>
                                    <option value = "Fast Food">Fast Food</option>
                                    <option value = "Fast Casual">Fast Casual</option>
                                    <option value = "Casual Dining">Casual Dining</option>
                                    <option value = "Fine Dining">Fine Dining</option>
                                </select>
                            </div>
                            <div className = { styles.form }>
                                <label>Operating Hours:</label>
                                <input type="text" id="restaurantOperatingHours" onChange={ (event) => this.setState({ newOperatingHours: event.target.value }) } value={this.state.newOperatingHours}/>
                                <label>Restaurant Description:</label>
                                <input type="text" id="restaurantDescription" onChange={ (event) => this.setState({ newRestaurantDescription: event.target.value }) } value={this.state.newRestaurantDescription}/>
                                <label>Price Level:</label>
                                <select className= { styles.option } id="restaurantPrice" onChange={ (event) => this.setState({newPriceLevel: event.target.value}) } value={this.state.newPriceLevel}>
                                    <option value="" selected disabled hidden>--Please Select--</option>
                                    <option value = "€">€</option>   
                                    <option value = "€€">€€</option>  
                                    <option value = "€€€">€€€</option>
                                    <option value = "€€€€">€€€€</option>    
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className = { styles.restaurantImage }>
                        <p>Add restaurant photo</p> 
                        <input type= "file" onChange={this.onImageChange} className= { styles.filetype } id="group_image" />
                        <img className = { styles.imageTarget } id="target" src={this.state.newRestaurantImage} alt=""/>
                    </div>
                    <div className = { styles.buttonContainer }>
                        <Link to="/ProtectedManager"><button id="addNewRestaurantButton" onClick={ this.addNewRestaurant } disabled={!this.state.newRestaurantName | !this.state.newAddress | !this.state.newRestaurantType | !this.state.newOperatingHours | !this.state.newPriceLevel | !this.state.newRestaurantDescription}>Create Restaurant</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddRestaurant;
