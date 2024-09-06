import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            {/* FROM AJIO */}
          Online Shopping Redefined at Ajio Bring the fashion revolution to your doorstep with seamless online 
          shopping at Ajio! Discover on-trend styles and curated collections of clothing, footwear, accessories, 
          and more for men, women, and kids from the most coveted designer brands. Discover exclusive looks and 
          revamp your wardrobe from the comfort of your home with statement pieces that reflect your style. 
          At Ajio, you can also find the finest beauty and home decor products, all chosen to inspire you and 
          create a unique and confident look.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;