import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Content from "./Content";
import Header from "./Header";

const HomePage = (props) => {
    return (
        <Grid container direction='column'>
            <Grid item sx={12}>
                <Header
                    onClick={props.onClick}
                    onSearchChange={props.onSearchChange}
                    value={props.filter}
                />
            </Grid>
            <Grid item sx={12}>
                {props.data && (
                    <Content data={props.data} filter={props.filter} />
                )}
                {!props.data && <CircularProgress />}
            </Grid>
        </Grid>
    );
};

export default HomePage;
