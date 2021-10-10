import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useHistory } from "react-router-dom";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import { AuthApi, TokenApi } from '../App.js';
import Cookies from 'js-cookie';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(0)
    },
  title1: {
    // flexGrow: 0.1,
    // marginLeft: '120px',
    marginRight: '30px',
        [theme.breakpoints.down('xs')]: {
            // display: 'flex',
            flexGrow: 1,
            marginLeft:'110px',
            // align: 'center'
        }
    },
    headerOptions: {
        // display: 'flex',
        // flex: 1,
        flexGrow: 1,
        justifyContent: "space-evenly"
    }
}));

function Headerbarauth() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const Auth = React.useContext(AuthApi);

  const handleonclick = () => {
    Auth.setAuth(false);
    Cookies.remove("token");
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

    const handleMenuClick = (pageURL) => {
        history.push(pageURL)
        setAnchorEl(null);
  };

  return (
      <div className={classes.root}>
      <AppBar position="static" style={{background:'#DE5C8E'}}>
        <Toolbar>
          <Typography variant="h6" component="div" className={classes.title1} >
            Diabetes Reversal Project
          </Typography>
                <div>
                      {isMobile ? (
                          <>
                        <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          className={classes.menuButton}
                          onClick={handleMenu}
                      >
                         <MenuIcon />
                        </IconButton>
                        <Menu
                          id="menu-appbar"
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          open={Boolean(anchorEl)}
                          onClose={() => setAnchorEl(null)}
                        >
                          <MenuItem onClick={() => handleMenuClick('/')}><HomeIcon>My Home</HomeIcon></MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/diabetes2')}>Upload Daily Diet</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/food')}>Blood Sugar</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/exercise')}>My Exercise</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/about')}>Guide</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/about')}>My Coach</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/about')}>Chat</MenuItem>
                          <MenuItem onClick={handleonclick}>Log Out</MenuItem>      
                        </Menu>
                        </>
                      ) :
                          (
                <div className={classes.headerOptions}>
                        <IconButton
                            size="large"
                            color="inherit"
                            // style={{marginRight: '45px', justifyContent: 'center'}}
                            onClick={() => handleMenuClick('/')}
                        >
                        <Typography variant="h6"> <HomeIcon>Home</HomeIcon> </Typography>
                        </IconButton>            
                        <IconButton
                            size="large"
                            color="inherit"
                            // style={{marginRight: '40px'}}
                            onClick={() => handleMenuClick('/diabetes2')}
                        >
                        <Typography variant="h6"> Upload Daily Diet </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            // style={{marginRight: '40px'}}
                            onClick={() => handleMenuClick('/bloodsugar')}      
                        >
                        <Typography variant="h6"> Blood Sugar </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            // style={{marginRight: '40px'}}
                            onClick={() => handleMenuClick('/exercise')}          
                        >
                        <Typography variant="h6"> My Exercise </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            style={{marginRight: '40px'}}
                            onClick={() => handleMenuClick('/about')}         
                        >
                        <Typography variant="h6"> Guide </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            style={{marginRight: '40px'}}
                            onClick={() => handleMenuClick('/about')}         
                        >
                        <Typography variant="h6"> My Coach </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            style={{marginRight: '40px'}}
                            onClick={() => handleMenuClick('/about')}         
                        >
                        <Typography variant="h6"> Chat </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            // style={{marginRight: '30px'}}
                            onClick={() => handleMenuClick('/user')}         
                        >
                        <Typography variant="h6"> Profile </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            // style={{marginLeft: '10px'}}
                            onClick={handleonclick}         
                        >
                        <Typography variant="h6"> Log Out </Typography>
                        </IconButton>
                    </div>
                          )}
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Headerbarauth;