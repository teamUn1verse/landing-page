import React from "react";
import "./style.css";

export const Phone = () => {
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
            href="https://policies.google.com/privacy?hl=en-US"
            rel="noopener noreferrer"
            target="_blank"
          >
            Privacy Policy
          </a>
          <img className="hr-line-mobile" alt="Hr line mobile" src="/img/hr-line-mobile.png" />
        </div>
        <div className="form-mobile" id="subscribe-mobile">
          <div className="overlap">
            <div className="group-wrapper">
              <div className="overlap-wrapper">
                <div className="overlap-group">
                  <div className="rectangle" />
                  <p className="tagline">
                    Subscribe today and get your &#34;Empathy in business communications&#34; guidebook
                  </p>
                  <div className="overlap-group-wrapper">
                    <div className="overlap-group-2">
                      <div className="rectangle-2" />
                      <div className="h-tagline">Subscribe to our newsletter</div>
                    </div>
                  </div>
                  <div className="frame-wrapper">
                    <div className="frame">
                      <div className="tagline-2">Subscribe</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img className="woman" alt="Woman" src="/img/woman.png" />
            <img className="man" alt="Man" src="/img/man.png" />
            <div className="select-cat-mobile">
              <div className="group-3">
                <div className="text-wrapper-2">Entrepreneurs effectuators</div>
                <div className="ellipse" />
              </div>
              <div className="group-4">
                <div className="text-wrapper-2">Entrepreneurship researchers</div>
                <div className="div-2">
                  <div className="ellipse-2" />
                </div>
              </div>
              <div className="text-wrapper-3">Select an option</div>
              <div className="group-5">
                <div className="text-wrapper-4">Serial entrepreneurs</div>
                <div className="ellipse" />
              </div>
              <div className="group-6">
                <div className="text-wrapper-4">Ecosystem designers</div>
                <div className="div-2" />
              </div>
            </div>
            <div className="input-mobile" />
            <input className="your-email" />
          </div>
        </div>
        <div className="testimonials-mobile">
          <div className="tagline-3">Subscribers about U-interviews</div>
          <div className="title">
            <div className="overlap-group-3">
              <div className="rectangle-3" />
              <div className="tagline-4">Reviews</div>
            </div>
          </div>
          <div className="overlap-2">
            <div className="rectangle-4" />
            <img className="image" alt="Image" src="/img/image.png" />
            <div className="slide-right">
              <div className="vector-wrapper">
                <img className="vector" alt="Vector" src="/img/vector-20-1.png" />
              </div>
            </div>
            <div className="slide-left">
              <div className="img-wrapper">
                <img className="img" alt="Vector" src="/img/vector-20.png" />
              </div>
            </div>
            <div className="text-wrapper-5">Irene Buller</div>
            <div className="text-wrapper-6">Senior Consultant, EY, Switzerland</div>
            <p className="p">
              I’ve seen so many interviews with entrepreneurs, including on educational platforms, but this is the first
              time I’ve seen this exact effectuation approach. I work in a research environment and I see that the use
              of research findings in interviews adds a special character and makes them truly engaging and really
              useful.
            </p>
            <img className="group-7" alt="Group" src="/img/group-76.png" />
            <img className="group-8" alt="Group" src="/img/group-75.png" />
          </div>
        </div>
        <div className="categories-mobile">
          <button className="button">
            <div className="div-wrapper">
              <div className="frame-2">
                <div className="as">Entrepreneurs Effectuators</div>
              </div>
            </div>
          </button>
          <div className="tagline-5">U-interview categories</div>
          <div className="title-2">
            <div className="overlap-group-4">
              <div className="rectangle-5" />
              <div className="tagline-6">Brochure</div>
            </div>
          </div>
          <button className="button-2">
            <div className="frame-2">
              <div className="as-2">Serial Entrepreneurs</div>
            </div>
          </button>
          <button className="button-3">
            <div className="frame-2">
              <div className="as-3">Entrepreneurship Researchers</div>
            </div>
          </button>
          <button className="button-4">
            <div className="frame-2">
              <div className="as-4">Ecosystem Designers</div>
            </div>
          </button>
          <img className="long-hair-girl" alt="Long hair girl" src="/img/long-hair-girl.png" />
        </div>
        <div className="u-values-section">
          {/* <button className="button-5">
            <div className="frame-2">
              <div className="tagline-7">Get Started</div>
            </div>
          </button> */}
          <Button className="button-5 " href="#subscribe-mobile">
            Get Started
          </Button>
          <p className="text-wrapper-7">
            Sharing achievements between business researchers and entrepreneurs
          </p>
          <div className="text-wrapper-8">Research</div>
          <div className="item-research-mobile">
            <img className="icon-zoom-mobile" alt="Icon zoom mobile" src="/img/icon-zoom-mobile.png" />
          </div>
          <p className="text-wrapper-9">Engaging learning for personal growth</p>
          <div className="text-wrapper-10">Hedonic motivation</div>
          <div className="item-hedonic-mobile">
            <img className="STEPS" alt="Steps" src="/img/steps-1.png" />
          </div>
          <p className="text-wrapper-11">Creating a future by taking action</p>
          <div className="text-wrapper-12">Effectuation</div>
          <img className="item-effect-mobile" alt="Item effect mobile" src="/img/item-effect-mobile.png" />
          <div className="item-hq-mobile">
            <img className="img-hq-mobile" alt="Img hq mobile" src="/img/img-hq-mobile.png" />
            <div className="text-wrapper-13">High-quality</div>
            <div className="text-wrapper-14">Educating with entrepreneurs interviews</div>
          </div>
          <div className="tagline-8">U-values</div>
          <div className="tag">
            <div className="overlap-group-5">
              <div className="rectangle-6" />
              <div className="tagline-9">Values</div>
            </div>
          </div>
        </div>
        <div className="value-section-mobile">
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
        <div className="what-section-mobile">
          <p className="tagline-13">
            are empathic
            <br /> in-depth interviews with&nbsp;&nbsp;entrepreneurs
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
              Focus on effectuators - entrepreneurs who believe that opportunities are made by yourself, not found
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
          <div className="menu">
            <div className="group-15">
              <div className="rectangle-10" />
              <div className="rectangle-11" />
              <div className="rectangle-12" />
            </div>
          </div>
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
