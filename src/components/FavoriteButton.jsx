import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const FavoriteButton = (props) => {
    const [favorite, setFavorite] = useState(props.favorite || false);

    const handleClick = () => {
        setFavorite(!favorite);
        if (props.onClick) props.onClick();
    };

    const renderIcon = () => {
        return favorite ? (
            <FavoriteIcon color='secondary' fontSize='small' />
        ) : (
            <FavoriteBorderIcon color='action' fontSize='small' />
        );
    };

    return (
        <IconButton onClick={() => handleClick()}>{renderIcon()}</IconButton>
    );
};

export default FavoriteButton;
