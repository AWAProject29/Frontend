import React from 'react';
import styles from '../components/modules/SignUp.module.css';
import { Link } from 'react-router-dom'

class ManagerSignUp extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          newEmail: "",
          newPassword: "",
          newFirstName: "",
          newLastName: "",
          newManagerAuthentication: ""
        }
    }
      
      addNewManagerAccount = () => {
        this.props.addNewManagerAccount(this.state.newEmail, this.state.newPassword, this.state.newFirstName, this.state.newLastName, this.state.newManagerAuthentication); 
      }

    render() {
        return (
            <div>
                <div className = { styles.container }>
                    <div className = { styles.formContainer }> 
                        <form className = { styles.loginFields }>
                            <label>Email:</label>
                            <input type="text" id="email" placeholder="your@email.com" onChange={ (event) => this.setState({ newEmail: event.target.value }) }/>
                            <label>Password:</label>
                            <input type="password" id="password" onChange={ (event) => this.setState({ newPassword: event.target.value }) }/>
                            <label>First Name:</label>
                            <input type="text" id="name" onChange={ (event) => this.setState({ newFirstName: event.target.value }) }/>
                            <label>Last Name:</label>
                            <input type="text" id="name" onChange={ (event) => this.setState({ newLastName: event.target.value }) }/>
                            <label>Manager Authentication:</label>
                            <input type="text" id="authentication" onChange={ (event) => this.setState({ newManagerAuthentication: event.target.value }) }/>
                        </form>
                    </div>
                    <div className = { styles.buttonContainer }>
                        <Link to="/loginmanager" ><button onClick={ this.addNewManagerAccount }>Create Manager Account</button> </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default ManagerSignUp;
