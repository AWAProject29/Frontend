import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MenuRedirect(props) {

    const navigate = useNavigate();

    const chosenRestaurant = () => {
        setTimeout(() => {
        navigate(`${props.redirectAddress}`, { replace: true });
    }, 10);
    }   

    let buttonVisible = <> <button onClick={ chosenRestaurant } hidden>Manage Menu</button> </>
    if (props.managerStatus === true){   
        buttonVisible = <button onClick={ chosenRestaurant }>Manage Menu</button> 
    } 
    

    return (
        <div>
            {buttonVisible}
        </div>
    )
}
