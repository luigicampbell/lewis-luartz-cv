import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  media: {
    height: 140
  }
}));

const  Home = () => {
  const classes = useStyles();

  return (
    <div>
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
    </div>
  );
}
export default Home;
