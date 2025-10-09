import React, { useState, useEffect } from "react";
import "./Rating.css";
import { data } from "../utils/Data";

const Rating = () => {

  const rate_data = data.flatMap((cat) => cat.products);

  const [index, setIndex] = useState(0);
  const cardWidth = 220;


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rate_data.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [rate_data.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % rate_data.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + rate_data.length) % rate_data.length);
  };

  // Render stars from rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) stars.push(<span key={i}>★</span>);
      else if (rating >= i - 0.5) stars.push(<span key={i}>☆</span>);
      else stars.push(<span key={i}>✩</span>);
    }
    return stars;
  };

  return (
    <div className="carousel">
      <h1 className="slider-title">Top Trending Products By Ratings</h1>
      <div
        className="carousel-track"
        style={{
          transform: `translateX(${-index * cardWidth}px)`,
          transition: "transform 0.5s ease", // smooth slide
        }}
      >
        {rate_data.concat(rate_data).map((product, idx) => (
          <div className="card" key={`${product?.productId}-${idx}`}>
            <img src={product?.productImage} alt={product?.productName} />
            <h4>{product?.productName}</h4>
            <div className="stars">{renderStars(product?.productRating)}</div>
          </div>
        ))}
      </div>

      <div className="buttons-rating">
        <button className="prev-btn" style={{ background: "rgba(255, 255, 255, 0.0)", color: "black" }} onClick={prevSlide}>&#10094;</button>
        <button className="next-btn" style={{ background: "rgba(255, 255, 255, 0.0)", color: "black" }} onClick={nextSlide}>&#10095;</button>
      </div>

    </div>
  );
};

export default Rating;
