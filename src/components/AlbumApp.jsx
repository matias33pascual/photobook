import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import ExampleNeonPage from "./ExampleNeonPage";
import { fetchData } from "../mockdata/data";

const AlbumApp = () => {
    const [data, setData] = useState([]);

    const handleReloadClick = () => {
        getNewData();
    };

    useEffect(async () => {
        if (data.length === 0) await getNewData();
    }, []);

    const getNewData = async () => {
        const newList = await fetchData();
        setData(newList);
    };

    return (
        <>
            <Switch>
                <Route
                    path='/ExampleNeonPage/:author'
                    component={ExampleNeonPage}
                />
                <Route
                    path='/'
                    render={() => (
                        <HomePage data={data} onClick={handleReloadClick} />
                    )}
                />
            </Switch>
        </>
    );
};

export default AlbumApp;
