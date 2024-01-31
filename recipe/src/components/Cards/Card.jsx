import React from 'react'
import './Card.css'
import foods from '../../utils/food'
import CardDisplay from './CardDisplay'
// import food from './../../utils/food';

const Card = ({ foods }) => {
    return (
        <>
            <div className='card-container'>
                {
                    foods.map(food => (
                        <CardDisplay imageUrl={food.imageUrl} title={food.title} />
                    ))
                }
            </div>
        </>
    )
}

export default Card