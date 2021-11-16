import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    TextField,
    Tabs,
    Tab,
    Box,
} from "@material-ui/core";
import CachedIcon from "@mui/icons-material/Cached";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";
import { makeStyles, alpha } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    searchContainer: {
        display: "flex",
        paddingLeft: "5px",
        paddingRight: "5px",
        paddingBottom: "5px",
        marginTop: "10px",
        marginBottom: "10px",
        backgroundColor: alpha(theme.palette.common.white, 0.15),
    },
    searchIcon: { alignSelf: "flex-end", marginBottom: "2px" },
    searchInput: { width: "200px" },
    appBar: {},
    toolbar: {},
    refreshButton: { color: grey[50] },
    tabs: { marginLeft: "auto" },
}));

const Header = (props) => {
    const classes = useStyles();
    const { selectedTab, onTabChange } = props;

    return (
        <AppBar position='static' className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant='body1'>Photobook</Typography>

                <IconButton onClick={props.onRefreshClick}>
                    <CachedIcon className={classes.refreshButton} />
                </IconButton>

                <div className={classes.searchContainer}>
                    <SearchIcon className={classes.searchIcon} />
                    <TextField
                        className={classes.searchInput}
                        label='Search for author'
                        variant='standard'
                        onChange={props.onSearchChange}
                    />
                </div>

                <Tabs
                    className={classes.tabs}
                    value={selectedTab}
                    onChange={onTabChange}>
                    <Tab label='Imagenes' />
                    <Tab label='Favoritos' />
                </Tabs>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
