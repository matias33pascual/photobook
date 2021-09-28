import React from "react";
import { Grid } from "@material-ui/core";
import Content from "./Content";
import Header from "./Header";

const AlbumApp = () => {
    return (
        <>
            <Grid container direction='column'>
                <Grid item>
                    <Header />
                </Grid>
                <Grid item container>
                    <Grid item sx={0} sm={1} />
                    <Grid item sx={12} sm={10}>
                        <Content />
                    </Grid>
                    <Grid item sx={0} sm={1} />
                </Grid>
            </Grid>
        </>
    );
};

export default AlbumApp;
