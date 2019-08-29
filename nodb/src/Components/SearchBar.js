import React from 'react';
import './SearchBar.css'

function SearchBar() {
    return(
        <div id='search-bar-container'>
            <input id='search-bar' placeholder='Lookup by title'/>
        </div>
    )
}

export default SearchBar;