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
  },
  highlitedText:{
    textDecoration: 'underline',
    textDecorationColor: '#F1AB00',
    textDecorationStyle: 'double'
  },
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
            subheader="ಠ_ಠ"
            titleTypographyProps={
              {
                variant:'h4'
              }
            }
          />
          <Divider />
          <CardContent>
            <Typography 
              component="p"             
            >          
              Lewis is also interested in quantitative methodology and is well-versed in frequentist regression techniques (including OLS, Logit/Logistic, Probit, Tobit, Count models, and Maximum Likelihood methods) and Bayesian regression techniques using BUGS and JAGS. Currently, Lewis has been delving into Bayesian Structural Vector Autoregression (B-SVAR) techniques due to interests in resolving endogeneity issues within models.
              <br />
              <br />
              Lewis’s dissertation focuses on radicalized parties in Western Europe. It specifically focuses on how institutional factors and party strategies interact to yield success for the radical right, how radical left strategies vary, and how effective party strategies for the radical right influence future party strategies for this group. Lewis has presented his research at several annual conference meetings domestically and internationally, including: the <em>American Political Science Association</em>, <em>Western Political Science Association</em>, <em>Southern Political Science Association</em>, the <em>Asian Political Methodology Meeting</em>, and at the <em>Leuven-Montréal Winter School on Elections</em>.
              <br />
              <br />
              Lewis is currently working on introductory methodology courses focusing specifically on <span className={classes.highlitedText}>quantitative methods</span> and <span className={classes.highlitedText}>programming</span> in <strong>R</strong> and <strong>Stata</strong>. 


            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
}

export default Research;
