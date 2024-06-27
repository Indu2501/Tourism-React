// src/components/Banner.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style/banner.css';

import banner1 from '../images/tBanner1.jpg';
import banner2 from '../images/tbanner2.jpg';
import banner3 from '../images/tBanner3.jpg';

const Banner = () => {
  return (
    <div className='carousel-wrapper'>
        <Carousel showArrows={true} showStatus={false} showIndicators={true} infiniteLoop={true} autoPlay={true} interval={1500}>
            <div className='img-container'>
                <img src={banner1} alt='img1'/>
                <div className='text-overlay'>
                  <h2 className='carousel-h'>We Make Awesome Tour</h2>
                  <p className='carousel-p'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat labore et dolore magna aliquyam erat.</p>
                  <button className='carousel-btn'>Find Tour</button>
                </div>
            </div>
            
            <div className='img-container'>
                <img src={banner2} alt='img2' />
                <div className='text-overlay'>
                  <h2 className='carousel-h'>We Make Awesome Tour</h2>
                  <p className='carousel-p'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat labore et dolore magna aliquyam erat.</p>
                  <button className='carousel-btn'>Find Tour</button>
                </div>
            </div>
           
            <div className='img-container'>
                <img src={banner3} alt='img3' />
                <div className='text-overlay'>
                  <h2 className='carousel-h'>We Make Awesome Tour</h2>
                  <p className='carousel-p'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat labore et dolore magna aliquyam erat.</p>
                  <button className='carousel-btn'>Find Tour</button>
                </div>
            </div>
        </Carousel>
    </div>
  )
}

export default Banner;
