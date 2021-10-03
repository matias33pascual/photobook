import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import CachedIcon from "@mui/icons-material/Cached";
import { grey } from "@mui/material/colors";

const Header = (props) => {
    return (
        <AppBar position='sticky' style={{ marginBottom: "3px" }}>
            <Toolbar style={{ margin: "-5px 0 -5px 0" }}>
                <Typography variant='body1'>Photobook</Typography>
                <IconButton onClick={props.onClick}>
                    <CachedIcon style={{ color: grey[50] }} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
