import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useHistory } from "react-router-dom";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title1: {
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexGrow: 1,
            align: 'center'
        }
    },
    headerOptions: {
        display: 'flex',
        flex: 1,
        justifyContent: "space-evenly"
    }
}));

function Header_bar() {
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
      <Box >
      <AppBar position="static" style={{background:'#DE5C8E'}}>
        <Toolbar>
          {/* <Typography variant="h6" component="div" >
            Diabetes Reversal Project
          </Typography> */}
                  <div>
                      {isMobile ? (
                          <>
                              <IconButton
                          size="large"
                          edge="start"
                          color="inherit"
                          aria-label="menu"
                          sx={{ mr: 2}}
                          onClick={handleMenu}
                      >
                      <MenuIcon />
                     </IconButton>
                        <Typography variant="h6" component="div" edge="start">
                            Diabetes Reversal Project
                        </Typography>
                        <Menu
                          id="menu-appbar"
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: 'top',
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
                          <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/diabetes2')}>T2D</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/food')}>Food</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/exercise')}>Exercise</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/about')}>About</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/login')}>Login</MenuItem>
                          <MenuItem onClick={() => handleMenuClick('/signup')}>Sign Up</MenuItem>         
                          </Menu>
                        </>
                      ) :
                          (
                        <div
                            className={classes.headerOptions}
                        >
                        <IconButton
                            size="large"
                            color="inherit"
                            onClick={handleMenu}
                        >
                        <Typography variant="h6"> T2D </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            onClick={handleMenu}        
                        >
                        <Typography variant="h6"> Food </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            onClick={handleMenu}          
                        >
                        <Typography variant="h6"> Exercise </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            onClick={handleMenu}         
                        >
                        <Typography variant="h6"> Login </Typography>
                        </IconButton>
                        <IconButton
                            size="large"
                            color="inherit"
                            onClick={handleMenu}         
                        >
                        <Typography variant="h6"> Sign Up </Typography>
                        </IconButton>         
                    </div>
                      )}
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header_bar;