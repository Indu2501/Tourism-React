import React from 'react'
import '../style/home.css'
import CompanyInfo from '../components/CompanyInfo';
import WcInfo from '../components/WcInfo';
import Banner from '../components/Banner';
import SpecialPackage from '../components/SpecialPackage';
import ClientInfo from '../components/ClientInfo';
import Footer from '../components/Footer';
import ContactDetails from '../components/ContactDetails';
import PhotoGallery from '../components/PhotoGallery';
import AboutDetails from '../components/AboutDetails';

const Home = () => {
  return (
    <div>
        <Banner />
        <AboutDetails />
        <CompanyInfo />
        <SpecialPackage />
        <WcInfo />
        <PhotoGallery />
        <ClientInfo />
        <ContactDetails />
        <Footer />
        
    </div>
  )
}

export default Home