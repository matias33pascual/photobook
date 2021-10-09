import React, { useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Content from "./Content";
import Header from "./Header";

const HomePage = (props) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const { filter, onRefreshClick, onSearchChange } = props;

    const handleTabChange = (event, value) => {
        setSelectedTab(value);
    };

    return (
        <Grid container direction='column'>
            <Grid item sx={12}>
                <Header
                    onRefreshClick={onRefreshClick}
                    onSearchChange={onSearchChange}
                    value={filter}
                    onTabChange={handleTabChange}
                    selectedTab={selectedTab}
                />
            </Grid>
            <Grid item sx={12}>
                {props.data ? (
                    <Content
                        data={props.data}
                        filter={props.filter}
                        selectedTab={selectedTab}
                    />
                ) : (
                    <CircularProgress />
                )}
            </Grid>
        </Grid>
    );
};

export default HomePage;
