import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h4'>Header</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
