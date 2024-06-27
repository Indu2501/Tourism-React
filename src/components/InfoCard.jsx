import React from 'react'
import '../style/home.css'


const InfoCard = (props) => {
  return (
    <div className='info-cards'>
        <img src={props.imgSrc} alt={props.title} className='image' />
        <span className='icon-card'>
        </span>
        

        <h4 className='title'>{props.title}</h4>
        <p className='desc'>{props.description}</p>


    </div>
  )
}

export default InfoCard