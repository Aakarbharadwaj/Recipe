import React from 'react'

const CardDisplay = ({ imageUrl, title }) => {
    return (
        <div className='card'>
            <img src={imageUrl}></img>
            <div className='para'>
                <h3>{title}</h3>
                <p>{ }</p>
            </div>
        </div>
    )
}

export default CardDisplay