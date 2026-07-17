import React from 'react'
import "../../Components/Home.css";
import Header from '../../Layout/Header';
import '../../Layout/Layout.css'
import HomeBanner from '../../Components/HomeBanner';
import AboutUs from '../../Components/AboutUs';
import Ourservice from '../../Components/Ourservice';
import WhyChooseUs from '../../Components/Whychooseus';
import OurProcess from '../../Components/Ourprocess';
import Results from '../../Components/Results';
import ClientReviews from '../../Components/ClientReviews';
import PlansPricing from '../../Components/PlansPricing';
import ContactSection from '../../Components/ContactSection';
import CallSection from '../../Components/CallSection';
import Footer from '../../Layout/Footer';
const Emailpage = () => {
  return (
    <div>
      <Header/>
      <HomeBanner/>
      <AboutUs/>
      <Ourservice/>
      <WhyChooseUs/>
      <OurProcess/>
      <Results/>
      <ClientReviews/>
      <PlansPricing/>
      <ContactSection/>
      <CallSection/>
      <Footer/>
    </div>
  )
}

export default Emailpage
