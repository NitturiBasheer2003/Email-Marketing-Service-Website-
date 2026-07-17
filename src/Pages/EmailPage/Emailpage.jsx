import React from "react";
import "../../Components/Home.css";
import "../../Layout/Layout.css";

import Header from "../../Layout/Header";
import HomeBanner from "../../Components/HomeBanner";
import AboutUs from "../../Components/AboutUs";
import Ourservice from "../../Components/Ourservice";
import WhyChooseUs from "../../Components/Whychooseus";
import OurProcess from "../../Components/Ourprocess";
import Results from "../../Components/Results";
import ClientReviews from "../../Components/ClientReviews";
import PlansPricing from "../../Components/PlansPricing";
import ContactSection from "../../Components/ContactSection";
import CallSection from "../../Components/CallSection";
import Footer from "../../Layout/Footer";

const Emailpage = () => {
  return (
    <>
      <Header />

      <section id="home">
        <HomeBanner />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="services">
        <Ourservice />
      </section>

      <section id="whychooseus">
        <WhyChooseUs />
      </section>

      <section id="process">
        <OurProcess />
      </section>

      <section id="results">
        <Results />
      </section>

      <section id="testimonials">
        <ClientReviews />
      </section>

      <section id="pricing">
        <PlansPricing />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <section id="callsection">
        <CallSection />
      </section>

      <Footer />
    </>
  );
};

export default Emailpage;