// Services.js
import React from 'react';
import Service from './Service';

function Services() {
  const servicesData = [
    { title: 'Full Grooming Package', details: ['Bathing', 'Haircut', 'Nail trimming', 'Ear cleaning', 'Teeth brushing', 'etc.'] },
    { title: 'Express Grooming', details: ['Quick touch-ups for a clean look', 'Ideal for busy pet owners'] },
    { title: 'Spa Treatments', details: ['Relaxing massages', 'Aromatherapy baths', 'Pawdicures for extra flair'] },
    // Add more services as needed
  ];

  return (
    <section id="services">
      <h2 className='services-title'>Our Services</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <Service key={index} title={service.title} details={service.details} />
        ))}
      </div>
    </section>
  );
}

export default Services;
