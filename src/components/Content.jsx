import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import PhotoCard from "./PhotoCard";
import { fetchData } from "../mockdata/data";
import { removeEmptyKeys } from "../utils/functions";

const Content = () => {
    const [cardsList, setCardsList] = useState([]);
    const favoriteList = [];

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await fetchData();
        setCardsList(data);
    };

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

    const getCard = (card) => (
        <PhotoCard
            avatar={card.avatar}
            author={card.author}
            subheader={card.subheader}
            image={card.image}
            quote={card.quote}
            favorite={card.favorite}
            likes={card.likes}
            dislikes={card.dislikes}
            onClick={() => handleClick(card)}
        />
    );

    return (
        <>
            <Grid container spacing={1}>
                {cardsList.map((card) => {
                    return (
                        <Grid item key={card.id} xs={12} sm={6} md={4}>
                            {getCard(card)}
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};

export default Content;
