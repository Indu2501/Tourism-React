import React from 'react'
import '../style/pagrBanner.css'
export const PageBanner = (props) => {
  return (
    <div className='pb-section'>
        <h2>{props.title}</h2>

    </div>
  )
}
export default PageBanner