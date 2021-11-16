import React from "react";
import { Link } from "react-router-dom";
import {
    Avatar,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteButton from "./buttons/FavoriteButton";
import LikesButtons from "./buttons/LikesButtons";
import ShareButton from "./buttons/ShareButton";
import DownloadButton from "./buttons/DownloadButton";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        minWidth: "250px",
        maxWidth: "200px",
    },
    header: {
        marginTop: "-10px",
        marginLeft: "-5px",
        paddingBottom: "7px",
        backgroundColor: "rgb(90,100,230)",
        textDecoration: "none",
        color: "inherit",
    },
    avatar: {
        width: "50px",
        height: "50px",
    },
    media: {
        height: "0px",
        paddingTop: "56.25%",
    },
    cardContent: {
        [theme.breakpoints.up("md")]: {
            height: "100px",
        },
        [theme.breakpoints.only("sm")]: {
            height: "110px",
        },
        [theme.breakpoints.only("xs")]: {
            height: "80px",
        },
    },
    cardActions: {
        height: "10px",
        marginBottom: "15px",
    },
}));

const PhotoCard = (props) => {
    const classes = useStyles();
    const {
        id,
        avatar,
        firstName,
        authorPage,
        lastName,
        image,
        quote,
        favorite,
        onFavoriteClick,
        likes,
        dislikes,
    } = props;

    return (
        <Card className={classes.root} raised>
            <CardActionArea>
                <CardHeader
                    className={classes.header}
                    avatar={
                        <Avatar
                            src={avatar}
                            alt={firstName}
                            className={classes.avatar}
                        />
                    }
                    title={firstName}
                    subheader={lastName}
                    component={Link}
                    to={authorPage}
                />
            </CardActionArea>

            <CardMedia
                className={classes.media}
                image={image}
                title={lastName}
            />

            <CardContent className={classes.cardContent}>
                <Typography align='justify' variant='body2'>
                    {quote}
                </Typography>
            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}>
                <FavoriteButton
                    onFavoriteClick={onFavoriteClick}
                    id={id}
                    favorite={favorite}
                />
                <LikesButtons likes={likes} dislikes={dislikes} />
                <ShareButton />
                <DownloadButton />
            </CardActions>
        </Card>
    );
};

export default PhotoCard;
