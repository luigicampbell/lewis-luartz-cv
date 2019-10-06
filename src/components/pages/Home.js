import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const  Home = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Paper className={classes.root}>
          <Typography component="p">
            Hi there, thanks for stopping by. I'm currently under construction. 
            Luigi Campbell, Software Engineer, Full Stack Dev, Salesforce Dev. Contact: luigi.campbell@outlook.com
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
export default Home;
