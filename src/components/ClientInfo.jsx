import React from 'react'
import ClientsSay from './ClientsSay'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../style/clientSay.css'

const ClientInfo = () => {
    const comments=[
        {
            title:'Esha',
            role:'WebDesigner',
            icon:faQuoteLeft,
            comment:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
        },
        {
            title:'Roy',
            role:'App Designer',
            icon:faQuoteLeft,
            comment:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'

        },
        {
            title:'Pritham',
            role:'Graphic Designer',
            icon:faQuoteLeft,
            comment:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'

        },
        {
            title:'Harsha',
            role:'CEO',
            icon:faQuoteLeft,
            comment:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'

        },
    ];

    const slides=[];
    for (let i=0; i<comments.length; i+=2){
        slides.push(comments.slice(i, i +2));
    }
  return (
    <div className='cmt-container'>
        <h2 className='comment-head'>WHAT OUR CLIENT SAY</h2>
        <p className='comment-p'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>

        <Carousel showArrows={true} showStatus={false} showIndicators={true} infiniteLoop={true} autoPlay={true} interval={2500}>
        {slides.map((slide) => (
          <div className="carousel-slide">
            {slide.map((props) => (
              <ClientsSay {...props} />
            ))}
          </div>
        ))}
      </Carousel>
        <div>
           


        </div>
    </div>
  )
}

export default ClientInfo