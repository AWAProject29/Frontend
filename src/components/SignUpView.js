import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function SignUpView(props) {

    const [newEmail, addNewEmail] = useState("");
    const [newPassword, addNewPassword] = useState("");
    const [newFirstName, addNewFirstName] = useState("");
    const [newLastName, addNewLastName] = useState("");
    const [newAddress, addNewAddress] = useState("");
  
    const navigate = useNavigate();

    const addNewCustomerAccount = () => {
      props.addNewCustomerAccount(newEmail, newPassword, newFirstName, newLastName, newAddress);
      navigate('/login', { replace: true });
    }

    return (
        <div>
            <div>
              <h1>Add new item</h1>
              <div>
                Email <input type="email" onChange={ (event) => addNewEmail(event.target.value) } />
              </div>
              <div>
                Password <input type="password" onChange={ (event) => addNewPassword(event.target.value) } />
              </div>
              <div>
                First name <input type="text" onChange={ (event) => addNewFirstName(event.target.value) } />
              </div>
              <div>
                Last name <input type="text" onChange={ (event) => addNewLastName(event.target.value) } />
              </div>
              <div>
                Address <input type="text" onChange={ (event) => addNewAddress(event.target.value) } />
              </div>
              <button onClick={ addNewCustomerAccount }>Create account</button>
              <Link to ="/managersignup"> <button>Sign up manager</button> </Link>
            </div>
        </div>
    )
}
