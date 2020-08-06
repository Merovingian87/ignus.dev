import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Home = (props) => {

  return (
    <Wrapper>
      <h1>Home</h1>
      <Link to="/about">
        <button>about</button>
      </Link>
      <Link to="/contact">
        <button>contact</button>
      </Link>
    </Wrapper>
  );
}

export default Home;