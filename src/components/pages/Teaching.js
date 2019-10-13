import React from 'react';
import syllabi from '../../assets/data/syllabi';
import { 
  Avatar,
  Card, 
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import WorkOutlineIcon from '@material-ui/icons/WorkTwoTone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: '#F1AB00',
  },
}));

const Teaching = () => {
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
                <WorkOutlineIcon />
              </Avatar>
            }
            disableTypography={false}
            title="TEACHING"
            subheader="Syllabi for Summer, Quarter and Semester Sessions"
            titleTypographyProps={
              {
                variant:'h4'
              }
            }
          />
          <Divider />
          <CardContent>
          <ul>
            {syllabi.map(syllabus => {
              return (
                <li key={syllabus.name}>
                  <Typography component="p" variant="overline">
                    {syllabus.class}: {syllabus.name} Syllabus:&nbsp; 
                    {syllabus.summer && '['}
                      {syllabus.summer && <a rel="noopener noreferrer" target="_blank" alt="summer" title="summer syllabus" href={syllabus.summer}>Summer</a>}
                    {syllabus.summer && ']'}
                    {syllabus.quarter && '['}
                      {syllabus.quarter && <a rel="noopener noreferrer" target="_blank" alt="quarter" title="quarter syllabus" href={syllabus.quarter}>Quarter</a>}
                    {syllabus.quarter && ']'}
                    {syllabus.semester && '['}
                      {syllabus.semester && <a rel="noopener noreferrer" target="_blank" alt="semester" title="semester syllabus" href={syllabus.semester}>Semester</a>}
                    {syllabus.semester && ']'}
                  </Typography>
                </li>
              );
            })}
          </ul>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
}

export default Teaching;
