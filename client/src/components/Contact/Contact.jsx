import React from 'react';
import { Link } from 'react-router-dom';



import { Typography, Button } from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';
import useStyles from './styles';

const Contact = (props) => {
  const theme = useTheme();
  const classes = useStyles(theme)();
  return (
    <>
      <Typography>Contact</Typography>
      <Link to="/">
        <Button
         color="primary"
         variant="contained"
        >
          home
        </Button>
      </Link>
      <Link to="/about">
        <Button
          color="secondary"
          variant="contained"
          // className={classes.button}
        >
          about
        </Button>
      </Link>
    </>
  );
}

export default Contact;