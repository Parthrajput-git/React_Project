import React from "react";
import { companyOffers } from "../utils/ServicesData";
import './WhatWeOffer.css';

function WhatWeOffer() {
  return (
    <div id="what-we-offer-container">
      <h1 id="offer-title">What We Offer</h1>
      <p id="offer-description">
        Discover top laptops from leading brands with exclusive deals, premium
        services, and guaranteed support. Choose your favorite brand and enjoy
        unbeatable offers!
      </p>

      <div id="offers-list">
        {companyOffers.map((company, index) => (
          <div key={index} id={`company-card-${index}`} className="company-card">
            <div id={`company-header-${index}`} className="company-header">
              <h2 id={`company-name-${index}`}>{company.company}</h2>
              <img src={company.image} alt={company.company} width="120px" />
            </div>

            <ul id={`company-offers-${index}`} className="company-offers">
              {company.offers.map((offer, i) => (
                <li key={i} id={`offer-${index}-${i}`}>
                  {offer.text}{" "}
                  {offer.badge && (
                    <span id={`offer-badge-${index}-${i}`}>{offer.badge}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeOffer;
