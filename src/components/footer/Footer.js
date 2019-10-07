import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1),
  },
}));

const Footer = () => {
  const classes = useStyles();
  const dudUrl = '';
  return (
    <Grid alignContent="center">
      <Typography variant="overline">
      <Link href={dudUrl} align="center" className={classes.link}>
        Bottom Nav
      </Link>
      <Link href={dudUrl} align="center" className={classes.link}>
        Bottom Nav
      </Link>
      <Link href={dudUrl} align="center" className={classes.link}>
        Bottom Nav
      </Link>
      </Typography>
    </Grid>
  );
}

export default Footer;
