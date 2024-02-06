import React from "react";

export default function Hero() {
  return (
    <div>
      <section id="hero">
        <h1 className="site-title">Purrfect Paws</h1>
        <h3 className="subtitle">Unleash the Beauty in Your Pet</h3>

        <div className="pet-image-container">
          <img
            className="pet-image"
            src="/assets/images/pexels-anna-shvets-4587979.png"
            alt="A very happy dog."
          />
        </div>
        <p className="hero-text">
          Purrfect Paws Grooming promises superior pampering for your beloved
          pets. Our dedicated groomers strive to ensure your furry friends look
          and feel their best with our top-notch services.
        </p>
      </section>
      <div className="spacer layer1"></div>
    </div>
  );
}
