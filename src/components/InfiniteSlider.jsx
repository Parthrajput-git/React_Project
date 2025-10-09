

// import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { laptopdata } from "../utils/LaptopData"; // make sure this path is correct
import "./InfiniteSlider.css"; // Import the CSS file

// Custom Next Arrow
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        display: "block",
        background: "#333",
        color: "#fff",
        borderRadius: "50%",
        padding: "10px",
        position: "absolute",
        right: "-30px",
        top: "40%",
        cursor: "pointer",
        zIndex: 2,
      }}
    >
      ➡
    </div>
  );
}

// Custom Prev Arrow
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        display: "block",
        background: "#333",
        color: "#fff",
        borderRadius: "50%",
        padding: "10px",
        position: "absolute",
        left: "-30px",
        top: "40%",
        cursor: "pointer",
        zIndex: 2,
      }}
    >
      ⬅
    </div>
  );
}

function InfiniteSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const allProducts = laptopdata.flatMap((category) => category.products);

  return (
    <>
      <h1 className="slider-title">Top Trending Products</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {allProducts.map((product, index) => (
            <div key={index} className="slide-wrapper">
              <div className="laptop-card">
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="product-image"
                />
                <p className="laptop-title">{product.productName}</p>

                <div className="rating">
                  <span className="stars">★★★★☆</span>
                  <span>4.5 (120)</span>
                </div>

                <div className="price-section">
                  <span className="price-currency">$</span>
                  <span className="price">999</span>
                </div>

                                   
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default InfiniteSlider;
