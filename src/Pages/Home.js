import React from 'react';
import '../styles/Home.css';
import banner from "../assets/banner.jpg";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="header_container">
        <h1> Food Corner </h1>
        <p>INDIAN FOOD AT A CLICK.</p>
        <Link>
        <button>Order Now</button>
        </Link>

      </div>
    </div>
  );
}

export default Home;

