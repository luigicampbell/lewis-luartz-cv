import React from 'react';
import SearchAppBar from './components/navbar/Navbar';
import Home from './components/pages/Home';
import Footer from './components/footer/Footer';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <SearchAppBar />
      <Grid container className={classes.root} spacing={2} justify="center">
        <Grid item xs={12}>
          <Home />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default App;
