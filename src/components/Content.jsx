import React from "react";
import { Grid } from "@material-ui/core";
import { data } from "../utils/data";
import PhotoCard from "./PhotoCard";

const Content = () => {
    const cardsList = data;
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

        console.log(favoriteListFiltered);
    };

    return (
        <>
            <Grid container spacing={1}>
                {cardsList.map((card) => (
                    <Grid item key={card.id}>
                        <PhotoCard
                            author={card.author}
                            subHeader={card.subheader}
                            image={card.image}
                            favorite={card.favorite}
                            likes={card.likes}
                            dislikes={card.dislikes}
                            onClick={() => handleClick(card)}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Content;

function removeEmptyKeys(list) {
    return Object.keys(list)
        .filter((k) => list[k] != null)
        .reduce((a, k) => ({ ...a, [k]: list[k] }), {});
}
