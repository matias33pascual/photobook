import React from "react";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const FavoriteButton = (props) => {
    const { id, onFavoriteClick, favorite } = props;

    return (
        <IconButton onClick={() => onFavoriteClick(id)}>
            {favorite ? (
                <FavoriteIcon color='secondary' fontSize='small' />
            ) : (
                <FavoriteBorderIcon fontSize='small' />
            )}
        </IconButton>
    );
};

export default FavoriteButton;
