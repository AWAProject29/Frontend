import React from 'react';
import axios from 'axios';
import Constants from '../Constants.json';
import MenuRedirect from './MenuRedirect';
import styles from './modules/ShoppingCartClass.module.css';

class ShoppingCartClass extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
          cartContent: []
        }
      }
      

    componentDidMount() {
        axios.get(Constants.API_ADDRESS + '/shoppingcart')
            .then(response => {
                // console.log(response);
                this.setState({ cartContent: response.data })
            })
            .catch(error => {
                console.log(error);
                this.setState({errorMsg: 'Error retrieving data'})
            })
    }

    render() {

        return (
            <div>
                <div>
                    {
                    this.state.cartContent.map(item =>
                        <div>
                            <div>
                                <h1>{item.cartitemname}</h1>
                                <h2>{item.cartitemprice}</h2>
                            </div>
                        </div>
                    )
                    }
                </div>
            </div>
        )
    }
}

export default ShoppingCartClass;