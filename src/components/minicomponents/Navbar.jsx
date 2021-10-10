import "./../Main.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";


import HomeIcon from '@material-ui/icons/Home';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';



import ContactsIcon from '@material-ui/icons/Contacts';




import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
function Navbar() {
  const history = useHistory();
  const [state, setState] = useState({ drawer: false });
  return (
    <div>
      <AppBar position="static" style={{ background: "#DE5C8E" }}>
        <Toolbar>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                // justifyContent: "flex-center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <IconButton
                edge="start"
                // className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={() => {
                  setState((prevState) => ({ ...prevState, drawer: true }));
                }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                variant="h6"
                onClick={() => {
                  history.push("/home");
                }}
                style={{ cursor: "pointer" }}
              >
                Diabetes Reversal Project
              </Typography>
            </div>

            <div>
              <Button
                color="inherit"
                onClick={() => {
                  history.push("/");
                }}
              >
                Logout
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={state.drawer}
        onClose={() => {
          setState((prevState) => ({ ...prevState, drawer: false }));
        }}
      >
        <div style={{ background: "#F8E1EA", height: "100%" }}>
          <List style={{ width: "200px" }}>
            
            
            
            {/* <ListItem
              button
              onClick={() => {
                history.push("/home");
              }}
            >
              <ListItemText className="button-text-grey">Home</ListItemText>
            </ListItem> */}






            
            <ListItem
              HomeIcon
              onClick={() => {
                history.push("/home");
              }}
            >
              <HomeIcon className="button-text-grey">Home</HomeIcon>
            </ListItem>




            <ListItem
              AccountCircleIcon
              onClick={() => {
                history.push("/profile");
              }}
            >
              <AccountCircleIcon className="button-text-grey">Profile</AccountCircleIcon>
            </ListItem>





            <ListItem
              button
              onClick={() => {
                history.push("/uploadfood");
              }}
            >
              <ListItemText className="button-text-grey">
                Upload food
              </ListItemText>
            </ListItem>


            <ListItem
              button
              onClick={() => {
                history.push("/bloodsugar");
              }}
            >
              <ListItemText className="button-text-grey">
                Blood sugar
              </ListItemText>
            </ListItem>




            
            <ListItem
              button
              onClick={() => {
                history.push("/exercise");
              }}
            >
              <ListItemText className="button-text-grey">
                Exercise
              </ListItemText>
            </ListItem>






            <ListItem
              button
              onClick={() => {
                history.push("/guide");
              }}
            >
              <ListItemText className="button-text-grey">
                Guide
              </ListItemText>
            </ListItem>





            <ListItem
              button
              onClick={() => {
                history.push("/coach");
              }}
            >
              <ListItemText className="button-text-grey">
                Coach
              </ListItemText>
            </ListItem>




            <ListItem
              button
              onClick={() => {
                history.push("/chat");
              }}
            >
              <ListItemText className="button-text-grey">
                Chat
              </ListItemText>
            </ListItem>









            <ListItem
              HomeIcon
              onClick={() => {
                history.push("/contact");
              }}
            >
              <ContactsIcon className="button-text-grey">Contact us</ContactsIcon>
            </ListItem>






          </List>
        </div>
      </Drawer>
    </div>
  );
}
export default Navbar;
