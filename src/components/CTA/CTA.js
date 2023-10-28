import React, { useState, useRef } from 'react';
import "./CTA.scss"; 
import Input from "../../components/Input/Input";
import db from "../../firebase";
import { collection, addDoc } from "firebase/firestore"; 


function CTA() {
  const emailRef = useRef();
  const [selections, setSelections] = useState([]);

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelections(prev => [...prev, e.target.value]);
    } else {
      setSelections(prev => prev.filter(item => item !== e.target.value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent default form submission

    const email = emailRef.current.value;  // Get value from ref

    console.log("Email: ", email);

    if (!email) {
      alert("Please enter your email address");
      return;
    }

    const data = {
      email: email,
      ecoDes: selections.includes("Ecosystem designers"),
      entEff: selections.includes("Entrepreneurs effectuators"),
      entRes: selections.includes("Entrepreneurship researchers"),
      serEnt: selections.includes("Serial entrepreneurs"),
    };

    try {
      const docRef = await addDoc(collection(db, "subscriptions-lp1"), data);
      console.log("Document written with ID: ", docRef.id);
      alert("Subscription successful!");
      emailRef.current.value = '';  // Clear email input
      setSelections([]);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Subscription failed. Please try again.");
    }
  };



  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="overlap-5 cta-wrapper">
        <p className="form-title">
          Subscribe today and get your "Empathy in business communications" guidebook
        </p>
        <div className="input">
          <Input 
            className="input-email" 
            placeholder="Your Email"
            // value={}
            ref={emailRef}
          />
        </div>
        <div className="label cta-label"> Select an option</div>
        <div className="radio-group cta-categories">
          <div className="col">
            <label className="radio-input" >
              <input 
                type="checkbox"
                value="Entrepreneurs effectuators"
                onChange={handleCheckboxChange}
              />
              Entrepreneurs effectuators
            </label>
            <label className="radio-input" >
              <input 
                type="checkbox"
                value="Entrepreneurship researchers"
                onChange={handleCheckboxChange}
              />
              Entrepreneurship researchers
            </label>
          </div>
          <div className="col">
            <label className="radio-input" >
              <input 
                type="checkbox"
                value="Ecosystem designers"
                onChange={handleCheckboxChange}
              />
              Ecosystem designers
            </label>
            <label className="radio-input" >
              <input 
                type="checkbox"
                value="Serial entrepreneurs"
                onChange={handleCheckboxChange}
              />
              Serial entrepreneurs
            </label>
          </div>
        </div>
        <button className={`btn submit-button`} type='submit'>
          <div className="btn__text">Subscribe</div>
        </button>
      </div>
    </form>
  );
}

export default CTA;