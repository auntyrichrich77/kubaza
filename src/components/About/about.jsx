import React from "react";
import "./about.css"; // Make sure to link your updated CSS file
import { FaLaptop, FaHeartbeat, FaBook, FaRunning, FaFilm } from "react-icons/fa"; // Import icons

const About = () => {
  const products = [
    {
      name: "Technology",
      description: "Explore the latest in tech gadgets, electronics, and more.",
      icon: <FaLaptop />,
    },
    {
      name: "Health",
      description: "Find health and wellness products to improve your lifestyle.",
      icon: <FaHeartbeat />,
    },
    {
      name: "Education",
      description: "Books, online courses, and resources for educational growth.",
      icon: <FaBook />,
    },
    {
      name: "Sports",
      description: "Everything for your active lifestyle, from equipment to apparel.",
      icon: <FaRunning />,
    },
    {
      name: "Entertainment",
      description: "Movies, music, games, and everything you need for entertainment.",
      icon: <FaFilm />,
    },
  ];

  return (
    <div className="about-container">
      <h2 className="about-header">Products</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-icon">{product.icon}</div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
