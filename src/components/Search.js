import React from 'react';
import styles from './modules/Search.module.css';
import food from './images/food.gif';
import buffet from './images/buffet.png';
import fastfood from './images/fastfood.png';
import fastcasual from './images/fastcasual.png';
import casualdining from './images/casualdining.png';
import finedining from './images/finedining.png';
import axios from 'axios';
import Constants from '../Constants.json'

class Search extends React.Component {
    constructor(props) {
        super(props)   
        this.state = {
          restaurants: []
        };
    }

        componentDidMount() {
            axios.get(Constants.API_ADDRESS + '/restaurant')
                .then(response => {
                    console.log(response);
                    this.setState({ restaurants: response.data })
                })
                .catch(error => {
                    console.log(error);
                    this.setState({errorMsg: 'Error retreiving data'})
                })
        }

        render() {
        const { restaurants, errorMsg } = this.state
        return (
            <div className={styles.pageContainer}>
                <div className={styles.pageBanner}>
                    <h1 className={styles.searchHeader}>Let us help you on your quest for food!</h1>
                    <img className={styles.food} src={food} alt='' />
                </div>
                <div className={styles.searchContainer}>
                    <form action="/" method="get">
                        <input type="text" className={styles.searchBar} placeholder="Search for restaurants" />
                    </form>
                </div>
                <div className={styles.categoryContainer}>
                    <button  className={styles.categories}><img src={buffet} alt='' />Buffet</button>
                    <button  className={styles.categories}><img src={fastfood} alt='' />Fast Food</button>
                    <button  className={styles.categories}><img src={fastcasual} alt='' />Fast Casual</button>
                    <button  className={styles.categories}><img src={casualdining} alt='' />Casual Dining</button>
                    <button  className={styles.categories}><img src={finedining} alt='' />Fine Dining</button>
                </div>
                <div className={styles.restaurantContainer}>
                   List of restaurants
                   {
                       restaurants.length ?
                       restaurants.map(restaurant => <div key={restaurant.id}>{restaurants.restaurantsname}</div>) :
                       null
                   }
                   { errorMsg ? <div>{errorMsg}</div> : null }
                </div>
            </div>
        );
    }
}

export default Search