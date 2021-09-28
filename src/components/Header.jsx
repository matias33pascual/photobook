import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const Header = () => {
    return (
        <AppBar position='sticky' style={{ marginBottom: "3px" }}>
            <Toolbar style={{ margin: "-5px 0 -5px 0" }}>
                <Typography variant='body1'>Photocom</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
