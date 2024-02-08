import React from "react";

export default function Contact() {
    return (
        <section id="contact">
      <div>
        <article>
          <h2 className="titles-h2">Schedule Your Appointment Today!</h2>
          <p>Give your pets the love and care they deserve.</p>
          <address>
            <p>
              <strong>Phone:</strong> (555) 123-4567
              <br />
              <strong>Email:</strong> <a href="mailto:info@purrfectpawsgrooming.com">info@purrfectpawsgrooming.com</a>
              <br />
              <strong>Location:</strong> 1234 Pet Paradise Lane, Cityville, State, Zip
            </p>
          </address>
          <img className="cat" src='/assets/images/pexels-anna-shvets-4588069-PhotoRoom.png' alt="A cat having a massage."/>
        </article>
      </div>

      <div>
        <article>
          <h2>Follow us on Social Media</h2>
          <nav>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </nav>
        </article>
      </div>
    </section>
    )
    
}