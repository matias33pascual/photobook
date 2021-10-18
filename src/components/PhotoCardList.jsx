import React from "react";
import { Grid } from "@material-ui/core";
import PhotoCard from "./PhotoCard";
import { removeEmptyKeys } from "../utils/functions";

const PhotoCardList = (props) => {
    const { data, filter, onFavoriteClick } = props;

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

    return (
        <>
            <Grid
                container
                spacing={1}
                style={{ width: "100%", margin: "auto" }}>
                {data.map(
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
