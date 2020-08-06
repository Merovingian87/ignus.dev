import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Contact = (props) => {

  return (
    <Wrapper>
      <h1>Contact</h1>
      <Link to="/">
        <button>home</button>
      </Link>
      <Link to="/about">
        <button>about</button>
      </Link>
    </Wrapper>
  );
}

export default Contact;