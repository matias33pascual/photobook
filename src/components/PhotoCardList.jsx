import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import PhotoCard from "./PhotoCard";
import Pagination from "@mui/material/Pagination";
import _ from "lodash";

const PhotoCardList = (props) => {
    const { data, filter, onFavoriteClick, cardsPerPage } = props;

    const count = Math.ceil(data.length / cardsPerPage);

    const [page, setPage] = useState(0);

    const getPhotoCard = (card) => {
        return (
            <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
                <PhotoCard
                    id={card.id}
                    avatar={card.avatar}
                    firstName={card.firstName}
                    lastName={card.lastName}
                    image={card.image}
                    quote={card.quote}
                    favorite={card.favorite}
                    likes={card.likes}
                    dislikes={card.dislikes}
                    onFavoriteClick={onFavoriteClick}
                    authorPage={getAuthorPage(card)}
                />
            </Grid>
        );
    };

    const handleChange = (event, page) => {
        setPage(page);
    };

    return (
        <>
            <Pagination
                count={count}
                onChange={handleChange}
                variant='outlined'
                shape='rounded'
            />
            <Grid
                container
                spacing={1}
                style={{ width: "100%", margin: "auto" }}>
                {paginate(data, page, cardsPerPage).map(
                    (card) =>
                        card.firstName
                            .toLowerCase()
                            .includes(filter.toLowerCase()) &&
                        getPhotoCard(card)
                )}
            </Grid>
        </>
    );
};

export default PhotoCardList;

const getAuthorPage = (card) => {
    const firstName = card.firstName.trim();
    const lastName = card.lastName.trim();
    const authorPage = `/ExampleNeonPage/${
        firstName + lastName
    }?name=${firstName}&lastName=${lastName}`;

    return authorPage;
};

const paginate = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
};
