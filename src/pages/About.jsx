import React from "react";
import "./About.css";
import TeamMember from "../components/TeamMember";
import WhatWeOffer from "../components/WhatWeOffer"

function About() {
  return (
    <section className="about-section">
      {/* Header Section */}
      <div className="about-header-section">
        <h1 className="about-title">
          About <span className="about-highlight">Laptop Dekho</span>
        </h1>
        <p className="about-subtitle">Your trusted guide to choosing the perfect laptop</p>
      </div>

      {/* Content Section */}
      <div className="about-content-section">
        <div className="about-text-content">
          <h2 className="section-heading">Why Laptop Dekho?</h2>
          <p className="paragraph">
            At <b>Laptop Dekho</b>, we help you discover laptops that suit your needs,
            whether you’re a student, gamer, professional, or creator.
            Our platform offers <b>comparisons, reviews, and buying guides</b>
            so you can make the smartest choice.
          </p>

          <p className="paragraph">
            We aim to simplify the process of finding the right laptop with the
            latest specs, honest reviews, and user-friendly recommendations.
          </p>

          <p className="paragraph">
            With <b>Laptop Dekho</b>, you’re not just buying a laptop —
            you’re choosing the right partner for your work, study, or gaming journey.
          </p>

          <h2 className="section-heading">Our Mission</h2>
          <p className="paragraph">
            We constantly update our content to keep you informed about the latest
            trends in technology. From budget-friendly models to high-end gaming beasts,
            our guides cover it all.
          </p>

          <p className="paragraph">
            Our mission is simple: <b>make laptop shopping stress-free and enjoyable</b>.
            Whether you are buying your first laptop or upgrading to the latest model,
            we are here to guide you every step of the way.
          </p>

          <h2 className="section-heading">What Makes Us Different?</h2>
          <p className="paragraph">
            Our expert team spends hours researching and testing laptops to provide
            unbiased recommendations. You can rely on us to highlight the pros and cons
            clearly, so you can make a confident decision.
          </p>

          <p className="paragraph">
            Beyond just reviews, we also share <b>productivity tips, laptop care guides,
              and performance-boosting hacks</b> to ensure your device lasts longer and
            performs at its best.
          </p>

          {/* New Selling Section */}
          {/* <h2 className="section-heading">Affordable Laptop Store</h2>
          <p className="paragraph">
            At <b>Laptop Dekho</b>, we are not only your guide but also your trusted
            marketplace. We bring laptops from <b>all major companies</b> together on
            one platform and offer them at the <b>most affordable rates</b>.
          </p>
          <p className="paragraph">
            Our goal is to make sure that you get the <b>best deal possible</b> without
            compromising on quality. From budget-friendly options to premium laptops,
            everything is available under one roof at Laptop Dekho.
          </p> */}

          {/* New 24x7 Service Section */}
          <h2 className="section-heading">24×7 Service & Support</h2>
          <p className="paragraph">
            At <b>Laptop Dekho</b>, your satisfaction is our top priority.
            That’s why we provide <b>24×7 service and support</b> to assist you anytime,
            anywhere. Whether it’s a pre-purchase query, technical help, or guidance after buying,
            our dedicated support team is always ready to help.
          </p>
          <p className="paragraph">
            We believe in building long-term trust with our customers, which is why
            you’ll never feel alone in your laptop journey. From product selection to
            after-sales service, <b>we’re with you every step of the way</b>.
          </p>
        </div>

        {/* Image Section */}
        <div className="about-images-section">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
            alt="Laptop showcase"
            className="main-image"
          />
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
            alt="Laptop work setup"
            className="extra-image"
          />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Team discussing laptops"
            className="extra-image"
          />
          <img
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Modern laptop workspace"
            className="extra-image"
          />
        </div>
        <div> <WhatWeOffer/> </div>
        <div>  <TeamMember /></div>
      </div>
    </section>
  );
}

export default About;