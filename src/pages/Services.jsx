import React from 'react'
import CompanyInfo from '../components/CompanyInfo'
import PhotoGallery from '../components/PhotoGallery'
import Footer from '../components/Footer'
import PageBanner from '../components/PageBanner'

const Services = () => {
  return (
    <div>
      <PageBanner  title='Services'/>
      <CompanyInfo />
      <PhotoGallery />
      <Footer />
    </div>
  )
}

export default Services