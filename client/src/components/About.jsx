import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const About = (props) => {

  return (
    <Wrapper>
      <h1>About</h1>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/contact">
        <button>contact</button>
      </Link>
    </Wrapper>
  );
}

export default About;