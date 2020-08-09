import React from 'react';
import { Link } from 'react-router-dom';

const About = (props) => {

  return (
    <>
      <h1>About</h1>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/contact">
        <button>contact</button>
      </Link>
    </>
  );
}

export default About;