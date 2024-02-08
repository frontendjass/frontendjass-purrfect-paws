import React from "react";

function Services() {
  // const servicesData = [
  //   {
  //     title: "Full Grooming Package",
  //     details: [
  //       "Bathing",
  //       "Haircut",
  //       "Nail trimming",
  //       "Ear cleaning",
  //       "Teeth brushing",
  //       "etc.",
  //     ],
  //   },
  //   {
  //     title: "Express Grooming",
  //     details: [
  //       "Quick touch-ups for a clean look",
  //       "Ideal for busy pet owners",
  //     ],
  //   },
  //   {
  //     title: "Spa Treatments",
  //     details: [
  //       "Relaxing massages",
  //       "Aromatherapy baths",
  //       "Pawdicures for extra flair",
  //     ],
  //   },

  // ];

  return (
    <div>
    <section id="services">
      <h2 className="titles-h2">Our Services</h2>
      <div className="services-container">

        <div className="service">

          <div className="service-details">
            <ul>
              <li>Bathing</li>
              <li>Haircut</li>
              <li>Nail trimming</li>
              <li>Ear cleaning</li>
              <li>Teeth brushing</li>
            </ul>
            <a className="call-us" href="call-us">Call Us!</a>
          </div>

          <h3 className="service-title">Full Grooming Package</h3>

        </div>
        <div className="service">

          <div className="service-details">
            <ul>
              <li>Quick touch-ups for a clean look</li>
              <li>Ideal for busy pet owners</li>
            </ul>
            <a className="call-us" href="call-us">Call Us!</a>
          </div>

          <h3 className="service-title">Express Grooming</h3>
          
        </div>
        <div className="service">

          <div className="service-details">
            <ul>
              <li>Relaxing massages</li>
              <li>Aromatherapy baths</li>
              <li>Pawdicures for extra flair</li>
            </ul>
            <a className="call-us" href="call-us">Call Us!</a>
          </div>

          <h3 className="service-title">Full Grooming Package</h3>
          
        </div>
      </div>
      
    </section>
    <div className="spacer layer2"></div>
    </div>
  );
}

export default Services;
