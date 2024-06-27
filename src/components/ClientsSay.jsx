import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../style/clientSay.css'


export const ClientsSay = (props) => {
  return (
    <div className='cmt-card'>
        <span className='cmt-icon-card'>
            <FontAwesomeIcon className='cmt-icon' icon={props.icon} />
        </span>
        <p>{props.comment}</p>
        <h2 className='cmt-title'>{props.title}</h2>
        <h3 className='cmt-role'>{props.role}</h3>

    </div>
  )
}
export default ClientsSay