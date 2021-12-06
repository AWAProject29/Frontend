import React from 'react';
import styles from './modules/Search.module.css';
// import { restaurants }  from './data/restaurant.js';
import food from './images/food.gif';
import taco from './images/taco.png';
import pizza from './images/pizza.png';
import fastfood from './images/fastfood.png';
import fastcasual from './images/fastcasual.png';
import casualdining from './images/casualdining.png';
import finedining from './images/finedining.png';
import axios from 'axios';
import Constants from '../Constants.json'
import SearchView from './SearchView';



class ProtectedManager extends React.Component {
    constructor(props) {
        super(props)
              
        this.state = {
          restaurants: [],
          restaurantSearchString: "",
          chosenRestaurantType: "",
          userLoggedIn: true
        };
    }

        changeUserStatus(){
            this.state.userLoggedIn = false;
        }

        componentDidMount() {
            axios.get(Constants.API_ADDRESS + '/restaurant')
                .then(response => {
                    console.log(response);
                    this.setState({ restaurants: response.data })
                })
                .catch(error => {
                    console.log(error);
                    this.setState({errorMsg: 'Error retrieving data'})
                })
        }

        onSearchFieldChange = (event) => {

            console.log('Keyboard event');
            console.log(event.target.value);
            this.setState({ restaurantSearchString: event.target.value });
          }

        filteredItems = () => {
            if(this.state.chosenRestaurantType !== "") {
                const itemsArray = this.state.restaurants.filter((restaurant) => restaurant.restaurantname.toLowerCase().includes(this.state.restaurantSearchString.toLowerCase()) && restaurant.restauranttype.toLowerCase().includes(this.state.chosenRestaurantType));
                return itemsArray
            } else {
            const itemsArray = this.state.restaurants.filter((restaurant) => restaurant.restaurantname.toLowerCase().includes(this.state.restaurantSearchString.toLowerCase()));
            return itemsArray
            }
          }


        render() {
        // const { restaurants, errorMsg } = this.state
        return (
            <>
            <div>
                User login status: { this.state.userLoggedIn ? "Logged in as manager" : "Not logged in" }
            </div>
            <div className={styles.pageContainer}>
                <div className={styles.pageBanner}>
                    <h1 className={styles.searchHeader}>Let us help you on your quest for food!</h1>
                    <img className={styles.food} src={food} alt='' />
                </div>
                <div className={styles.searchContainer}>
                    Search <input genre="text" className={styles.searchBar} placeholder="Search for restaurants"  onChange={ this.onSearchFieldChange } value={ this.state.restaurantSearchString } size="27"/> 
                </div>
                <div className={styles.categoryContainer}>
                    <button className={styles.categories} onClick={ () => this.setState({ chosenRestaurantType: "" })}><img src={taco} alt='' />All types</button>
                    <button className={styles.categories} onClick={ () => this.setState({ chosenRestaurantType: "buffet" })}><img src={pizza} alt='' />Buffet</button>
                    <button className={styles.categories} onClick={ () => this.setState({ chosenRestaurantType: "fast food" })}><img src={fastfood} alt='' />Fast Food</button>
                    <button className={styles.categories} onClick={ () => this.setState({ chosenRestaurantType: "fast casual" })}><img src={fastcasual} alt='' />Fast Casual</button>
                    <button className={styles.categories} onClick={ () => this.setState({ chosenRestaurantType: "casual dining" })}><img src={casualdining} alt='' />Casual Dining</button>
                    <button className={styles.categories} onClick={ () => this.setState({ chosenRestaurantType: "fine dining" })}><img src={finedining} alt='' />Fine Dining</button>
                </div>
                <SearchView
                    restaurants={ this.filteredItems() }

                />

            </div>
             {/* <SearchBar items={ this.state.restaurants.filter((item) => item.restaurantname.toLowerCase().includes(this.state.findString.toLowerCase())) }/> */}
            </>
        );
    }

}

export default ProtectedManager;