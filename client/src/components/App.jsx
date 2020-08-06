import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const App = (props) => {

  return (
    <Router>
      <AppWrapper>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>

      </AppWrapper>
      </Router>
  );
}

export default App;
