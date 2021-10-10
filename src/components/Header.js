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

function Headerbar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
    
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
                          <MenuItem onClick={() => handleMenuClick('/')}><HomeIcon>Home</HomeIcon></MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/diabetes2')}>T2D</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/food')}>Food</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/exercise')}>Exercise</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/about')}>About</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/login')}>Login</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/register')}>Sign Up</MenuItem>         
                        </Menu>
                        </>
                      ) :
                          (
                <div className={classes.headerOptions}>
                        <IconButton
                            size="large"
                            color="inherit"
                            style={{marginRight: '45px', justifyContent: 'center'}}
                            onClick={() => handleMenuClick('/')}
                        >
                        <Typography variant="h6"> <HomeIcon>Home</HomeIcon> </Typography>
                        </IconButton>            
                        <IconButton
                            size="large"
                            color="inherit"
                            style={{marginRight: '40px', marginLeft: '90px'}}
                            onClick={() => handleMenuClick('/diabetes2')}
                        >
                        <Typography variant="h6"> T2D </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            style={{marginRight: '40px'}}
                            onClick={() => handleMenuClick('/food')}      
                        >
                        <Typography variant="h6"> Food </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            style={{marginRight: '40px'}}
                            onClick={() => handleMenuClick('/exercise')}          
                        >
                        <Typography variant="h6"> Exercise </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            style={{marginRight: '40px'}}
                            onClick={() => handleMenuClick('/about')}         
                        >
                        <Typography variant="h6"> About </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            style={{marginRight: '40px', marginLeft: '175px'}}
                            onClick={() => handleMenuClick('/login')}         
                        >
                        <Typography variant="h6"> Login </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            // style={{marginRight: '40px'}}
                            onClick={() => handleMenuClick('/register')}         
                        >
                        <Typography variant="h6"> Sign Up </Typography>
                        </IconButton>         
                    </div>
                          )}
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Headerbar;