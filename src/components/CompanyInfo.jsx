import React from 'react';
import InfoCard from './InfoCard';
import '../style/home.css';


import travellingCard1 from '../images/g2.jpg';
import travellingCard2 from '../images/g3.jpg';
import travellingCard3 from '../images/g10.jpg';
import travellingCard4 from '../images/g11.jpg';
import travellingCard5 from '../images/g12.jpg';
import travellingCard6 from '../images/g7.jpg';

const CompanyInfo = () => {
  return (
    <div className='companyinfo-section'>
        <div className='head-card'>
        <h3> Eshaa Travel Services</h3>
        <p>Travelling is a gateway to discovering new cultures, places, and experiences. It allows you to step out of your comfort zone and immerse yourself in different environments. Exploring new destinations can broaden your perspective and provide a fresh outlook on life.
             Whether you prefer bustling cities or serene landscapes, each location offers unique attractions and memories.</p>
        </div>
        <div className='info-cards-content '>
            <InfoCard 
            imgSrc={travellingCard1}
            title='HOTEL BOOKING'
            description='Nature and wildlife travel involves exploring natural landscapes and observing wildlife in their natural habitats. This can include safaris, bird watching, camping, and visiting national parks'
            />

            <InfoCard
            imgSrc={travellingCard2}
            title="FLIGHT BOOKING"
            description='Adventure travel involves exploring remote or exotic locations and engaging in physically challenging activities. This can include hiking, trekking, rock climbing, scuba diving, and zip-lining. Adventure travelers seek adrenaline rushes and thrilling experiences.'
            />

            <InfoCard 
            imgSrc={travellingCard3}
            title="TICKET BOOKING"
            description="Solo travel is when an individual travels alone. It offers complete independence and freedom to explore at one's own pace. Solo travelers often find it empowering and a great way to engage with locals and other travelers."
            />
        </div>

        <div className='info-cards-content '>
            <InfoCard
            imgSrc={travellingCard4}
            title='CRUISES BOOKING'
            description='Nature and wildlife travel involves exploring natural landscapes and observing wildlife in their natural habitats. This can include safaris, bird watching, camping, and visiting national parks'
            />

            <InfoCard
            imgSrc={travellingCard5}
            title="RAIL BOOKING"
            description='Adventure travel involves exploring remote or exotic locations and engaging in physically challenging activities. This can include hiking, trekking, rock climbing, scuba diving, and zip-lining. Adventure travelers seek adrenaline rushes and thrilling experiences.'
            />

            <InfoCard 
            imgSrc={travellingCard6}
            title="AMAZING TOUR"
            description="Solo travel is when an individual travels alone. It offers complete independence and freedom to explore at one's own pace. Solo travelers often find it empowering and a great way to engage with locals and other travelers."
            />
        </div>
    </div>
  );
}

export default CompanyInfo;



