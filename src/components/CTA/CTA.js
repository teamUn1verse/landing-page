import React, { useState, useRef } from 'react';
import "../../screens/Desktop/style.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import db from "../../firebase";


function CTA() {
  // const [email, setEmail] = useState("");
  const emailRef = useRef();
  const [selections, setSelections] = useState([]);

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelections(prev => [...prev, e.target.value]);
    } else {
      setSelections(prev => prev.filter(item => item !== e.target.value));
    }
  };

  const handleSubmit = () => {
    console.log("Email: ", email);  // Add this line

    if (!email) {
      alert("Please enter your email address");
      return;
    }
    
    // if (!validateEmail(email)) {
    //   alert("Please enter a valid email address");
    //   return;
    // }
    
    const data = {
      email: email,
      ecoDes: selections.includes("Ecosystem designers"),
      entEff: selections.includes("Entrepreneurs effectuators"),
      entRes: selections.includes("Entrepreneurship researchers"),
      serEnt: selections.includes("Serial entrepreneurs"),
    };
  
    db.collection("subscriptions").add(data)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  
    setEmail('');
    setSelections([]);
  };

  // function validateEmail(email) {
  //   const re = /^(([^<>()[]\.,;:\s@"]+(\.[^<>()[]\.,;:\s@"]+)*)|(".+"))@(([^<>()[]\.,;:\s@"]+\.[^<>()[]\.,;:\s@"]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
  // }
  

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="overlap-5">
        <p className="form-title">
          Subscribe today and get your "Empathy in business communications" guidebook
        </p>
        <div className="label"> Select an option</div>
        <div className="radio-group">
          <div className="col">
            <label className="radio-input" style={{ display: 'flex', alignItems: 'center', fontSize: '20px'}}>
              <input 
                type="checkbox"
                value="Entrepreneurs effectuators"
                onChange={handleCheckboxChange}
                style={{ transform: 'scale(1.7)', marginRight: '10px' }}
              />
              Entrepreneurs effectuators
            </label>
            <label className="radio-input-2" style={{ display: 'flex', alignItems: 'center', fontSize: '20px'}}>
              <input 
                type="checkbox"
                value="Entrepreneurship researchers"
                onChange={handleCheckboxChange}
                style={{ transform: 'scale(1.7)', marginRight: '10px' }}
              />
              Entrepreneurship researchers
            </label>
          </div>
          <div className="col-2">
            <label className="radio-input-3" style={{ display: 'flex', alignItems: 'center', fontSize: '20px'}}>
              <input 
                type="checkbox"
                value="Ecosystem designers"
                onChange={handleCheckboxChange}
                style={{ transform: 'scale(1.7)', marginRight: '10px' }}
              />
              Ecosystem designers
            </label>
            <label className="radio-input-4" style={{ display: 'flex', alignItems: 'center', fontSize: '20px'}}>
              <input 
                type="checkbox"
                value="Serial entrepreneurs"
                onChange={handleCheckboxChange}
                style={{ transform: 'scale(1.7)', marginRight: '10px'}}
              />
              Serial entrepreneurs
            </label>
          </div>
        </div>
        <div className="input">
          <Input 
            className="input-email" 
            placeholder="Your Email"
            // value={}
            ref={emailRef}
          />
        </div>
        <button className={`btn submit-button`} type='submit'>
          <div className="btn__text">Subscribe</div>
        </button>
      </div>
    </form>
  );
}

export default CTA;