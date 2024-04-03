import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Welcome to HealthEase, your comprehensive solution for managing healthcare services efficiently. 
          Whether you're a patient seeking personalized care or an administrator overseeing medical operations, 
          HealthEase offers intuitive tools tailored to your needs.
          <br/>
          <br/>

          What HealthEase Offers:
          <br/>
          <br/>
          Patient-Friendly Interface: Easily book appointments, communicate securely with healthcare providers, 
          and access essential medical information—all in one place.
        

          <br/>
          <br/>
          Why Choose HealthEase:
          <br/>
          <br/>
          User-Centric Design: Our platform prioritizes user experience, with intuitive interfaces designed for 
          seamless navigation and accessibility.
          
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
