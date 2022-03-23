import React from 'react'
import "./card.css"


const Card = ({data}) => {
  return (
    <div className='containerCard'>
  {data.map((item)=>{
     const {id,title, desc, image} = item
     return(
      
        <div className='card' key={id}>

            <h1>{title}</h1>
            <img src={image} alt="" />
            <div className='desc'>
                <p>{desc}</p>
            </div>
        </div>
     )
  })}
    </div>
  )
}

export default Card