import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import React from "react";
import Logo from "./shared/Logo";

const Header = () => {
    return <AppBar sx = {{bgcolor : "transparent", position:"static", boxshadow:"none"}}>
        <Toolbar sx={{ display: "flex" }}>
            <Logo />

        </Toolbar>

    </AppBar>
}

export default Header