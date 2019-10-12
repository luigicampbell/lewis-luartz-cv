import React from 'react';
import clsx from 'clsx';
import About from './components/pages/About';
import CV from './components/pages/CV';
import Contact from './components/pages/Contact';
import Research from './components/pages/Research';
import Teaching from './components/pages/Teaching';
import Footer from './components/footer/Footer';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/HomeTwoTone';
import DescriptionIcon from '@material-ui/icons/DescriptionTwoTone';
import ResearchIcon from '@material-ui/icons/ImportContactsTwoTone';
import WorkOutlineIcon from '@material-ui/icons/WorkTwoTone';
import ContactMeIcon from '@material-ui/icons/MailTwoTone';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background: '#2d6cc0',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    display: 'none',
    color: 'white',
    textDecoration: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  mobileTitle: {
    display:'block',
    color: 'white',
    textDecoration: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/" alt="about" className={classes.title}>
            <Typography variant="overline" noWrap>
              Lewis Luartz &bull; PhD  Candidate &bull; MA &bull; MEd
            </Typography>
            </Link>
            <Link to="/" alt="about"  className={classes.mobileTitle}>
            <Typography variant="overline" noWrap>
              Lewis Luartz &bull; PhD Candidate, MA, MEd
            </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem 
              button
              onClick={handleDrawerClose} 
              component={Link}
              to="/"
              key={'about'}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={'About'} />
            </ListItem>
            <ListItem
            onClick={handleDrawerClose} 
              button 
              component={Link}
              to="/cv"
              key={'C.V.'}
            >
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary={'C.V.'} />
            </ListItem>
            <ListItem 
              button
              onClick={handleDrawerClose} 
              key={'Research'}
              component={Link}
              to="/research"
            >
              <ListItemIcon>
                <ResearchIcon />
              </ListItemIcon>
              <ListItemText primary={'Research'} />
            </ListItem>
            <ListItem 
              button
              onClick={handleDrawerClose} 
              key={'Teaching'}
              component={Link}
              to="/teaching"
            >
              <ListItemIcon>
                <WorkOutlineIcon />
              </ListItemIcon>
              <ListItemText primary={'Teaching'} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem 
              button
              onClick={handleDrawerClose} 
              key={'Contact'}
              component={Link}
              to="/contact"
            >
              <ListItemIcon>
                <ContactMeIcon />
              </ListItemIcon>
              <ListItemText primary={'Contact'} />
            </ListItem>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/cv' component={CV} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/research' component={Research} />
            <Route exact path='/teaching' component={Teaching} />
          </Switch>
          <br />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
