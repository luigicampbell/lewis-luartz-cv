import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography,
  FormControlLabel,
  IconButton,
  Grid
} from '@material-ui/core';
import { EmailTwoTone } from '@material-ui/icons'

const Contact = () => {
  return (
    <React.Fragment>
      <Typography 
          component="h1"
          variant="overline"
          style={{fontSize: '2rem'}}
          
        >          
        Contact
      </Typography>
      <Grid container justify="center">
        <Card>
          <CardContent>
            <Typography component="p">
              For any inquiries, please feel free to contact me: 
            </Typography>
            <br />
            <Typography component="p">
              <FormControlLabel
                control={
                  <a target="_top"
                      rel="noopener noreferrer"
                      href="mailto:Lewis.A.Luartz@gmail.com">
                      <IconButton color="primary">
                          <EmailTwoTone />
                      </IconButton>
                  </a>
                }
                label={"Personal E-mail: Lewis.A.Luartz@gmail.com"}
                labelPlacement="end"
              />
            </Typography>
            <Typography component="p">
              <FormControlLabel
                control={
                  <a target="_top"
                      rel="noopener noreferrer"
                      href="mailto:Lewis.Luartz@email.ucr.edu">
                      <IconButton color="primary">
                          <EmailTwoTone />
                      </IconButton>
                  </a>
                }
                label={"University of California E-mail: Lewis.Luartz@email.ucr.edu"}
                labelPlacement="end"
              />
            </Typography>
            <Typography component="p">
              <FormControlLabel
                control={
                  <a target="_top"
                      rel="noopener noreferrer"
                      href="mailto:Luartz@chapman.edu">
                      <IconButton color="primary">
                          <EmailTwoTone />
                      </IconButton>
                  </a>
                }
                label={"Chapman University E-mail: Luartz@chapman.edu"}
                labelPlacement="end"
              />
            </Typography>
            <br />
            <Typography component="p">
              If you are in the Riverside area, stop by! 
            </Typography>
            <br />
            <Typography component="p">
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
