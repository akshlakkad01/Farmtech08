import React from 'react';
import { Link } from 'react-router-dom';
import './about.css'; // Ensure this import is correct and necessary

const About = () => {
  return (
    <>
      <section id="header">
        <Link to="/"><img src={logo} className="logo" alt="logo" /></Link>
        <div>
          <ul id="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about" className="active">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart"><i id="lg-bag" className="fa fa-bag-shopping"></i></Link></li>
            <a href="#" id="close"><i className="fa-solid fa-xmark"></i></a>
          </ul>
        </div>
        <div id="mobile">
          <Link to="/cart"><i className="fa fa-bag-shopping"></i></Link>
          <i id="bar" className="fa-solid fa-bars"></i>
        </div>
      </section>

      <section id="page-header" className="about-header">
        <h1>#KnowUs</h1>
      </section>

      <section id="about-head" className="section-p1">
        <img src={aboutImage} alt="About Us" />
        <div>
          <h2>Who We Are?</h2>
          <p>
            At our core, we are dedicated to bridging the gap between the farm and your table, ensuring you 
            have access to the freshest and highest quality produce. Our wide range of offerings includes 
            fruits, vegetables, grains, and other farm-fresh products, all carefully selected to meet your 
            culinary needs. We pride ourselves on our commitment to sustainable farming practices and our 
            unwavering dedication to delivering the best of nature right to your doorstep.
          </p>
          
          <br /><br />

          <marquee bgcolor="#ccc" loop="-1" scrollamount="7" width="100%">
            At our core, we are dedicated to bridging the gap between the farm and your table, ensuring you have access to the freshest and highest quality produce. Our wide range of offerings includes fruits, vegetables, grains, and other farm-fresh products, all carefully selected to meet your culinary needs. We pride ourselves on our commitment to sustainable farming practices and our unwavering dedication to delivering the best of nature right to your doorstep.
          </marquee>
        </div>
      </section>
      
      <section id="feature" className="section-p1">
        {[
          { img: freeShipping, text: "Free Shipping" },
          { img: onlineOrder, text: "Online Order" },
          { img: saveMoney, text: "Save Money" },
          { img: happySell, text: "Happy Sell" },
          { img: support, text: "24/7 Support" },
        ].map((feature, index) => (
          <div key={index} className="fe-box">
            <img src={feature.img} alt={feature.text} />
            <h6>{feature.text}</h6>
          </div>
        ))}
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For New Customers</h4>  
        </div>
        <div className="form">
          <button className="normal">Sign Up</button> 
        </div>
      </section>

      <footer id="footer" className="section-p1">
        {/* Footer content */}
      </footer>
    </>
  );
};

export default About;