import React from "react";
import { Grid } from "@material-ui/core";
import { data } from "../utils/data";
import PhotoCard from "./PhotoCard";

const Content = () => {
    const cardsList = data;
    const favoriteList = [];

    const handleClick = (card) => {
        card.favorite = !card.favorite;

        if (card.favorite && favoriteList.indexOf(card.id) === -1) {
            favoriteList.push(card.id);
        } else {
            favoriteList.pop(card.id);
        }
    };

    return (
        <>
            <Grid container spacing={1}>
                {cardsList.map((card) => (
                    <Grid item key={card.id}>
                        <PhotoCard
                            author={"Mat"}
                            subHeader={"Xzun"}
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
