// Testimonials.jsx

import React, { useState, useEffect } from 'react'; // Added useEffect
import './styles.scss';  // You might want to extract the styles to a separate file

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Irene Buller",
      position: "Senior Consultant, EY, Switzerland",
      text: "I’ve seen so many interviews with entrepreneurs, including on educational platforms, but this is the first time I’ve seen this exact effectuation approach. I work in a research environment and I see that the use of research findings in interviews adds a special character and makes them truly engaging and really useful.",
      photo: "/img/testimonial-photo" //no file extension here. Asuming both webp abd png!
    },
    {
      name: "Bojan Pantic",
      position: "Business Analyst, Serbia",
      text: "I have a background in academic research and applied research in business but this is the first time I see research insights in an interview format. I love it!",
      photo: "/img/testimonial-photo2" //no file extension here. Asuming both webp abd png!
    },
    {
      name: "Janne Ruponen",
      position: "Entrepreneur, Finland",
      text: "I've listened to a lot of podcasts with entrepreneurs, and the majority of the interviews clearly lack real-life situations. listening to the u-universes interviews, I get answers not only to practical questions like How did you achieve this? but also to questions like Why? It reminds me the case study where I see the whole picture and all the connections.",
      photo: "/img/testimonial-photo3" //no file extension here. Asuming both webp abd png!
    },
    {
      name: "Anton Fedosin",
      position: "CEO, Zenmoney, Israel",
      text: "I found it useful to study international experience in an entrepreneurial environment through the interview on the platform. It helped me with my business project a lot.",
      photo: "/img/testimonial-photo4" //no file extension here. Asuming both webp abd png!
    },
    // ... add more testimonials
  ];

  const handleNext = () => {
    setAnimatoin("fade-out"); // Start by fading out
    const timer = setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      setAnimatoin("slide-up");  // Then fade in
    }, 100);  // short delay to ensure fade-out happens first
    return () => clearTimeout(timer);
  };

  const handlePrev = () => {
    setAnimatoin("fade-out"); // Start by fading out
    const timer = setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setAnimatoin("slide-down");  // Then fade in
    }, 100);  // short delay to ensure fade-out happens first
    return () => clearTimeout(timer);
  };

  // Code for handling fadeIn effect:
  const [animatoin, setAnimatoin] = useState("");

  return (
    <>
      <div className="overlap-7">
        <div className="testimonial-rectangle" >
          <div className="slide-right" onClick={handleNext}>
            <div className="overlap-8">
              <img className="vector-13" alt="Vector" src="/img/vector-20-1.png" />
            </div>
          </div>
          <div className="slide-left" onClick={handlePrev}>
            <div className="overlap-8">
              <img className="vector-14" alt="Vector" src="/img/vector-20.png" />
            </div>
          </div>
          <div className={`testimonial-contetnt ${animatoin}`} onTouchMove={handleNext}>
            <picture className="testimonial-photo">
              <source type="image/webp" srcset={testimonials[currentTestimonial].photo + ".webp"} />
              <img alt="Testimonial photo" src={testimonials[currentTestimonial].photo + ".png"} />
            </picture>
            <div className="testimonial-details">
              <div className="testimonial-name">
                <div>{testimonials[currentTestimonial].name}</div>
              </div>
              <div className="testimonial-position">
                <div>{testimonials[currentTestimonial].position}</div>
              </div>
              <div className="testimonial-text">
                <p>{testimonials[currentTestimonial].text}</p>
              </div>
            </div>
          </div>
            <img className="quote quote-left" alt="Quote" src="/img/quote.png" />
            <img className="quote quote-right" alt="Quote" src="/img/quote.png" />
          </div>
      </div>
      <div className="dots">
        {testimonials.map((_, index) => (
          <div 
            key={index}
            className={index === currentTestimonial ? "dot-active dot" : "dot"} 
          />
        ))}
      </div>
    </>
  );
};

export default Testimonials;
