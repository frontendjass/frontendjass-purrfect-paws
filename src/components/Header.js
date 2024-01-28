import React from "react";
import happyDog from "../assets/images/pexels-anna-shvets-4587979.png";

export default function Header() {
  function openPhoneDialer() {
    window.location.href = "tel:5551234567";
  }

  return (
    <header id="header">
      <div className="header-container">
      
        <button className="cta" onClick={openPhoneDialer}>
          <span>Call Us!</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>

        <h1 className="site-title">Purrfect Paws</h1>
        <h3 className="subtitle">Unleash the Beauty in Your Pet</h3>

        <div className="header-content-section">
          <p className="main-text">
            At Purrfect Paws Grooming, we understand that your furry friends
            deserve the best pampering. Our skilled groomers are dedicated to
            providing top-notch services to keep your pets looking and feeling
            their best.
          </p>
          <div className="pet-image-container"></div>
          <img className="pet-image" src={happyDog} alt="A very happy dog." />
        </div>
      </div>
    </header>
  );
}
