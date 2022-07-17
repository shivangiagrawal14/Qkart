import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack,TextField} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
import {useHistory, Link } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons }) => {
  const history=useHistory()
    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
       { hasHiddenAuthButtons?
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={()=>{
            history.push('/')
          }}
        >Back to explore
        </Button>
        :
         <>
          {children}
       { !localStorage.getItem('username')?
        <Stack direction="row" spacing={2}>
           <Button  onClick={()=>{
              history.push('/login')
            }}>LOGIN</Button>
           <Button onClick={()=>{
              history.push('/register')
            }} variant="contained">REGISTER</Button>
        </Stack>
        :
        <Stack direction="row" spacing={2} alignItems="center">
            <Avatar src="avatar.png" alt={localStorage.getItem('username')}/>
            <p className="username-text">{localStorage.getItem('username')}</p>
            <Button className="explore-button" onClick={()=>{
              localStorage.clear()
              window.location.reload()
              history.push('/')
            }}>LOGOUT</Button>
       </Stack>}
       </>
        }
       
      </Box>
    );
};

export default Header;
