import React from "react";
import { Grid } from "@material-ui/core";
import Content from "./Content";
import Header from "./Header";

const HomePage = (props) => {
    return (
        <Grid container direction='column'>
            <Grid item sx={12}>
                <Header onClick={props.onClick} />
            </Grid>
            <Grid item sx={12}>
                <Content data={props.data} />
            </Grid>
        </Grid>
    );
};

export default HomePage;
