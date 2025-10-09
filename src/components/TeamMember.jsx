import React, { useEffect, useRef, useState } from "react";
import "./TeamMember.css";
import { members } from "../utils/EmployeeData.js"
function TeamMember() {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);



  // footer animation
  const handleBreak = (e) => {
    const footer = e.currentTarget;
    const lightning = footer.querySelector('.lightning');
    footer.classList.add("break");

    lightning.classList.add("flash");
    setTimeout(() => lightning.classList.remove("flash"), 200);
    setTimeout(() => lightning.classList.add("flash"), 400);
    setTimeout(() => lightning.classList.remove("flash"), 600);

    setTimeout(() => {
      footer.classList.remove("break");
    }, 1500);
  };

  // cube config
  const radius = Math.round(150 / Math.tan(Math.PI / members.length)) + 150;
  const angleStep = 360 / members.length;

  useEffect(() => {
    if (sliderRef.current) {
      const slides = sliderRef.current.children;
      Array.from(slides).forEach((slide, i) => {
        slide.style.transform = `rotateY(${i * angleStep}deg) translateZ(${radius}px)`;
      });
    }
  }, [ angleStep, radius]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % members.length);
  // const prevSlide = () => setCurrent((prev) => (prev - 1 + members.length) % members.length);

  // ✅ Auto Slide Effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // 3 seconds gap
    return () => clearInterval(interval); // cleanup
  }, [members.length]);

  return (
    <div>
      {/* Header */}
      <header className="team-header">
        <div className="header-bg">
          <div className="bg-shape s1" />
          <div className="bg-shape s2" />
          <div className="bg-shape s3" />
          <div className="bg-shape s4" />
        </div>
        <h1>Meet Our Team</h1>
        <p>We are a passionate team building the best laptop-selling website for you!</p>
      </header>

      {/* Mission */}
      <section className="team-mission">
        <h2>Our Mission</h2>
        <p>Providing a seamless and reliable online experience for buying laptops. Secure checkout and excellent support.</p>
      </section>

      {/* Cube Slider */}
      <div className="cube-slider">
        <div
          className="slider"
          ref={sliderRef}
          style={{ transform: `translateZ(-${radius}px) rotateY(${-current * angleStep}deg)` }}
        >
          {members.map((member, i) => (
            <div className="slide" key={i}>
              <div className="card">
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Buttons ab bhi rakh sakte ho backup ke liye */}
        {/* <button className="nav-btn prev" onClick={prevSlide}>◀</button>
        <button className="nav-btn next" onClick={nextSlide}>▶</button> */}
      </div>

      {/* Footer */}
      <footer className="team-footer" onClick={handleBreak}>
        <div className="shard"></div>
        <div className="shard"></div>
        <div className="shard"></div>
        <div className="shard"></div>
        <div className="shard"></div>
        <div className="lightning"></div>
        <div className="footer-content">
          <div className="social-icons">
            <a href="/">W</a>
            <a href="/">O</a>
            <a href="/">R</a>
            <a href="/">K</a>
          </div>
          <p>Want to work with us? <a href="/contact">Contact Us</a></p>
        </div>
      </footer>
    </div>
  );
}

export default TeamMember;
