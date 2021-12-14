import React from 'react';
import styles from './modules/Popup.module.css';

export default function Popup(props) {
    return (
        <div className= { styles.popup }>
            <div className= { styles.popupBox }>
            {props.content}
            </div>
        </div>
    )
}