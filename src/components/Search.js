import React from 'react';
import styles from './modules/Search.module.css';

export default function Search() {
    return (
        <div className = { styles.pageContainer }>
            <h1 className = {  styles.searchHeader }>Let us help you on your quest for food!</h1>
            <div className = { styles.searchContainer }>
                <form action = "/" method = "get">
                    <input type = "text" className = { styles.searchBar } placeholder = "Search for restaurants"/>
                    <button type = "submit" className = { styles.searchButton }>Search</button>
                </form>
            </div>
        </div>
    )
};