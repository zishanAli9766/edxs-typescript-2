import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Drawers from './Drawers';
import {  useMediaQuery } from "@mui/material";
import { theme } from '../TheTheme';
import { green } from '@mui/material/colors';
import Register from './Register';

const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginRight : "10%", 
      marginLeft: '40%',
      display: "flex",
    },
    logo: {
      flexGrow: "1",
      cursor: "pointer",
      
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: '30px',
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
    },
  }));
 
  

 

export default function Navbars() {
    const classes = useStyles();
    const showText = useMediaQuery(theme.breakpoints.down('md'));
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Navbar
          
        </Typography>
      
        {showText ? (<Drawers />) : 
        (<div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Link to="/faq" className={classes.link}>
              FAQ
            </Link>
          </div>)}
          <Register />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
