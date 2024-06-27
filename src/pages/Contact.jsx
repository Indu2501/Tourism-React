import React from 'react'
import ContactDetails from '../components/ContactDetails'
import Footer from '../components/Footer'
import PageBanner from '../components/PageBanner'

const Contact = () => {
  return (
    <div>
      <PageBanner  title='Contact Us'/>
      <ContactDetails />
      <Footer />
    </div>
  )
}

export default Contact