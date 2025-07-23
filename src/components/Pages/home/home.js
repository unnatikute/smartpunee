import React from "react";
import Slider from "react-slick";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  // 1️⃣ MajorTop Offers Slider Data
  const topOffers = [
    {
      shop: "Trendy Fashions",
      offer: "Buy 1 Get 1 Free on jeans",
      image: "/images/fashion.jpg",
    },
    {
      shop: "TechMart Electronics",
      offer: "₹2000 off on smartphones above ₹15000",
      image: "/images/electronic.jpg",
    },
    {
      shop: "Foodie Point",
      offer: "Flat 30% off on all lunch combos",
      image: "/images/food.jpg",
    },
    {
      shop: "Style Hub",
      offer: "Flat 40% off on Kurtis & Sarees",
      image: "/images/clothing.jpg",
    },
    {
      shop: "Home Essentials",
      offer: "Up to 50% off on kitchen appliances",
      image: "/images/home.jpg",
    },
  ];

  // 2️⃣ Customer Reviews Data
  const reviews = [
    {
      name: "Anita Sharma",
      comment: "Loved the offers! Found a great deal on electronics.",
    },
    {
      name: "Rahul Patil",
      comment: "Very useful app to discover hidden shops nearby.",
    },
    {
      name: "Priya Desai",
      comment: "LocalOffers is my go-to for every shopping trip!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    fade: true,
  };
  const [chatStarted, setChatStarted] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "shopkeeper", text: "Hi! How can I help you today?" },
  ]);

  const handleSend = () => {
    const trimmed = chatInput.trim().toLowerCase();

    if (trimmed) {
      setMessages((prev) => [...prev, { sender: "user", text: chatInput }]);

      // Start chat
      if (!chatStarted && trimmed === "hi") {
        setChatStarted(true);
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              sender: "shopkeeper",
              text: "Welcome! What would you like to know?",
              options: [
                "🛍️ Show me latest offers",
                "📍 Where is your shop located?",
                "⏰ What are your store timings?",
                "🚚 Do you offer delivery?",
                "💳 What payment methods do you accept?",
              ],
            },
          ]);
        }, 800);
      }
      // Stop chat
      else if (chatStarted && (trimmed === "stop" || trimmed === "exit")) {
        setChatStarted(false);
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              sender: "shopkeeper",
              text: "Thanks for chatting. Have a great day!",
            },
          ]);
        }, 600);
      }
      // If chat is started, continue
      else if (chatStarted) {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              sender: "shopkeeper",
              text: "What would you like to know?",
              options: [
                "🛍️ Show me latest offers",
                "📍 Where is your shop located?",
                "⏰ What are your store timings?",
                "🚚 Do you offer delivery?",
                "💳 What payment methods do you accept?",
              ],
            },
          ]);
        }, 800);
      }
      // If chat hasn't started and message is not "hi"
      else {
        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              sender: "shopkeeper",
              text: "Please say 'hi' to start the conversation.",
            },
          ]);
        }, 600);
      }

      setChatInput("");
    }
  };

  const handleOptionClick = (option) => {
    if (!chatStarted) return; // Prevent clicks if chat not started

    setMessages((prev) => [...prev, { sender: "user", text: option }]);

    const replyMap = {
      "🛍️ Show me latest offers":
        "We currently have 50% off on fashion and up to 30% off on food outlets!",
      "📍 Where is your shop located?":
        "We're located at MG Road, Pune near the central mall.",
      "⏰ What are your store timings?":
        "We’re open every day from 10 AM to 9 PM.",
      "🚚 Do you offer delivery?": "Yes! We offer free delivery within 5 km.",
      "💳 What payment methods do you accept?":
        "You can pay via UPI, cash, or credit/debit card.",
    };

    const botReply = replyMap[option] || "Let me check that for you...";

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "shopkeeper", text: botReply },
      ]);
    }, 700);
  };

  return (
    <div className="home-page">
      {/* 1️⃣ Top offer Slider */}
      <h1 className="slider-heading">🔥 Top Offers of the Day</h1>
      <Slider {...settings} className="top-offer-slider">
        {topOffers.map((item, index) => (
          <div
            key={index}
            className="offer-slide"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="overlay">
              <div className="offer-content">
                <h2>{item.shop}</h2>
                <p>{item.offer}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* 2️⃣ About Us */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          LocalOffers is a platform dedicated to connecting users with amazing
          deals and discounts from local shops in Pune. We help you save more
          while supporting small businesses around you.
        </p>
      </section>

      {/* 3️⃣ Customer Reviews Slider */}
      <section className="review-slider-section">
        <h2>What Our Customers Say</h2>
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="review-slide">
              <p className="review-comment">"{review.comment}"</p>
              <p className="reviewer-name">— {review.name}</p>
            </div>
          ))}
        </Slider>
        {/* 4️⃣ How It Works */}
        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="step-box">
              <h3>
                🔍{" "}
                <Link to="/how-it-works/discover" className="step-link">
                  Discover
                </Link>
              </h3>
              <p>Find amazing deals from trusted local shops in your city.</p>
            </div>

            <div className="step-box">
              <h3>
                📱{" "}
                <Link to="/how-it-works/browse" className="step-link">
                  Browse
                </Link>
              </h3>
              <p>Explore trending offers, shop categories, and flash sales.</p>
            </div>

            <div className="step-box">
              <h3>
                🛒{" "}
                <Link to="/how-it-works/shop-save" className="step-link">
                  Shop & Save
                </Link>
              </h3>
              <p>Visit stores or contact them directly to grab the deals.</p>
            </div>
          </div>
        </section>

        {/* 5️⃣ Popular Shops Section */}
        <section className="popular-shops">
          <h2>Popular Local Shops</h2>
          <div className="shop-cards">
            <div className="shop-card">
              <img src="/images/fashion.jpg" alt="Fashion Hub" />
              <h4>Fashion Hub</h4>
              <p>
                Trendy outfits & accessories. Best-selling jeans and jackets.
              </p>
            </div>
            <div className="shop-card">
              <img src="/images/electronic.jpg" alt="TechMart" />
              <h4>TechMart</h4>
              <p>Your one-stop shop for the latest gadgets and electronics.</p>
            </div>
            <div className="shop-card">
              <img src="/images/food.jpg" alt="Foodie Point" />
              <h4>Foodie Point</h4>
              <p>Delicious meals and combos at pocket-friendly prices.</p>
            </div>
          </div>
        </section>

        {/* 6️⃣ Call-to-Action */}
        <section className="cta-register">
          <h2>Are You a Shop Owner?</h2>
          <p>
            Join LocalOffers to promote your offers and attract more customers.
          </p>
          <button onClick={() => (window.location.href = "/auth")}>
            Register Your Shop
          </button>
        </section>

        {/* 4️⃣ Chat Box Floating Button + Chat UI */}
        <div className="chat-container">
          {isChatOpen && (
            <div className="chat-box">
              <div className="chat-header">
                <span>Chat with Shopkeeper</span>
                <button onClick={() => setIsChatOpen(false)}>✕</button>
              </div>
              <div className="chat-messages">
                {messages.map((msg, i) => (
                  <div key={i} className={`chat-message ${msg.sender}`}>
                    <span>{msg.text}</span>
                    {/* If message has options, show them as buttons */}
                    {msg.options && (
                      <div className="chat-options">
                        {msg.options.map((opt, j) => (
                          <button
                            key={j}
                            className="chat-option-btn"
                            onClick={() => handleOptionClick(opt)}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="chat-input">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask something..."
                />
                <button onClick={handleSend}>Send</button>
              </div>
            </div>
          )}
          <button
            className="chat-toggle"
            onClick={() => setIsChatOpen(!isChatOpen)}
          >
            💬 Chat
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
