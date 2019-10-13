import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import  { Avatar,
          Card, 
          CardContent, 
          CardHeader,
          CardMedia,
          Divider
          } from '@material-ui/core';
import { HomeTwoTone } from '@material-ui/icons'
const profilePic = require('../../assets/images/about_pic.jpg');

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
  },
  highlitedText:{
    textDecoration: 'underline',
    textDecorationColor: '#F1AB00',
    textDecorationStyle: 'double'
  },
  avatar: {
    backgroundColor: '#F1AB00',
  }
}));

const  About = () => {
  const classes = useStyles();

  return (
    <div>
      <Card title="About Lewis Luartz">
        <CardHeader
          avatar={
            <Avatar 
              aria-label="teaching"
              className={classes.avatar}  
            >
              <HomeTwoTone />
            </Avatar>
          }
          disableTypography={false}
          title="ABOUT"
          subheader="Dissertation Year Program (DYP) Fellow 2019-2020 | Ph.D. Candidate (ABD)
          University of California, Riverside Department of Political Science"
          titleTypographyProps={
            {
              variant:'h4'
            }
          }
        />
        <Divider />
        <CardMedia 
          title="Lewis Luartz"
          className={classes.media}
          image={profilePic}
          alt="Lewis Luartz - Lecture"
        />
        <CardContent>
          <img 
            src={profilePic}
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
            As a first-generation Latino student, Lewis went into academia without the social or cultural capital of many others. The mentors Lewis made during his early academic career helped him develop into a professional researcher and instructor in spite of this initial deficit. Ultimately, this helped solidify Lewis's desire to give back to the community of underrepresented students in the academic world by pursuing a career in academia and serving as a mentor to those groups.
          </Typography>
          <br />
          <Typography 
            component="p"
            align="justify"
          >
            Lewis specializes in research on <span className={classes.highlitedText}>comparative politics</span>, focusing on elections and political parties from an institutional perspective and applying <span className={classes.highlitedText}>game theoretic approaches to political phenomena</span>. His regions of expertise are predominantly <strong>Western Europe</strong> and <strong>East Asia</strong>, although he does have knowledge on <strong>North American</strong> cases. Lewis has taught several introductory and upper-level courses, including <em>Introduction to Comparative Politics</em>, <em>Conflict Resolution</em>, <em>the Nation-State and Capitalism</em>, and <em>Politics and Economic Policy</em>.
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
export default About;
