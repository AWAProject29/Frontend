import React from 'react';
import styles from './components/modules/AddRestaurantClass.module.css';
import { Link } from 'react-router-dom';

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
          image: "",
          fileName: "",
          fileContent: ""
        }
      }
    
      addNewRestaurant = () => {
        this.props.addNewRestaurant(this.state.newRestaurantName, this.state.newAddress, this.state.newRestaurantType, this.state.newPriceLevel, this.state.newOperatingHours, this.state.newRestaurantDescription);
      }

      onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
          let reader = new FileReader();
          reader.onload = (e) => {
            this.setState({image: e.target.result});
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
                        <form className = { styles.email }>
                            <label>Restaurant Name:</label>
                            <input type="text" id="restaurantName" onChange={ (event) => this.setState({ newRestaurantName: event.target.value }) } value={this.state.newRestaurantName}/>
                            <label>Address:</label>
                            <input type="text" id="restaurantAddress" onChange={ (event) => this.setState({ newAddress: event.target.value }) } value={this.state.newAddress}/>
                            <label>Restaurant Type:</label>
                            <input type="text" id="restaurantType" onChange={ (event) => this.setState({ newRestaurantType: event.target.value }) } value={this.state.newRestaurantType}/>
                            <label>Price Level</label>
                            <div className= { styles.priceLevel } onChange={ (event) => this.setState({newPriceLevel: event.target.value}) } value={this.state.newPriceLevel}>
                                <input type="radio" name="priceLevel" value = "€" /> €   
                                <input type="radio" name="priceLevel" value = "€€" /> €€
                                <input type="radio" name="priceLevel" value = "€€€" /> €€€
                                <input type="radio" name="priceLevel" value = "€€€€" /> €€€€
                            </div>
                            <label>Operating Hours:</label>
                            <input type="text" id="restaurantOperatingHours" onChange={ (event) => this.setState({ newOperatingHours: event.target.value }) } value={this.state.newOperatingHours}/>
                            <label>Restaurant Description:</label>
                            <input type="text" id="restaurantDescription" onChange={ (event) => this.setState({ newRestaurantDescription: event.target.value }) } value={this.state.newRestaurantDescription}/>
                            <div>
                            Add restaurant photo <input type= "file" onChange={this.onImageChange} className="filetype" id="group_image" />
                            <img id="target" src={this.state.image} width="200" height="100"/>
                        </div>
                        <p color="red">{this.state.fileName}</p>
                        </form>
                    </div>
                    <div className = { styles.buttonContainer }>
                        <button id="addNewRestaurantButton" onClick={ this.addNewRestaurant } disabled={!this.state.newRestaurantName | !this.state.newAddress | !this.state.newRestaurantType | !this.state.newAddress | !this.state.newOperatingHours | !this.state.newRestaurantDescription}
                        className = { styles.signUpButton }>Create Restaurant</button>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default AddRestaurant;
