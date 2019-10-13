import React from 'react';
import {
  Avatar,
  Card, 
  CardContent,
  CardHeader,
  Divider,
  Typography,
  Grid
} from '@material-ui/core';
import ResearchIcon from '@material-ui/icons/ImportContactsTwoTone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: '#F1AB00',
  }
}));

const Research = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container justify="center">
        <Card>
          <CardHeader
            avatar={
              <Avatar 
                aria-label="teaching"
                className={classes.avatar}  
              >
                <ResearchIcon />
              </Avatar>
            }
            disableTypography={false}
            title="RESEARCH"
            subheader="this needs content asap"
            titleTypographyProps={
              {
                variant:'h4'
              }
            }
          />
          <Divider />
          <CardContent>
            <Typography 
              component="h1"
              variant="overline"
              style={{fontSize: '2rem'}}
              
            >          
              Research ...coming soon
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
}

export default Research;
