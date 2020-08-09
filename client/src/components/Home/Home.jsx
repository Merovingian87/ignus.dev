import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {

  return (
    <>
      <h1 style={{color: 'blue'}}>Home</h1>
      <Link to="/about">
        <button>about</button>
      </Link>
      <Link to="/contact">
        <button>contact</button>
      </Link>
    </>
  );
}

export default Home;