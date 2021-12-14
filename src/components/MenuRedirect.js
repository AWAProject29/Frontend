import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MenuRedirect(props) {

const navigate = useNavigate();

const chosenRestaurant = () => {
    setTimeout(() => {

      // console.log(props.redirectAddress)
      // console.log(props);

      //if logged in as a manager, it takes you to menu edit page

      //if logged in as a customer, it takes you to restaurant menu

      navigate(`${props.redirectAddress}`, { replace: true });

  }, 10);
}   

    let buttonVisible = <>
    <button onClick={ chosenRestaurant } hidden>Manage Menu</button>
    </>

    if (props.managerStatus === true){
        
       buttonVisible = <button onClick={ chosenRestaurant }>Manage Menu</button>
       
    } 
    

    return (
        <div>
         {buttonVisible}
        </div>
    )
}
