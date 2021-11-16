import React from 'react';
import styles from './components/modules/ManagerSignUpClass.module.css';
import { Link } from 'react-router-dom'

class ManagerSignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          newEmail: "",
          newPassword: "",
          newFirstName: "",
          newLastName: "",
          newAddress: ""
        }
      }
    
      addNewManagerAccount = () => {
        this.props.addNewManagerAccount(this.state.newEmail, this.state.newPassword, this.state.newFirstName, this.state.newLastName, this.state.newAddress);
      }

    render() {
        return (
            <div>
                <div className = { styles.container }>
                    <div className = { styles.formContainer }> 
                    <form className = { styles.email }>
                        <label>
                        Email:
                        </label>
                        <input type="text" id="email" onChange={ (event) => this.setState({ newEmail: event.target.value }) }/>
                        <label>
                        Password:
                        </label>
                        <input type="password" id="password" onChange={ (event) => this.setState({ newPassword: event.target.value }) }/>
                        <label>
                        {/* Repeat Password:
                        </label>
                        <input type="password" id="password" onChange={ (event) => this.setState({ newGameName: event.target.value }) }/>
                        <label> */}
                        First Name:
                        </label>
                        <input type="text" id="name" onChange={ (event) => this.setState({ newFirstName: event.target.value }) }/>
                        <label>
                        Last Name:
                        </label>
                        <input type="text" id="name" onChange={ (event) => this.setState({ newLastName: event.target.value }) }/>
                        <label>
                        Address
                        </label>
                        <input type="text" id="address" onChange={ (event) => this.setState({ newAddress: event.target.value }) }/>
                    </form>
                    </div>
                    <div className = { styles.buttonContainer }>
                        <button onClick={ this.addNewManagerAccount } className = { styles.signUpButton}> Create Manager Account
                        </button>
                        <Link to ="/login"><button className = { styles.signUpButton}>Back To Login</button></Link>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default ManagerSignUp;
