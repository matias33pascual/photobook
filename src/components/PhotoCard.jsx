import React from "react";
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

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
    },
    header: {
        marginTop: "-10px",
        marginLeft: "-10px",
        paddingBottom: "7px",
        backgroundColor: "rgb(90,100,230)",
    },
    avatar: {
        width: "50px",
        height: "50px",
    },
    media: {
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
        avatar,
        author,
        subheader,
        image,
        quote,
        favorite,
        likes,
        dislikes,
    } = props;

    return (
        <Card className={classes.root} variant='elevation'>
            <CardActionArea>
                <CardHeader
                    className={classes.header}
                    avatar={
                        <Avatar
                            src={avatar}
                            alt={author}
                            className={classes.avatar}
                        />
                    }
                    title={author}
                    subheader={subheader}
                />
            </CardActionArea>

            <CardMedia className={classes.media} image={image} />

            <CardContent className={classes.cardContent}>
                <Typography align='justify' variant='body2'>
                    {quote}
                </Typography>
            </CardContent>

            <CardActions disableSpacing className={classes.cardActions}>
                <FavoriteButton onClick={props.onClick} favorite={favorite} />
                <LikesButtons likes={likes} dislikes={dislikes} />
            </CardActions>
        </Card>
    );
};

export default PhotoCard;
