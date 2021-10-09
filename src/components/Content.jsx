import React from "react";

import PhotoCardList from "./PhotoCardList";

const Content = (props) => {
    const { data, filter, selectedTab } = props;

    return (
        <>
            {selectedTab === 0 && <PhotoCardList data={data} filter={filter} />}
        </>
    );
};

export default Content;
