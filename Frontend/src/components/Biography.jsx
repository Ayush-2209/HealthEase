import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          HealthEase is a revolutionary hospital management system dedicated to simplifying healthcare administration and 
          enhancing patient care. Founded on the belief that technology can streamline healthcare processes and 
          improve overall efficiency, HealthEase strives to provide innovative solutions tailored to the needs of both patients and healthcare professionals.
          </p>
          <p>Our Mission:</p>
          <p>
          At HealthEase, our mission is to empower healthcare providers with advanced tools and technologies, 
          enabling them to deliver high-quality care while optimizing operational workflows. 
          We are committed to creating user-friendly platforms that enhance communication, streamline appointment scheduling, 
          and facilitate seamless management of medical records.
          </p>
          <p>Health is the biggest asset!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
