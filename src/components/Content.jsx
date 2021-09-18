import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { getAvatars, getImages, getQuotes, getRandom } from "../utils/data";
import PhotoCard from "./PhotoCard";

const Content = () => {
    const [cardsList, setCardsList] = useState([]);
    const favoriteList = [];

    useEffect(() => {
        async function fetchData() {
            const avatar = getAvatars();
            const images = getImages();
            const quotes = await getQuotes();

            const newCardList = [];
            for (let i = 0; i < 20; i++) {
                const { first_name, last_name, url } = avatar[getRandom(0, 49)];

                newCardList.push({
                    id: i,
                    author: first_name,
                    subheader: last_name,
                    avatar: url,
                    image: images[i],
                    favorite: false,
                    likes: getRandom(7000, 2500),
                    dislikes: getRandom(500, 50),
                    quote: quotes[i],
                });
            }

            setCardsList(newCardList);
        }

        fetchData();
    }, []);

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

    return (
        <>
            <Grid container spacing={1}>
                {cardsList.map((card) => (
                    <Grid item key={card.id}>
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
