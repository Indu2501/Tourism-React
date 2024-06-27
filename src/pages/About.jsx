import React from 'react'
import ContactDetails from '../components/ContactDetails'
import Footer from '../components/Footer'
import ClientInfo from '../components/ClientInfo'
import PageBanner  from '../components/PageBanner'
import AboutDetails from '../components/AboutDetails'

const About = () => {
  return (
    <div>
      <PageBanner title='About Us' />
      <AboutDetails />
      <ContactDetails />
      <ClientInfo />
      <Footer />
    </div>
  )
}

export default About