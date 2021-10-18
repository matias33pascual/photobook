import React from "react";

import PhotoCardList from "./PhotoCardList";
import FavoritedCardList from "./FavoritedCardList";

const Content = (props) => {
    const { data, filter, favoriteList, selectedTab, onFavoriteClick } = props;

    return (
        <>
            {selectedTab === 0 && (
                <PhotoCardList
                    data={data}
                    filter={filter}
                    onFavoriteClick={onFavoriteClick}
                />
            )}
            {selectedTab === 1 && (
                <FavoritedCardList favoriteList={favoriteList} />
            )}
        </>
    );
};

export default Content;
