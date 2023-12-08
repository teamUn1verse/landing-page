import React, { useState } from "react";
import "./style.css";
import { MobileMenu } from "../../components/MobileMenu/MobileMenu";
import CTA from "../../components/CTA/CTA";
import Testimonials from "../../components/Testimonial/Testimonial";
import Modal from "../../components/Modal/Modal";

export const Phone = () => {
  const [mobileMenuState, setMobileMenuState] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
    return (
    <div className="phone">
      <div className="div">
        <div className="footer-mobile">
          <div className="footer-text">
            <p className="copyrights">© U-universe. All Rights Reserved.</p>
          </div>
          <div className="footer-logo-mobile">
            <div className="group">
              <div className="group-2">
                <img className="image-logo" alt="Image logo" src="/img/image-logo-1.png" />
                <div className="text-wrapper">U-Universe</div>
              </div>
            </div>
          </div>
          <a
            className="copyrights-2"
            href="/pdf/privacy-policy.pdf?v1-11-23"
            rel="noopener noreferrer"
            target="_blank"
          >
            Privacy Policy
          </a>
          <img className="hr-line-mobile" alt="Hr line mobile" src="/img/hr-line-mobile.png" />
        </div>
        <div className="form-mobile" id="subscribe-mobile">
        <div className="overlap-group-wrapper">
          <div className="overlap-group-2">
            <div className="rectangle-2" />
            <div className="h-tagline">Subscribe to our newsletter</div>
          </div>
        </div>
        <CTA/>
        <img className="woman" alt="Woman" src="/img/woman.png" />
        <img className="man" alt="Man" src="/img/man.png" />
        </div>
        <div className="testimonials-mobile" id="reviews-mobile">

          <div className="tagline-3">Subscribers about U-interviews</div>
          <div className="title">
            <div className="overlap-group-3">
              <div className="rectangle-3" />
              <div className="tagline-4">Reviews</div>
            </div>
          </div>
          <Testimonials/>
        </div>
        <div className="categories-mobile" id="categories-mobile">
          <div className="tagline-5">U-interview categories</div>
          <div className="title-2">
            <div className="overlap-group-4">
              <div className="rectangle-5" />
              <div className="tagline-6">Brochure</div>
            </div>
          </div>
          <Modal
            isVisible={activeModal === "effectuators"}
            onClose={() => setActiveModal(null)} >
            <h3>Entrepreneurs Effectuators</h3>
            <p>
            U-interviews with entrepreneurs-effectuators are in-depth interviews with individuals who embody a specific mindset and approach to entrepreneurship. Effectuation is a philosophy and method of thinking that stands in contrast to traditional business planning and forecasting.
            Effectuators are characterized by their proactive and action-oriented mindset. Instead of relying on predictions and detailed plans, they believe in creating their future by taking practical steps and leveraging the resources available to them. This approach is rooted in the belief that the future is not predetermined but can be shaped through intentional action.
            </p>
          </Modal>
          <Modal
            isVisible={activeModal === "serial"}
            onClose={() => setActiveModal(null)} >
            <h3>Serial Entrepreneurs</h3>
            <p>
            U-interviews with serial entrepreneurs are in-depth interviews with individuals who repeatedly start and manage new businesses, often in diverse industries. Driven by innovation and a passion for creating ventures, they navigate challenges, learn from experiences, and leverage expertise to launch multiple enterprises over their career.
            </p>
          </Modal>
          <Modal
            isVisible={activeModal === "researchers"}
            onClose={() => setActiveModal(null)} >
            <h3>Entrepreneurship Researchers</h3>
            <p>
            An entrepreneurship researcher is a professional dedicated to studying various aspects of entrepreneurship. They investigate entrepreneurial behaviours, motivations, and the impact of innovation on business development. Through empirical studies and theoretical frameworks, entrepreneurship researchers contribute valuable insights to help understand, promote, and support entrepreneurial activities.
            </p>
          </Modal>
          <Modal
            isVisible={activeModal === "designers"}
            onClose={() => setActiveModal(null)} >
            <h3>Ecosystem Designers</h3>
            <p>
            An entrepreneurship ecosystem designer is a professional who creates and optimises environments and organisational structures that foster entrepreneurial activities. They strategically develop networks, resources, and supportive frameworks to cultivate innovation, collaboration, and sustainable growth. These individuals play a crucial role in shaping the conditions that enable new ventures to thrive within a specific ecosystem.
            </p>
          </Modal>
          <button className="button" onClick={() => setActiveModal("effectuators")}>
            <div className="div-wrapper">
              <div className="frame-2">
                <div className="as">Entrepreneurs Effectuators</div>
              </div>
            </div>
          </button>
          <button className="button-2" onClick={() => setActiveModal("serial")}>
            <div className="frame-2">
              <div className="as-2">Serial Entrepreneurs</div>
            </div>
          </button>
          <button className="button-3" onClick={() => setActiveModal("researchers")}>
            <div className="frame-2">
              <div className="as-3">Entrepreneurship Researchers</div>
            </div>
          </button>
          <button className="button-4" onClick={() => setActiveModal("designers")}>
            <div className="frame-2">
              <div className="as-4">Ecosystem Designers</div>
            </div>
          </button>
          <img className="long-hair-girl" alt="Long hair girl" src="/img/long-hair-girl.png" />
        </div>
        <div className="u-values-section">
        <div className="tagline-8">U-values</div>
        <div className="tag">
          <div className="overlap-group-5">
            <div className="rectangle-6" />
            <div className="tagline-9">Values</div>
          </div>
        </div>
        <div className="values-list" style={{"display":"block"}}>
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
          <Button className="button-5" href="#subscribe-mobile">
            Get Started
          </Button>
        </div>
        <div className="value-section-mobile" id="value-for-u">
          <div className="title-3">
            <div className="overlap-group-6">
              <div className="rectangle-7" />
              <div className="tagline-10">Categories</div>
            </div>
          </div>
          <div className="tagline-11">Value for U</div>
          <div className="group-9">
            <div className="overlap-3">
              <div className="rectangle-8" />
              <div className="text-wrapper-15">For Entrepreneurs</div>
              <p className="text-wrapper-16">
                Engaging in-depth U-interviews
                <br />
                &#34;How to live a joyful life in business&#34;
              </p>
              <div className="text-wrapper-17">#Popular</div>
              <img className="element-podcasting" alt="Element podcasting" src="/img/02-podcasting-1.png" />
            </div>
          </div>
          <div className="group-10">
            <div className="overlap-3">
              <img className="podcast-community" alt="Podcast community" src="/img/podcast-community-1.png" />
              <div className="rectangle-8" />
              <div className="text-wrapper-18">For Intrapreneurs</div>
              <p className="text-wrapper-16">U-interviews with entrepreneurship researchers for business insights</p>
              <div className="text-wrapper-17">#Popular</div>
            </div>
          </div>
          {/* <button className="button-6">
            <div className="tagline-wrapper">
              <div className="tagline-12">View All Categories</div>
            </div>
          </button> */}
          <Button className="button-6 " href="#subscribe-mobile">
            Get Started
          </Button>
        </div>
        <div className="what-section-mobile" id="about-us-mobile">
          <p className="tagline-13">
            are in-depth interviews with&nbsp;entrepreneurs
          </p>
          <div className="title-4">
            <div className="overlap-group-6">
              <div className="rectangle-7" />
              <div className="tagline-14">U-interviews</div>
            </div>
          </div>
          <div className="element">
            <div className="img-wrapper-2">
              <img
                className="magnifiers-human"
                alt="Magnifiers human"
                src="/img/magnifiers-human-person-search-1.png"
              />
            </div>
            <p className="text-wrapper-19">
              Focus on effectuators - entrepreneurs who believe that opportunities are created by you, not found
            </p>
          </div>
          <div className="element-2">
            <p className="text-wrapper-19">
              Childish non-childish questions in the interviews: who? why? where resources? what?
            </p>
            <div className="img-wrapper-2">
              <img className="group-11" alt="Group" src="/img/group-9286.png" />
            </div>
          </div>
          <div className="element-3">
            <p className="text-wrapper-20">U-centered empathic approach with in-depth interviews</p>
            <div className="group-12">
              <img className="group-13" alt="Group" src="/img/group.png" />
            </div>
          </div>
          <div className="element-4">
            <p className="text-wrapper-21">
              Entrepreneurship learning: interviews are prepared by professional researchers
            </p>
            <div className="group-14">
              <img className="vector-2" alt="Vector" src="/img/vector.png" />
            </div>
          </div>
          <div className="element-5">
            <p className="text-wrapper-22">
              Three engaging formats: video interviews, audio podcasts and text transcripts
            </p>
            <div className="NEW-PRODUCT-wrapper">
              <img className="NEW-PRODUCT" alt="New PRODUCT" src="/img/new-product-1.png" />
            </div>
          </div>
        </div>
        <div className="starting-section">
          <div className="overlap-4">
            {/* <img className="mobile-background" alt="" src="/img/mobile-background-1.png" /> */}
            <img className="vector-3" alt="" src="/img/vector-26.png" />
            <img className="vector-4" alt="" src="/img/vector-27.png" />
            <div className="rectangle-9" />
            <div className="tagline-15">Unlock</div>
            <div className="tagline-16">entrepreneurial mindsets</div>
            <p className="tagline-17">Empathy-based learning of how to spend your lifetime doing business you enjoy</p>
            <div className="tagline-18">of the world</div>
            <Button className="button-7 " href="#subscribe-mobile">
              Get Started
            </Button>
          </div>
        </div>
        <header className="header">
          <MobileMenu onClose={()=>{setMobileMenuState(false)}} isOpened={mobileMenuState}/>
          <button className="menu-icon" onClick={()=>{setMobileMenuState(true)}}>
            <img src="/img/menu-icon.svg" alt="menu-icon" />
          </button>
          <div className="logo">
            <div className="group">
              <div className="group-2">
                <img className="image-logo" alt="Image logo" src="/img/image-logo-1.png" />
                <div className="text-wrapper">U-Universe</div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
