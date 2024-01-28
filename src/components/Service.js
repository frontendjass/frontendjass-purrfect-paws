import React from "react";

export default function Service({title, details}) {
    return (
        <div className="service-container">
          <h3>{title}</h3>
          <ul>
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      );
    }
