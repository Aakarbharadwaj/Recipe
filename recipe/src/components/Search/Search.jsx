import React from 'react'
import './Search.css'
const Search = ({ title }) => {
    return (
        <>
            <div className='search' >

                <input type="text" placeholder={title} />
                <button>SEARCH</button>
            </div>
        </>
    )
}

export default Search