import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import React from "react";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import NavigationLink from "./NavigationLink";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxshadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
                          <NavigationLink bg="#00fffc" to="/chat" text="Go to Chat" textColor="black" />
                          <NavigationLink bg="#51538f" to = "/" text = "Logout" textColor="white" onClick={auth.logout}/>
            </>
          ) : (
                          <>
                          <NavigationLink bg="#00fffc" to="/login" text="Login" textColor="black" />
                          <NavigationLink bg="#51538f" to = "/signup" text = "SignUp" textColor="white"/>
                          
                          </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
