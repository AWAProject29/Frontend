import React from 'react';
import styles from './components/modules/SignUp.module.css';
import { Link } from 'react-router-dom'

class SignUp extends React.Component {

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
    
      addNewCustomerAccount = () => {
        this.props.addNewCustomerAccount(this.state.newEmail, this.state.newPassword, this.state.newFirstName, this.state.newLastName, this.state.newAddress);
      }

      handleSignupSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(event.target.email.value);
        console.log(event.target.password.value);
        console.log(event.target.firstName.value);
        console.log(event.target.lastName.value);
        console.log(event.target.address.value);
      }

    render() {
        return (
            <div>
                <div className = { styles.container }>
                    <div className = { styles.formContainer }> 
                        <form onSubmit= { this.handleSignupSubmit } className = { styles.loginFields }>
                            <label>Email:</label>
                            <input type="text" id="email" placeholder="your@email.com" onChange={ (event) => this.setState({ newEmail: event.target.value }) } value={this.state.newEmail}/>
                            <label>Password:</label>
                            <input type="password" id="password" onChange={ (event) => this.setState({ newPassword: event.target.value }) } value={this.state.newPassword}/>
                            <progress id="progress" value="0" max="100">70</progress>
                            <span id="progresslabel"></span>
                            {/* <label>Repeat Password:</label>
                            <input type="password" id="password" onChange={ (event) => this.setState({ newGameName: event.target.value }) }/> */}
                            <label>First Name:</label>
                            <input type="text" id="firstName" onChange={ (event) => this.setState({ newFirstName: event.target.value }) } value={this.state.newFirstName}/>
                            <label>Last Name:</label>
                            <input type="text" id="lastName" onChange={ (event) => this.setState({ newLastName: event.target.value }) } value={this.state.newLastName}/>
                            <label>Address</label>
                            <input type="text" id="address" onChange={ (event) => this.setState({ newAddress: event.target.value }) } value={this.state.newAddress}/>
                        
                            <div className = { styles.buttonContainer }>
                                <button type="submit" id="signUpButton" disabled={!this.state.newEmail | !this.state.newPassword | !this.state.newFirstName | !this.state.newLastName | !this.state.newAddress}>Create Account</button>
                                <Link to ="/managersignup"><button>Manager Account</button></Link>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default SignUp;