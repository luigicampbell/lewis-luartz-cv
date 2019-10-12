import React from 'react';
import syllabi from '../../assets/data/syllabi';
import { 
  Card, 
  CardContent, 
  Typography,
  Grid
} from '@material-ui/core';

const Teaching = () => {
  return (
    <React.Fragment>
      <Typography 
        component="h1"
        variant="overline"
        style={{fontSize: '2rem'}}
        
      >          
        Teaching
      </Typography>
      <Grid container justify="center">
      <Card>
        <CardContent>
        <ul>
          {syllabi.map(syllabus => {
            return (
              <li key={syllabus.name}>
                <Typography>
                  {syllabus.class}: {syllabus.name} Syllabus: 
                  {syllabus.summer && '['}
                    {syllabus.summer && <a rel="noopener noreferrer" target="_blank" alt="summer" title="summer syllabus" href={syllabus.summer}>Summer</a>}
                  {syllabus.summer && ']'}
                  {syllabus.summer && '['}
                    {syllabus.summer && <a rel="noopener noreferrer" target="_blank" alt="quarter" title="quarter syllabus" href={syllabus.quarter}>Quarter</a>}
                  {syllabus.summer && ']'}
                  {syllabus.summer && '['}
                    {syllabus.summer && <a rel="noopener noreferrer" target="_blank" alt="semester" title="semester syllabus" href={syllabus.semester}>Semester</a>}
                  {syllabus.summer && ']'}
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
