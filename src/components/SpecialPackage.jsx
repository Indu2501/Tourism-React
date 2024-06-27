// src/components/SpecialPackage.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import PackageCard from './PackageCard';
import '../style/PackageCard.css'; // Make sure to create this CSS file

// Import images
import banner1 from '../images/travel1.jpg';
import banner2 from '../images/travel2.jpg';
import banner3 from '../images/travel1.jpg';
import banner4 from '../images/travel2.jpg';

const SpecialPackage = () => {
  const packages = [
    {
      image: banner1,
      title: 'Australia',
      price: 236,
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
      days: '5 DAYS 4 NIGHT',
    },
    {
      image: banner2,
      title: 'Canada',
      price: 250,
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
      days: '6 DAYS 5 NIGHT',
    },
    {
      image: banner3,
      title: 'Japan',
      price: 300,
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
      days: '7 DAYS 6 NIGHT',
    },
    {
      image: banner4,
      title: 'France',
      price: 280,
      description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
      days: '6 DAYS 5 NIGHT',
    },
    {
        image: banner1,
        title: 'Australia',
        price: 236,
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
        days: '5 DAYS 4 NIGHT',
      },
      {
        image: banner2,
        title: 'Canada',
        price: 250,
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.',
        days: '6 DAYS 5 NIGHT',
      },
    // Add more packages as needed
  ];

  // Group packages into slides of 2 items each
  const slides = [];
  for (let i = 0; i < packages.length; i +=3) {
    slides.push(packages.slice(i, i +3));
  }

  return (
    <div className="special-package-section">
      <h3 className="sp-h">Special Package</h3>
      <p className='sp-para'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
      <Carousel showArrows={true} showStatus={false} showIndicators={true} infiniteLoop={true} autoPlay={true} interval={5000}>
        {slides.map((slide) => (
          <div className="carousel-slide">
            {slide.map((props) => (
              <PackageCard {...props} />
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SpecialPackage;
