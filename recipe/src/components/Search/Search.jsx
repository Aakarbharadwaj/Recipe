import React from 'react'
import './Search.css'
const Search = () => {
    return (
        <>
            <div className='search' >
                <input type="text" placeholder='Search here for recipe' />
                <button>SEARCH</button>
            </div>
        </>
    )
}

export default Search