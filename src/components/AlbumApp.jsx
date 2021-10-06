import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import ExampleNeonPage from "./ExampleNeonPage";
import NotFound from "./NotFound";
import { fetchData } from "../mockdata/data";

const AlbumApp = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("");

    const handleSearchChange = (e) => {
        setFilter(e.target.value);
    };

    const handleReloadClick = () => {
        getNewData();
    };

    useEffect(async () => {
        if (data.length === 0) await getNewData();
    }, []);

    const getNewData = async () => {
        // getNewData simulates a waiting time

        setData(null);
        setFilter("");

        const newList = await fetchData();
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setData(newList);
    };

    return (
        <>
            <Switch>
                <Route
                    path='/ExampleNeonPage/:author'
                    component={ExampleNeonPage}
                />
                <Route path='/not-found' component={NotFound} />
                {/* <Redirect from="/unaPag" to="otraPag" /> */}
                <Route
                    path='/'
                    exact
                    render={() => (
                        <HomePage
                            data={data}
                            filter={filter}
                            onClick={handleReloadClick}
                            onSearchChange={handleSearchChange}
                        />
                    )}
                />
                <Redirect to='/not-found' />
            </Switch>
        </>
    );
};

export default AlbumApp;
