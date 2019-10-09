import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  media: {
    height: 150,
    paddingTop: '100%',
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  inlineMedia: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      float: 'right',
      width: '30%',
      height: '40%',
      marginLeft: 15,
      marginBottom: 15
    },
  }
}));

const  Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography 
        component="h1"
        variant="overline"
        style={{fontSize: '2rem'}}
        
      >          
        Home
      </Typography>
      <Card title="About Lewis Luartz">
        <CardMedia 
          title="Lewis Luartz"
          className={classes.media}
          image={require('../../assets/images/about_pic.jpg')}
          alt="Lewis Luartz - Lecture"
        />
        <CardContent>
          <img 
            src={require('../../assets/images/about_pic.jpg')}
            alt="Lewis Luartz - Lecture"
            title="Lewis Luartz"
            className={classes.inlineMedia}
          />
          <Typography 
            component="p"
            align="justify"
          >
            For many, the professors they encounter become significantly influential figures.
          </Typography>
          <br />
          <Typography 
            component="p"
            align="justify"
          >
            As a first-generation Latino student, Lewis went into academia without the social or cultural capital of many others. The mentors Lewis made during his early academic career helped him develop into a professional researcher and instructor in spite of this initial deficit. Ultimately, this helped solidify Lewis's desire to give back to the community of underrepresented students in the academic world by pursuing a career in academia and serving as a mentor to them.
          </Typography>
          <br />
          <Typography 
            component="p"
            align="justify"
          >
            Lewis's specializes in research on comparative politics, focusing on elections and political parties from an institutional perspective and game theoretic approaches to political phenomena. His regions of expertise are predominantly on Western Europe and East Asia, although he does have knowledge on North American cases. Lewis has taught several introductory and upper-level courses, including Introduction to Comparative Politics, Conflict Resolution, the Nation-State and Capitalism, and Politics and Economic Policy. 
          </Typography>
          <br />
          <Typography 
            component="p"
            variant="caption"
          >
            Hi there, thanks for stopping by. I'm currently under construction. 
            Luigi Campbell, Software Engineer, Full Stack Dev, Salesforce Dev. Contact: luigi.campbell@outlook.com
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
export default Home;
