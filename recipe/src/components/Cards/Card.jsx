import React from 'react'

const Card = () => {
    return (
        <>
            <div className='card-container'>
                <div className='card'>
                    <img src='https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
                    <div className='para'>
                        <h3>{}</h3>
                        <p>{ }</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card