import React from 'react';
import styles from './components/modules/SignUpClass.module.css';
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

    render() {
        return (
            <div>
                <div className = { styles.container }>
                    <div className = { styles.formContainer }> 
                        <form className = { styles.email }>
                            <label>Email:</label>
                            <input type="text" id="email" placeholder="your@email.com" onChange={ (event) => this.setState({ newEmail: event.target.value }) } value={this.state.newEmail}/>
                            <label>Password:</label>
                            <input type="password" id="pwd" onChange={ (event) => this.setState({ newPassword: event.target.value }) } value={this.state.newPassword}/>
                            <progress id="progress" value="0" max="100">70</progress>
                            <span id="progresslabel"></span>
                            {/* <label>Repeat Password:</label>
                            <input type="password" id="password" onChange={ (event) => this.setState({ newGameName: event.target.value }) }/> */}
                            <label>First Name:</label>
                            <input type="text" id="name" onChange={ (event) => this.setState({ newFirstName: event.target.value }) } value={this.state.newFirstName}/>
                            <label>Last Name:</label>
                            <input type="text" id="name" onChange={ (event) => this.setState({ newLastName: event.target.value }) } value={this.state.newLastName}/>
                            <label>Address</label>
                            <input type="text" id="address" onChange={ (event) => this.setState({ newAddress: event.target.value }) } value={this.state.newAddress}/>
                        </form>
                    </div>
                    <div className = { styles.buttonContainer }>
                        <button id="signUpButton" onClick={ this.addNewCustomerAccount } disabled={!this.state.newEmail | !this.state.newPassword | !this.state.newFirstName | !this.state.newLastName | !this.state.newAddress}
                        className = { styles.signUpButton}> Create Account</button>
                        <Link to ="/login"><button className = { styles.signUpButton }>Back to Login</button></Link>
                        <Link to ="/managersignup"><button className = { styles.signUpButton }>Manager Account</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;