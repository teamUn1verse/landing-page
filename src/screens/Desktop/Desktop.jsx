import React, { useEffect } from "react";
import "./style.css";
import { useState } from "react";
import Button from "../../components/Button/Button";
import Testimonial from "../../components/Testimonial/Testimonial";
import Modal from "../../components/Modal/Modal";
import CTA from "../../components/CTA/CTA";


export const Desktop = () => {

  useEffect(()=>{
    // dirty fix for iphone (wtf?)
    var uagent = navigator.userAgent.toLowerCase();
    if (uagent.search("iphone") > -1){
      document.getElementsByClassName("phone")[0].style.display="block";
      document.getElementsByClassName("desktop")[0].style.display="none";
    } else {
      console.log(uagent);
    }
  },[])
  
  const handleSubmit = () => {
    alert("rock-n-roll here Janne");
  };

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Irene Buller",
      position: "Senior Consultant, EY, Switzerland",
      text: "...",
      photo: "/img/testimonial-photo.png",
    },
    {
      name: "Ja R",
      position: "Senior Consultant, EY, Switzerland",
      text: "...",
      photo: "/img/testimonial-photo.png",
    },
    // ... add more testimonials
  ];

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="desktop">
      <div className="main-container">
        <div className="overlap">
          <div className="ellipse" />
          <div className="what-section" id="about-us">
            <div className="tag">
              <div className="overlap-group">
                <div className="borders" />
                <div className="tagline">U-interviews</div>
              </div>
            </div>
            <div className="group">
              <div className="overlap-2">
                <img className="vector" alt="Vector" src="/img/vector-21.png" />
                <div className="ellipse-2" />
                <div className="frame">
                  <div className="group-2">
                    <div className="img-wrapper">
                      <img
                        className="magnifiers-human"
                        alt="Magnifiers human"
                        src="/img/magnifiers-human-person-search-1.png"
                      />
                    </div>
                    <p className="text-wrapper">
                      Focus on effectuators - entrepreneurs who believe that
                      opportunities are created by you, not found
                    </p>
                  </div>
                  <div className="group-3">
                    <p className="text-wrapper">
                      Childish non-childish questions in the interviews: who?
                      why? where resources? what?
                    </p>
                    <div className="img-wrapper">
                      <img
                        className="img"
                        alt="Group"
                        src="/img/group-9286.png"
                      />
                    </div>
                  </div>
                  <div className="group-4">
                    <p className="p">
                      U-centered empathic approach with in-depth interviews
                    </p>
                    <div className="group-wrapper">
                      <img
                        className="group-5"
                        alt="Group"
                        src="/img/group.png"
                      />
                    </div>
                  </div>
                  <div className="group-6">
                    <p className="text-wrapper-2">
                      Entrepreneurship learning: interviews are prepared by
                      professional researchers
                    </p>
                    <div className="vector-wrapper">
                      <img
                        className="vector-2"
                        alt="Vector"
                        src="/img/vector.png"
                      />
                    </div>
                  </div>
                  <div className="group-7">
                    <p className="text-wrapper-3">
                      Three engaging formats: video interviews, audio podcasts
                      and text transcripts
                    </p>
                    <div className="NEW-PRODUCT-wrapper">
                      <img
                        className="NEW-PRODUCT"
                        alt="New PRODUCT"
                        src="/img/new-product-1.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="ellipse-3" />
                <div className="ellipse-4" />
                <div className="ellipse-5" />
                <div className="ellipse-6" />
              </div>
            </div>
            <p className="h">
              are in-depth interviews with&nbsp;&nbsp;entrepreneurs
            </p>
          </div>
        </div>
        <div className="footer-frame">
          <p className="copyrights">© U-universe. All Rights Reserved.</p>
          <a
            className="privacy"
            href="/pdf/privacy-policy.pdf?v1-11-23"
            rel="noopener noreferrer"
            target="_blank"
          >
            Privacy Policy
          </a>
          <div className="footer-menu" id="contact">
            <div className="frame-2">
              <a href="#about-us" className="menu-item">
                About Us
              </a>
              <a href="#reviews" className="menu-item">
                Reviews
              </a>
              <a href="#podcast" className="menu-item">
                Podcast
              </a>
              <a href="#categories" className="menu-item">
                Categories
              </a>
              <a href="#contact" className="menu-item">
                Contact
              </a>
            </div>
          </div>
          <img
            className="footer-line"
            alt="Footer line"
            src="/img/footer-line.png"
          />
          <div className="logo">
            <div className="div-wrapper">
              <div className="group-8">

                  <img width="53px" height="53px"
                    src="/img/image-logo.png"
                  />

                <div className="text-wrapper-6">U-Universe</div>
              </div>
            </div>
          </div>
        </div>

        <div className="subscribe-section">
          <div className="overlap-4">
            <CTA />
            <div className="overlap-wrapper">
              <div className="overlap-6">
                <div className="borders-2" />
                <div className="tagline-2">Subscribe to our newsletter</div>
              </div>
            </div>
            <img className="man" alt="Man" src="/img/man.png" />
            <img className="woman" alt="Woman" src="/img/woman.png" />
          </div>
        </div>
        <div className="reviews-section" id="reviews">
          <Testimonial />

          <div className="overlap-group-wrapper">
            <div className="overlap-group-3">
              <div className="borders-3" />
              <div className="tagline-3">Reviews</div>
            </div>
          </div>

          <div className="h-tagline-wrapper">
            <div className="tagline-4">Subscribers about U-interviews</div>
          </div>
        </div>
        <div className="categories-section" id="categories">
          <div className="categories-list">
            <div className="cat-item">
              <div className="frame-wrapper">
                <button
                  className="as-wrapper cat-item-button"
                  onClick={() => setActiveModal("effectuators")}
                >
                  <div className="as">Entrepreneurs Effectuators</div>
                </button>

                <Modal
                  isVisible={activeModal === "effectuators"}
                  onClose={() => setActiveModal(null)}
                >
                  <h3>Entrepreneurs Effectuators</h3>
                  <p>
                    U-interviews with entrepreneurs-effectuators are in-depth interviews with individuals who embody a specific mindset and approach to entrepreneurship. Effectuation is a philosophy and method of thinking that stands in contrast to traditional business planning and forecasting.
                    Effectuators are characterized by their proactive and action-oriented mindset. Instead of relying on predictions and detailed plans, they believe in creating their future by taking practical steps and leveraging the resources available to them. This approach is rooted in the belief that the future is not predetermined but can be shaped through intentional action.
                  </p>
                </Modal>
              </div>
            </div>
            <div className="cat-item-2">
              <button
                className="as-wrapper cat-item-button"
                onClick={() => setActiveModal("serial")}
              >
                <div className="as-2">Serial Entrepreneurs</div>
              </button>
              <Modal
                isVisible={activeModal === "serial"}
                onClose={() => setActiveModal(null)}
              >
                <h3>Serial Entrepreneurs</h3>
                <p>
                  U-interviews with serial entrepreneurs are in-depth interviews with individuals who repeatedly start and manage new businesses, often in diverse industries. Driven by innovation and a passion for creating ventures, they navigate challenges, learn from experiences, and leverage expertise to launch multiple enterprises over their career. 
                </p>
              </Modal>
            </div>
            <div className="cat-item-3">
              <button
                className="as-wrapper cat-item-button"
                onClick={() => setActiveModal("researchers")}
              >
                <div className="as-3">Entrepreneurship Researchers</div>
              </button>
              <Modal
                isVisible={activeModal === "researchers"}
                onClose={() => setActiveModal(null)}
              >
                <h3>Entrepreneurship Researchers</h3>
                <p>
                  An entrepreneurship researcher is a professional dedicated to studying various aspects of entrepreneurship. They investigate entrepreneurial behaviours, motivations, and the impact of innovation on business development. Through empirical studies and theoretical frameworks, entrepreneurship researchers contribute valuable insights to help understand, promote, and support entrepreneurial activities.
                </p>
              </Modal>
            </div>
            <div className="cat-item-4">
              <button
                className="as-wrapper cat-item-button"
                onClick={() => setActiveModal("designers")}
              >
                <div className="as-4">Ecosystem Designers</div>
              </button>
              <Modal
                isVisible={activeModal === "designers"}
                onClose={() => setActiveModal(null)}
              >
                <h3>Ecosystem Designers</h3>
                <p>
                  An entrepreneurship ecosystem designer is a professional who creates and optimises environments and organisational structures that foster entrepreneurial activities. They strategically develop networks, resources, and supportive frameworks to cultivate innovation, collaboration, and sustainable growth. These individuals play a crucial role in shaping the conditions that enable new ventures to thrive within a specific ecosystem.
                </p>
              </Modal>
            </div>
          </div>
          <img
            className="long-hair-girl"
            alt="Long hair girl"
            src="/img/long-hair-girl.png"
          />
          <div className="h-wrapper">
            <div className="h-2">U-interview categories</div>
          </div>
          <div className="tag-2">
            <div className="overlap-group-4">
              <div className="borders-4" />
              <div className="tagline-5">Brochure</div>
            </div>
          </div>
        </div>
        <div className="values-section">
          <div className="values-list">
            <div className="item">
              <div className="icon-list-content">
                <h3 className="icon-list-title">Eudaimonic vs Hedonic Well-Being </h3>
                <p className="icon-list-text">Engaging learning for personal growth</p>
              </div>
              <div className="icon-wrapper" style={{"padding":"5px"}}>
                <img alt="icon" src="/img/icons/mental-well-being.svg" width="110px"/>
              </div>
            </div>
            <div className="item">
              <div className="icon-list-content">
                <h3 className="icon-list-title">Empathy vs Egocentrism</h3>
                <p className="icon-list-text">Educating with entrepreneurs in-depth interviews</p>
              </div>
              <div className="icon-wrapper">
                <img alt="icon" src="/img/icons/empathy.svg" width="83px"/>
              </div>
            </div>
            <div className="item">
              <div className="icon-list-content">
                <h3 className="icon-list-title">Effectuation vs Causation</h3>
                <p className="icon-list-text">Creating future by taking action</p>
              </div>
              <div className="icon-wrapper">
                <img alt="icon" src="/img/icons/action.svg" width="83px"/>
              </div>
            </div>
            <div className="item">
              <div className="icon-list-content">
                <h3 className="icon-list-title">Entrepreneurship Research vs No-theory Education</h3>
                <p className="icon-list-text">Sharing achievements between researchers and entrepreneurs</p>
              </div>
              <div className="icon-wrapper">
                <img alt="Search" src="/img/search-1.png" width="83px"/>
              </div>
            </div>
          </div>
          <Button className="button-get-started" href="#subscribe">
            Get Started
          </Button>

          <div className="h-3">
            <div className="tagline-7">U-values</div>
          </div>
          <div className="tag-3">
            <div className="overlap-group-5">
              <div className="rectangle-2" />
              <div className="tagline-8">Values</div>
            </div>
          </div>
        </div>
        <div className="podcast" id="podcast">
          <div className="overlap-9">
            <div className="podcast-list">
              <div className="podcast-item">
                <div className="overlap-group-6">
                  <div className="text-wrapper-18">
                    Watch engaging video interviews
                  </div>
                </div>
              </div>
              <div className="podcast-item">
                <div className="overlap-10">
                  <p className="text-wrapper-19">
                    Study written transcripts of in-depth interviews
                  </p>
                </div>
              </div>
              <div className="podcast-item">
                <div className="listen-to-the-wrapper">
                  <p className="listen-to-the">
                    Listen to the podcasts with entrepreneurship researchers{" "}
                    <br />( get your mini-PhD :)
                  </p>
                </div>
              </div>
            </div>
            <div className="ellipse-14" />
            <div className="ellipse-15" />
            <div className="ellipse-16" />
          </div>
          <img
            className="podcast-image"
            alt="Podcast image"
            src="/img/podcast-image.svg"
          />
          <p className="podcast-description">
            Every day thousands of business research interviews shape the
            science of entrepreneurship
          </p>
          <div className="tag-4">
            <div className="overlap-11">
              <div className="border" />
              <div className="tagline-9">What will you get</div>
            </div>
          </div>
          <p className="h-4">
            Enjoy in-depth U-interviews by joining the open research on
            entrepreneurs psychology
          </p>
        </div>
        <div className="value-for-u-section">
          <div className="tag-5">
            <div className="overlap-group">
              <div className="borders" />
              <div className="tagline-10">Categories</div>
            </div>
          </div>

          <div className="overlap-13">
            <div className="h-5">Value for U</div>
            <div className="values-for-all">
              <div className="value-item">
                <div className="overlap-group-7">
                  <div className="rectangle-3" />
                  <div className="text-wrapper-20">For Entrepreneurs</div>
                  <p className="text-wrapper-21">
                    Engaging in-depth U-interviews
                    <br />
                    &#34;How to live a joyful life in business&#34;
                  </p>
                  <div className="text-wrapper-22">#Popular</div>
                  <img
                    className="element-podcasting"
                    alt="Element podcasting"
                    src="/img/02-podcasting-1.png"
                  />
                </div>
              </div>
              <div className="value-item-2">
                <div className="overlap-group-7">
                  <img
                    className="podcast-community"
                    alt="Podcast community"
                    src="/img/podcast-community-1.png"
                  />
                  <div className="rectangle-3" />
                  <div className="text-wrapper-23">For Intrapreneurs</div>
                  <p className="text-wrapper-21">
                    U-interviews with entrepreneurship researchers for business
                    insights
                  </p>
                  <div className="text-wrapper-22">#Popular</div>
                </div>
              </div>
            </div>
          </div>
          <Button className="button-categories" href="#subscribe">
            View All Categories
          </Button>
        </div>
        <div className="starting-section">
          <div className="overlap-14">
            <div className="overlap-15">
              <div className="borders-5" />
              <div className="h-6">Unlock</div>
              <div className="h-7">entrepreneurial mindsets</div>
            </div>
            <p className="h-8">
              Empathy-based learning of how to spend your lifetime doing
              business you enjoy
            </p>
            <div className="h-9">of the world</div>
            <Button className="button-3" href="#subscribe">
              Get Started
            </Button>
          </div>
        </div>
        <div className="header-desktop">
          <div className="navbar">
            <a href="#about-us" className="menu-item">
              About Us
            </a>
            <a href="#reviews" className="menu-item">
              Reviews
            </a>
            <a href="#podcast" className="menu-item">
              Podcast
            </a>
            <a href="#categories" className="menu-item">
              Categories
            </a>
            <a href="#contact" className="menu-item">
              Contact
            </a>
          </div>
          <div className="image-wrapper">
            <div className="div-wrapper">
              <div className="group-8">
                <img
                  className="logo-image"
                  alt="Logo image"
                  src="/img/logo-image.png"
                />
                <div className="text-wrapper-6">U-Universe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
