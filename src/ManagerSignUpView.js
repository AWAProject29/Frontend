import React, { useState } from 'react'

export default function SignUpView(props) {

    const [newEmail, addNewEmail] = useState("");
    const [newPassword, addNewPassword] = useState("");
    const [newFirstName, addNewFirstName] = useState("");
    const [newLastName, addNewLastName] = useState("");
    const [newManagerAuthentication, addNewManagerAuthentication] = useState("");
  
    const addNewManagerAccount = () => {
      props.addNewManagerAccount(newEmail, newPassword, newFirstName, newLastName, newManagerAuthentication);
    }

    return (
        <div>
            <div>
          <h1>Add New Manager</h1>
          <div>
            Email <input type="email" placeholder="your@email.com" onChange={ (event) => addNewEmail(event.target.value) } />
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
            Manager Authentication <input type="text" onChange={ (event) => addNewManagerAuthentication(event.target.value) } />
          </div>
          <button onClick={ addNewManagerAccount }>Create account</button>
          </div>
        </div>
    )
}