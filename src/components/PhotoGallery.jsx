import React from 'react';
import '../style/gallery.css';

import img1 from '../images/g1.jpg';
import img2 from '../images/g2.jpg';
import img3 from '../images/g3.jpg';
import img4 from '../images/g4.jpg';
import img5 from '../images/g5.jpg';
import img6 from '../images/g6.jpg';
import img8 from '../images/g8.jpg';
import img9 from '../images/g9.jpg';
import img10 from '../images/g10.jpg';
import img12 from '../images/g12.jpg';
import img7 from '../images/g13.jpg';
import img11 from '../images/g14.jpg';

const images = [
    {
        src:img1,
        title:'Trucking',
        link:'View Details'
    },
    {
        src:img2,
        title:'Boating',
        link:'View Details'
    },
    {
        src:img3,
        title:'Nature Trucking',
        link:'View Details'
    },
    {
        src:img4,
        title:'Trucking',
        link:'View Details'
    },
    {
        src:img5,
        title:'Tour',
        link:'View Details'
    },
    {
        src:img6,
        title:'Sea',
        link:'View Details'
    },
    {
        src:img7,
        title:'Sand',
        link:'View Details'
    },
    {
        src:img8,
        title:'Mountain',
        link:'View Details'
    },
    {
        src:img9,
        title:'TWaterfalls',
        link:'View Details'
    },
    {
        src:img10,
        title:'TTemples',
        link:'View Details'
    },
    {
        src:img11,
        title:'Forest',
        link:'View Details'
    },
    {
        src:img12,
        title:'city visit',
        link:'View Details'
    }
];

const PhotoGallery = () => {
  return (
    <div className='gallery-container'>
        <h2>Gallery</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
           sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
        <div className='grid-gallery'>
        {images.map((image, index) => (
                <div className="grid-item" key={index}>
                    <img src={image.src} alt={`Gallery item ${index + 1}`} />
                    <div className="overlay">
                        <h5 className='text'>{image.title}</h5>
                        <p>{image.link}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default PhotoGallery;
