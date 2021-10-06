import React from "react";
import { Grid } from "@material-ui/core";
import PhotoCard from "./PhotoCard";
import { removeEmptyKeys } from "../utils/functions";

const Content = (props) => {
    const { data: cardsList } = props;
    const favoriteList = [];

    const handleClick = (card) => {
        card.favorite = !card.favorite;

        if (card.favorite) {
            favoriteList["card:" + card.id] = {
                id: card.id,
                author: card.author,
                imageSrc: card.image,
            };
        } else {
            favoriteList["card:" + card.id] = null;
        }

        let favoriteListFiltered = { ...favoriteList };
        favoriteListFiltered = removeEmptyKeys(favoriteListFiltered);
    };

    const getPhotoCard = (card) => (
        <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
            <PhotoCard
                avatar={card.avatar}
                author={card.author}
                authorPage={getAuthorPage(card)}
                subheader={card.subheader}
                image={card.image}
                quote={card.quote}
                favorite={card.favorite}
                likes={card.likes}
                dislikes={card.dislikes}
                onClick={() => handleClick(card)}
            />
        </Grid>
    );

    const getAuthorPage = (card) => {
        const name = card.author.trim();
        const lastName = card.subheader.trim();
        const authorPage = `/ExampleNeonPage/${
            name + lastName
        }?name=${name}&lastName=${lastName}`;

        return authorPage;
    };

    return (
        <>
            <Grid container spacing={1}>
                {cardsList.map(
                    (card) =>
                        card.author
                            .toLowerCase()
                            .includes(props.filter.toLowerCase()) &&
                        getPhotoCard(card)
                )}
            </Grid>
        </>
    );
};

export default Content;
