import React from "react";
const HomeBanner = () => {
  return (
    <div className="HomeBanner-image">
      <div className="HomeBanner-content">
        {/* Left Side Content */}
        <div className="HomeBanner-content-left">
          <div className="HomeBanner-Heading">
            <h1>
              Boost Your Sales with <br /> High-Converting <br />
             <span style={{color:"blue"}}>Email Marketing</span> 
            </h1>
          </div>
          <div className="HomeBanner-SubHeading">
            We help businesses in US & India generate <br/> leads and revenue through
            email automation
          </div>
          <div className="HomeBanner-Actions">
            <button className="Homebutton-primary">
              Get Free Strategy Call
            </button>
            <button className="Homebutton-secondary">
              Start Campaign
            </button>
          </div>        
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;