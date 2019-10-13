import React from 'react';
import {
  Avatar,
  Card, 
  CardContent,
  CardHeader,
  Divider,
  FormControlLabel,
  IconButton,
  Grid,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { EmailTwoTone, AlternateEmailTwoTone } from '@material-ui/icons'

const useStyles = makeStyles( theme => ({
  avatar: {
    backgroundColor: '#F1AB00',
  }
}));

const Contact = () => {
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
                <EmailTwoTone />
              </Avatar>
            }
            disableTypography={false}
            title="CONTACT"
            subheader="For any inquiries, please feel free to contact me:"
            titleTypographyProps={
              {
                variant:'h4'
              }
            }
          />
          <Divider />
          <CardContent>
            <Typography component="p" variant="overline">
              <FormControlLabel
                control={
                  <a target="_top"
                      rel="noopener noreferrer"
                      href="mailto:Lewis.A.Luartz@gmail.com">
                      <IconButton color="primary">
                          <AlternateEmailTwoTone />
                      </IconButton>
                  </a>
                }
                label={"Personal E-mail: Lewis.A.Luartz@gmail.com"}
                labelPlacement="end"
              />
            </Typography>
            <Typography component="p" variant="overline">
              <FormControlLabel
                control={
                  <a target="_top"
                      rel="noopener noreferrer"
                      href="mailto:Lewis.Luartz@email.ucr.edu">
                      <IconButton color="primary">
                          <AlternateEmailTwoTone />
                      </IconButton>
                  </a>
                }
                label={"University of California E-mail: Lewis.Luartz@email.ucr.edu"}
                labelPlacement="end"
              />
            </Typography>
            <Typography component="p" variant="overline">
              <FormControlLabel
                control={
                  <a target="_top"
                      rel="noopener noreferrer"
                      href="mailto:Luartz@chapman.edu">
                      <IconButton color="primary">
                          <AlternateEmailTwoTone />
                      </IconButton>
                  </a>
                }
                label={"Chapman University E-mail: Luartz@chapman.edu"}
                labelPlacement="end"
              />
            </Typography>
            <br />
            <Typography component="p">
              If you are in the <strong>Riverside</strong> area, stop by! 
            </Typography>
            <br />
            <Typography component="p" variant="overline">
              900 University Ave.
              <br /> 
              2121E Watkins Hall
              <br />
              Riverside, CA 92521 
            </Typography>
            <br />
            <Typography component="p">
              Or feel free to follow and reach out on social media by clicking one of the buttons below!
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
}

export default Contact;
