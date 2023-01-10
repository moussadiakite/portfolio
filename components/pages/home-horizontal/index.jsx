import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import HeaderHorizontal from "../../header/HeaderHorizontal";
import Hero from "../../hero/Hero";
import About from "../../about/About";
import Service from "../../service/Service";
import Portfolio from "../../portfolio/Portfolio";
import Testimonial from "../../testimonial/Testimonial";
import Blog from "../../blog/Blog";
import Contact from "../../Contact";
import Address from "../../Address";
import Map from "../../Map";
import HeaderMobile from "../../header/HeaderMobile";

const PortfolioHorizontal = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.querySelector("body").classList.remove("rtl");
  }, []);

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      document.querySelector("body").classList.add("theme-light");
      document.querySelector("body").classList.remove("theme-dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      document.querySelector("body").classList.add("theme-dark");
      document.querySelector("body").classList.remove("theme-light");
      setIsDark(true);
    }
  };

  return (
    <div className={`home-light ${isDark ? "theme-dark" : ""}`}>
      {/* Start Dark & Light Mode Swicher  */}
      <label
        className={`theme-switcher-label horizontal d-flex  ${
          isDark ? "active" : ""
        }`}
      >
        <input
          type="checkbox"
          onClick={handleLabelClick}
          className="theme-switcher"
        />
        <div className="switch-handle">
          <i className="light-text" title="Switch to Dark">
            <FaMoon />
          </i>
          <i className="dark-text" title="Switch to Light">
            <FaSun />
          </i>
        </div>
      </label>
      {/* End Dark & Light Mode Swicher  */}

      <header className="header-area">
        <div className="header-inner">
          <HeaderMobile />
        </div>
      </header>
      {/* End mobile-header */}

      <HeaderHorizontal />
      {/* End Header */}

      <Hero />
      {/* End Hero */}

      <About />
      {/* End Hero */}

      <div className="portfolio_tm_services" id="service">
        <div className="container">
          <div className="portfolio_tm_title">
            <h3>What I Do</h3>
            <p>
            I create data-driven solutions that deliver tangible value to my clients through the use of the cloud, data pipelines, and industrialization of machine learning models. 
            </p>
          </div>
          {/* End portfolio_tm_title */}
          <Service />
        </div>
      </div>
      {/* End Services */}

      <div className="portfolio_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="portfolio_tm_title">
            <h3>Portfolio</h3>
            <p>
              Incoming ...
            </p>
          </div>
          {/* End portfolio_tm_title */}
          {/*<Portfolio />*/}
        </div>
      </div>
      {/* End Portfolio */}

      <div className="portfolio_tm_testimonials" id="testimonial">
        <div className="container">
          <div className="portfolio_tm_title">
            <h3>Testimonials</h3>
            <p>
              Incoming ...
            </p>
          </div>
          {/* End portfolio_tm_title */}
          <div className="list ">
            <ul>
              {/*<Testimonial />*/}
            </ul>
          </div>
        </div>
      </div>
      {/* End Testimonial */}

      <div className="portfolio_tm_news" id="blog">
        <div className="container">
          <div className="portfolio_tm_title">
            <h3>Blog</h3>
            <p>
               Here, you will find a selection of articles on a variety of topics
               whether you are interested in learning about the latest trends in data engineering or want guidance on how to reach your goals.
            </p>
          </div>
          {/* End portfolio_tm_title */}
          <Blog />
        </div>
      </div>
      {/* End Blog */}

      <div className="portfolio_tm_contact" id="contact">
        <div className="container">
          <div className="portfolio_tm_title">
            <h3>Contact</h3>
            <p>
            Need to get in touch? You'll find all of my contact information below.
            Feel free to give me a call or send me an email. I'm always happy to connect and discuss potential projects or opportunities.
            </p>
          </div>
          <div className="extra_info">
            <Address />
          </div>
          {/* End Address Info */}
          <div className="mainpart">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="title">
                <p>
                  If you are interested in
                  <span> discussing or partnering with me</span>, please let me know.
                </p>
              </div>
              {/* End title */}
              <div className="fields">
                <Contact />
              </div>
              {/* End Contact Form */}
            </div>
            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <Map />
            </div>
            {/* End Map */}
          </div>
        </div>
      </div>
      {/* /CONTACT */}
    </div>
  );
};

export default PortfolioHorizontal;
