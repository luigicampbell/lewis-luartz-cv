import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { LinkedIn as LinkedInIcon, Instagram as InstagramIcon, Twitter as TwitterIcon } from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="LinkedIn" target="_blank" href="https://www.linkedin.com/in/lewisluartz/"icon={<LinkedInIcon />} />
      <BottomNavigationAction label="Instagram" target="_blank" href="https://www.instagram.com/lewis.luartz/?hl=en"icon={<InstagramIcon />} />
      <BottomNavigationAction label="Twitter" target="_blank" href="https://twitter.com/lewisluartz?lang=en"icon={<TwitterIcon />} />
    </BottomNavigation>
  );
}
