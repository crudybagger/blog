import React from 'react'
import '../stylesheets/Card.css'
function Card({details, selectCard}) {
    const { title, description } = details;
  return (
    <div className='card' onClick={()=>selectCard(details)}>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Card