import React from 'react'
import '../style/wcs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wc = (props) => {
  return (
    <div className='wc-card'>
        <span className='wc-icon-card'>
            <FontAwesomeIcon className='wcs-icon' icon={props.icon} />
        </span>
        <h2 className='wc-h'>{props.title}</h2>
        <p>{props.desp}</p>

    </div>
  )
}

export default Wc