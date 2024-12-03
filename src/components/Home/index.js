import React from 'react';
import './index.css';

const Home = () => {
  return (
    <>
      <div className="home-container container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="text-center">
          <h1 className="display-4 fw-bold home-head mb-2">Welcome to AKNU MSN campus</h1>
          <h1 className="home-head fw-bold">Library</h1>
          <p className="lead text-info">
            Explore our extensive collection of books, journals, and digital resources.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
