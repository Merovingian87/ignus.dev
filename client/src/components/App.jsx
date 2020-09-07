import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../styles/theme';

import NavBar from './NavBar/NavBar';
import About from './About/About';
import Contact from './Contact/Contact';

const App = (props) => {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <Switch>
            <Route path="/" exact component={NavBar} />
            <Route path="/about" component={About} />
            <Route path="/Contact" component={Contact} />
          </Switch>
        </>
      </ThemeProvider>
      </Router>
  );
}

export default App;
