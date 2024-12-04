import React from 'react';
import './index.css';

const Home = () => {
  return (
    <div className="home-container container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="home-title mb-3">Welcome to AKNU MSN Campus</h1>
        <h2 className="home-subtitle mb-4">Library</h2>
        <p className="home-description">
          Explore our extensive collection of books, journals, and digital resources.
        </p>
      </div>
    </div>
  );
};

export default Home;
