import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
  media: {
    height: 140
  }
}));

const  Home = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Typography 
          component="h1"
          variant="overline"
        >          
          Home
        </Typography>
        <Card title="About Lewis Luartz">
          <CardMedia 
            title="Lewis Luartz"
            className={classes.media}
            image="https://via.placeholder.com/200"
            alt="Lewis Luartz - Lecture Image"
          />
          <CardContent>
            <Typography component="p">
              Hi there, thanks for stopping by. I'm currently under construction. 
              Luigi Campbell, Software Engineer, Full Stack Dev, Salesforce Dev. Contact: luigi.campbell@outlook.com
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
export default Home;
