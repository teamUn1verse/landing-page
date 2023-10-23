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
      photo: "/img/testimonial-photo.png"
    },
    {
      name: "Bojan Pantic",
      position: "Business Analyst, Serbia",
      text: "I have a background in academic research and applied research in business but this is the first time I see research insights in an interview format. I love it!",
      photo: "/img/testimonial-photo2.png"
    },
    {
      name: "Janne Ruponen",
      position: "Entrepreneur, Finland",
      text: "I've listened to a lot of podcasts with entrepreneurs, and the majority of the interviews clearly lack real-life situations. listening to the u-universes interviews, I get answers not only to practical questions like How did you achieve this? but also to questions like Why? It reminds me the case study where I see the whole picture and all the connections.",
      photo: "/img/testimonial-photo3.png"
    },
    {
      name: "Anton Fedosin",
      position: "CEO, Zenmoney, Israel",
      text: "I found it useful to study international experience in an entrepreneurial environment through the interview on the platform. It helped me with my business project a lot.",
      photo: "/img/testimonial-photo4.png"
    },
    // ... add more testimonials
  ];

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Code for handling fadeIn effect:
  const [fadeIn, setFadeIn] = useState(false);

 // Code for handling fadeIn effect:
useEffect(() => {
  setFadeIn(false); // Start by fading out
  const timer = setTimeout(() => {
    setFadeIn(true);  // Then fade in
  }, 100);  // short delay to ensure fade-out happens first
  return () => clearTimeout(timer);
}, [currentTestimonial]);



  return (
    
    <div className="overlap-7">
      <div className="rectangle" />
      <div className="arrow-right" onClick={handleNext}>
        <div className="overlap-8">
          <img className="vector-13" alt="Vector" src="/img/vector-20-1.png" />
        </div>
      </div>
      <div className="arrow-left" onClick={handlePrev}>
        <div className="overlap-8">
          <img className="vector-14" alt="Vector" src="/img/vector-20.png" />
        </div>
      </div>
      <div className={`testimonial-contetnt ${fadeIn ? 'fade-in' : 'fade-out'}`}>
        <img className="testimonial-photo" alt="Testimonial photo" src={testimonials[currentTestimonial].photo} />
        <div className="testimonial-details">
          <div className="testimonial-name">
            <div className="text-wrapper-9">{testimonials[currentTestimonial].name}</div>
          </div>
          <div className="testimonial-position">
            <div className="text-wrapper-10">{testimonials[currentTestimonial].position}</div>
          </div>
          <div className="testimonial-text">
            <p className="text-wrapper-11">{testimonials[currentTestimonial].text}</p>
          </div>
        </div>
      </div>
      <img className="quote" alt="Quote" src="/img/quote-1.png" />
      <img className="quote-2" alt="Quote" src="/img/quote.png" />
      <div className="dots">
        {testimonials.map((_, index) => (
          <div 
            key={index}
            className={index === currentTestimonial ? "ellipse-active" : "ellipse"} 
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
