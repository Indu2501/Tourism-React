import React from 'react';
import Wc from './Wc';
import '../style/wcs.css'
import { faGlobe, faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const WcInfo = () => {
  return (
    <div className='wcInfo-section'>
        <h2 className='wcInfo-h'>WHY CHOOSE US</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labored.</p>
        <div className='wcInfo-card'>
            <Wc 
            title="HANDPICKED HOTELS"
            desp="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labored."
            icon={faStar}
            />

            <Wc 
            title="WORLD CLASS SERVICE"
            desp="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labored."
            icon={faGlobe}
            />

            <Wc 
            title="BEST PRICE GUARANTEE"
            desp="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labored."
            icon={faThumbsUp}
            />

            
        </div>

    </div>
  )
}

export default WcInfo