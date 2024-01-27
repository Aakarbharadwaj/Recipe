import React from 'react'
import './Card.css'
import foods from '../../utils/food'
import food from './../../utils/food';
const Card = () => {
    return (
        <>
            <div className='card-container'>
                {
                    foods.map(food => (
                        <div className='card'>
                            <img src={food.imageUrl}></img>
                            <div className='para'>
                                <h3>{food.title}</h3>
                                <p>{ }</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Card