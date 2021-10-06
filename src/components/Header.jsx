import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    TextField,
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
}));

const Header = (props) => {
    const classes = useStyles();

    return (
        <AppBar position='sticky' style={{ marginBottom: "3px" }}>
            <Toolbar style={{ margin: "-5px 0 -5px 0" }}>
                <Typography variant='body1'>Photobook</Typography>

                <IconButton onClick={props.onClick}>
                    <CachedIcon style={{ color: grey[50] }} />
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
            </Toolbar>
        </AppBar>
    );
};

export default Header;
