import React from 'react';
import Slider from 'react-slick';
import './home.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  // 1️⃣ Major Highlights Data
  const highlights = [
    { title: "Flat 50% Off", desc: "On all fashion stores this weekend!", image: "/images/fashion-offer.jpg" },
    { title: "Electronics Bonanza", desc: "Huge discounts on gadgets!", image: "/images/electronics-sale.jpg" },
    { title: "Food Fiesta", desc: "Get up to 30% off on dining out!", image: "/images/food-offer.jpg" },
  ];

  // 2️⃣ Customer Reviews Data
  const reviews = [
    { name: "Anita Sharma", comment: "Loved the offers! Found a great deal on electronics." },
    { name: "Rahul Patil", comment: "Very useful app to discover hidden shops nearby." },
    { name: "Priya Desai", comment: "LocalOffers is my go-to for every shopping trip!" },
  ];

  // Common slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  return (
    <div className="home-page">
      {/* 1️⃣ Hero / Major Highlights Slider */}
      <section className="hero-slider">
        <Slider {...sliderSettings}>
          {highlights.map((item, index) => (
            <div key={index} className="highlight-slide">
              <img src={item.image} alt={item.title} className="highlight-image" />
              <div className="highlight-text">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* 2️⃣ About Us */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          LocalOffers is a platform dedicated to connecting users with amazing deals and discounts from local shops in Pune.
          We help you save more while supporting small businesses around you.
        </p>
      </section>

      {/* 3️⃣ Customer Reviews Slider */}
      <section className="review-slider-section">
        <h2>What Our Customers Say</h2>
        <Slider {...sliderSettings}>
          {reviews.map((review, index) => (
            <div key={index} className="review-slide">
              <p className="review-comment">"{review.comment}"</p>
              <p className="reviewer-name">— {review.name}</p>
            </div>
          ))}
        </Slider>
      </section>
    </div>
  );
};

export default Home;
