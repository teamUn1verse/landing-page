import React from "react";
import "./style.css";
import { useState } from 'react';
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Testimonial from '../../components/Testimonial/Testimonial';
import Modal from '../../components/Modal/Modal';
import CTA from '../../components/CTA/CTA';


export const Desktop = () => {
  const handleSubmit = () => {
    alert("rock-n-roll here Janne");
  };

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      name: "Irene Buller",
      position: "Senior Consultant, EY, Switzerland",
      text: "...",
      photo: "/img/testimonial-photo.png"
    },
    {
      name: "Ja R",
      position: "Senior Consultant, EY, Switzerland",
      text: "...",
      photo: "/img/testimonial-photo.png"
    },
    // ... add more testimonials
  ];

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const [activeModal, setActiveModal] = useState(null);


  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap">
          <div className="ellipse" />
          <div className="what-section">
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
                      opportunities are made by yourself, not found
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
              are empathic in-depth interviews with&nbsp;&nbsp;entrepreneurs
            </p>
          </div>
        </div>
        <div className="footer-frame">
          <p className="copyrights">© U-universe. All Rights Reserved.</p>
          <a
            className="privacy"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Privacy Policy
          </a>
          <div className="footer-menu" id="contact">
            <div className="frame-2">
              {/* <a className="menu-item">About Us</a> */}
              {/* <a href="#reviews" className="menu-item">Reviews</a> */}
              {/* <a href="#podcast" className="menu-item">Podcast</a> */}
              {/* <a href="#categories" className="menu-item">Categories</a> */}
              <div className="contact-section">
                <a className="menu-item">Contact</a>
                <a href="mailto:example@email.com" className="email-link">example@email.com</a>
                <div className="social-media-links">
                  <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  {/* ... other social media links ... */}
              </div>
            </div>
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
                <div className="overlap-group-2">
                  <img
                    className="vector-3"
                    alt="Vector"
                    src="/img/vector-11.png"
                  />
                  <img
                    className="vector-4"
                    alt="Vector"
                    src="/img/vector-10.png"
                  />
                  <div className="overlap-3">
                    <img
                      className="vector-5"
                      alt="Vector"
                      src="/img/vector-5.png"
                    />
                    <img
                      className="vector-6"
                      alt="Vector"
                      src="/img/vector-8.png"
                    />
                    <img
                      className="vector-7"
                      alt="Vector"
                      src="/img/vector-7.png"
                    />
                    <img
                      className="vector-8"
                      alt="Vector"
                      src="/img/vector-6.png"
                    />
                    <img
                      className="vector-5"
                      alt="Vector"
                      src="/img/vector-5.png"
                    />
                    <img
                      className="vector-9"
                      alt="Vector"
                      src="/img/vector-4.png"
                    />
                    <img
                      className="vector-10"
                      alt="Vector"
                      src="/img/vector-3.png"
                    />
                    <img
                      className="vector-11"
                      alt="Vector"
                      src="/img/vector-2.png"
                    />
                    <img
                      className="vector-12"
                      alt="Vector"
                      src="/img/vector-1.png"
                    />
                  </div>
                </div>
                <div className="text-wrapper-6">U-Universe</div>
              </div>
            </div>
          </div>
        </div>

        <div className="subscribe-section" id="subscribe">
          <div className="overlap-4">

            <div className="form">
            <CTA />
{/* 
              <div className="overlap-5">
                <p className="form-title">
                  Subscribe today and get your &#34;Empathy in business
                  communications&#34; guidebook
                </p>
                <div className="label">Select an option</div>
                <div className="radio-group">
                  <div className="col">
                    <div className="radio-input">
                      <div className="text-wrapper-7">
                        Entrepreneurs effectuators
                      </div>
                      <div className="ellipse-7" />
                    </div>
                    <div className="radio-input-2">
                      <div className="text-wrapper-7">
                        Entrepreneurship researchers
                      </div>
                      <div className="div-2">
                        <div className="ellipse-8" />
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="radio-input-3">
                      <div className="text-wrapper-8">Ecosystem designers</div>
                      <div className="div-2" />
                    </div>
                    <div className="radio-input-4">
                      <div className="text-wrapper-8">Serial entrepreneurs</div>
                      <div className="ellipse-7" />
                    </div>
                  </div>
                </div>
                <div className="input">
                  <Input className="input-email" placeholder="Your Email"/>
                </div>
                <Button className="submit-button" onClick={handleSubmit}>
                  Subscribe
                </Button>
              </div> */}
            </div>
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
              <div className="as-wrapper" onClick={() => setActiveModal('effectuators')}>
                  <div className="as">Entrepreneurs Effectuators</div>
                </div>

                <Modal 
                    isVisible={activeModal === 'effectuators'} 
                    onClose={() => setActiveModal(null)}
                >
                    <h3>Entrepreneurs Effectuators</h3>
                    <p>Delve into the world of Entrepreneurs Effectuators, where ideas evolve into tangible businesses. These are the pioneers who leverage uncertainty and turn constraints into innovative solutions. Their hands-on approach, adaptive thinking, and keen insight into market demands make them stand out. Discover their stories, strategies, and the unique effectuation principles that guide their entrepreneurial journey.</p>                
                
                </Modal>

              </div>
            </div>
            <div className="cat-item-2">
            <div className="as-wrapper" onClick={() => setActiveModal('serial')}>
                <div className="as-2">Serial Entrepreneurs</div>
              </div>
              <Modal 
                  isVisible={activeModal === 'serial'} 
                  onClose={() => setActiveModal(null)}
              >
                  <h3>Serial Entrepreneurs</h3>
                  <p>Meet the relentless visionaries who've mastered the art of starting multiple successful ventures. Serial Entrepreneurs are not just about multiple businesses; they're about resilience, adaptability, and a relentless pursuit of innovation. Every failure is a stepping stone, every success a testament to their indomitable spirit. Dive into their multifaceted journeys and glean insights into building, scaling, and transitioning across various industries.</p>

              </Modal>

            </div>
            <div className="cat-item-3">
            <div className="as-wrapper" onClick={() => setActiveModal('researchers')}>
                <div className="as-3">Entrepreneurship Researchers</div>
              </div>
              <Modal 
                  isVisible={activeModal === 'researchers'} 
                  onClose={() => setActiveModal(null)}
              >
                  <h3>Entrepreneurship Researchers</h3>
                  <p>Behind every thriving entrepreneurial ecosystem lies the meticulous work of Entrepreneurship Researchers. These are the individuals who dissect, analyze, and present the intricacies of entrepreneurial phenomena. Their rigorous studies provide budding entrepreneurs with frameworks, theories, and data-driven insights. Explore the latest findings, trends, and academic perspectives that are shaping the future of entrepreneurship.</p>
                  
              </Modal>

            </div>
            <div className="cat-item-4">
            <div className="as-wrapper" onClick={() => setActiveModal('designers')}>
                <div className="as-4">Ecosystem Designers</div>
              </div>
              <Modal 
                  isVisible={activeModal === 'designers'} 
                  onClose={() => setActiveModal(null)}
              >
                  <h3>Ecosystem Designers</h3>
                  <p>Crafting a conducive environment for startups and innovators is no small feat. Ecosystem Designers are the architects behind thriving entrepreneurial landscapes. They cultivate networks, foster collaborations, and design platforms that facilitate growth, innovation, and sustainability. Discover the strategies employed by these visionaries to create ecosystems where ideas flourish and businesses thrive.</p>
                  
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
              <div className="text-wrapper-12">
                Educating with entrepreneurs interviews
              </div>
              <div className="text-wrapper-13">High-quality</div>
              <img
                className="item-icon"
                alt="Item icon"
                src="/img/item-icon-1.png"
              />
            </div>
            <div className="item">
              <p className="text-wrapper-12">
                Creating a future by taking action
              </p>
              <div className="text-wrapper-14">Effectuation</div>
              <img
                className="item-icon"
                alt="Item icon"
                src="/img/item-icon.png"
              />
            </div>
            <div className="item">
              <p className="text-wrapper-12">
                Engaging learning for personal growth
              </p>
              <div className="text-wrapper-15">Hedonic motivation</div>
              <div className="item-icon-2">
                <img className="STEPS" alt="Steps" src="/img/steps-1.png" />
              </div>
            </div>
            <div className="item-2">
              <p className="text-wrapper-16">
                Sharing achievements between business researchers and
                entrepreneurs
              </p>
              <div className="text-wrapper-17">Research</div>
              <div className="item-icon-2">
                <img className="SEARCH" alt="Search" src="/img/search-1.png" />
              </div>
            </div>
          </div>
          <Button 
              className="button-get-started" 
              onClick={() => {
                  document.getElementById('subscribe').scrollIntoView({ behavior: 'smooth' });
              }}
          >
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
            src="/img/podcast-image.png"
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
          <Button 
              className="button-categories" 
              onClick={() => {
                  document.getElementById('categories').scrollIntoView({ behavior: 'smooth' });
              }}
          >
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
            {/* <Button className="button-3">Get Started</Button> */}
            <Button 
                className="button-3" 
                onClick={() => {
                    document.getElementById('subscribe').scrollIntoView({ behavior: 'smooth' });
                }}
            >
                Get Started
            </Button>

          </div>
        </div>
        <div className="navbar">
          {/* <a href="#about-us" className="menu-item">About Us</a> */}
          <a href="#reviews" className="menu-item">Reviews</a>
          <a href="#podcast" className="menu-item">Podcast</a>
          <a href="#categories" className="menu-item">Categories</a>
          <a href="#contact" className="menu-item">Contact</a>
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
  );
};
