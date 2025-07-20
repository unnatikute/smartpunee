import React from "react";
import Slider from "react-slick";
import "./home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

const Home = () => {
  // 1️⃣ Major Highlights Data
  const highlights = [
    {
      title: "Flat 50% Off",
      desc: "On all fashion stores this weekend!",
      image: "/images/fashion-offer.jpg",
    },
    {
      title: "Electronics Bonanza",
      desc: "Huge discounts on gadgets!",
      image: "/images/electronics-sale.jpg",
    },
    {
      title: "Food Fiesta",
      desc: "Get up to 30% off on dining out!",
      image: "/images/food-offer.jpg",
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
  const [chatStarted, setChatStarted] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "shopkeeper", text: "Hi! How can I help you today?" },
  ]);

  const handleSend = () => {
  const trimmed = chatInput.trim().toLowerCase();

  if (trimmed) {
    setMessages(prev => [...prev, { sender: 'user', text: chatInput }]);

    // Start chat
    if (!chatStarted && trimmed === 'hi') {
      setChatStarted(true);
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            sender: 'shopkeeper',
            text: "Welcome! What would you like to know?",
            options: [
              "🛍️ Show me latest offers",
              "📍 Where is your shop located?",
              "⏰ What are your store timings?",
              "🚚 Do you offer delivery?",
              "💳 What payment methods do you accept?"
            ]
          }
        ]);
      }, 800);
    }
    // Stop chat
    else if (chatStarted && (trimmed === 'stop' || trimmed === 'exit')) {
      setChatStarted(false);
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { sender: 'shopkeeper', text: "Thanks for chatting. Have a great day!" }
        ]);
      }, 600);
    }
    // If chat is started, continue
    else if (chatStarted) {
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            sender: 'shopkeeper',
            text: "What would you like to know?",
            options: [
              "🛍️ Show me latest offers",
              "📍 Where is your shop located?",
              "⏰ What are your store timings?",
              "🚚 Do you offer delivery?",
              "💳 What payment methods do you accept?"
            ]
          }
        ]);
      }, 800);
    }
    // If chat hasn't started and message is not "hi"
    else {
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          { sender: 'shopkeeper', text: "Please say 'hi' to start the conversation." }
        ]);
      }, 600);
    }

    setChatInput('');
  }
};

const handleOptionClick = (option) => {
  if (!chatStarted) return; // Prevent clicks if chat not started

  setMessages(prev => [...prev, { sender: 'user', text: option }]);

  const replyMap = {
    "🛍️ Show me latest offers": "We currently have 50% off on fashion and up to 30% off on food outlets!",
    "📍 Where is your shop located?": "We're located at MG Road, Pune near the central mall.",
    "⏰ What are your store timings?": "We’re open every day from 10 AM to 9 PM.",
    "🚚 Do you offer delivery?": "Yes! We offer free delivery within 5 km.",
    "💳 What payment methods do you accept?": "You can pay via UPI, cash, or credit/debit card."
  };

  const botReply = replyMap[option] || "Let me check that for you...";

  setTimeout(() => {
    setMessages(prev => [...prev, { sender: 'shopkeeper', text: botReply }]);
  }, 700);
};

  return (
    <div className="home-page">
      {/* 1️⃣ Hero / Major Highlights Slider */}
      <section className="hero-slider">
        <Slider {...sliderSettings}>
          {highlights.map((item, index) => (
            <div key={index} className="highlight-slide">
              <img
                src={item.image}
                alt={item.title}
                className="highlight-image"
              />
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
          LocalOffers is a platform dedicated to connecting users with amazing
          deals and discounts from local shops in Pune. We help you save more
          while supporting small businesses around you.
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
