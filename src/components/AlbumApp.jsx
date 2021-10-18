import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import ExampleNeonPage from "./ExampleNeonPage";
import NotFound from "./NotFound";
import { getData } from "../mockdata/data";

const AlbumApp = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState("");
    const [favoriteList, setFavoriteList] = useState([]);

    const handleSearchChange = (e) => {
        setFilter(e.target.value);
    };

    const handleReloadClick = () => {
        getNewData();
    };

    const handleFavoriteClick = (cardId) => {
        const index = data.findIndex((e) => e.id === cardId);
        const newData = [...data];
        newData[index].favorite = !data[index].favorite;
        setData(newData);

        updateFavoriteList(data[index]);
    };

    const updateFavoriteList = (card) => {
        const newFavoriteList = [...favoriteList];
        const index = newFavoriteList.findIndex((e) => e.id === card.id);

        if (index === -1) {
            newFavoriteList.push(card);
            setFavoriteList(newFavoriteList);
        } else {
            const filteredList = newFavoriteList.filter(
                (e) => e.id !== card.id
            );
            setFavoriteList(filteredList);
        }
    };

    useEffect(async () => {
        if (!data.length) await getNewData();
    }, []);

    const getNewData = async () => {
        // getNewData simulates a waiting time
        setData(null);
        setFilter("");
        const newData = await getData();
        await new Promise((resolve) => setTimeout(resolve, 1));
        setData(newData);
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
                            favoriteList={favoriteList}
                            onRefreshClick={handleReloadClick}
                            onSearchChange={handleSearchChange}
                            onFavoriteClick={handleFavoriteClick}
                        />
                    )}
                />
                <Redirect to='/not-found' />
            </Switch>
        </>
    );
};

export default AlbumApp;
