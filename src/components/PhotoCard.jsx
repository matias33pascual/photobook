import React from "react";
import {
    Avatar,
    Box,
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

const useStyles = makeStyles({
    root: {
        width: "300px",
        height: "360px",
        border: "1px solid black",
    },
    header: {
        backgroundColor: "rgb(150,150,255)",
        border: "1px solid white",
        height: "60px",
    },
    media: {
        border: "1px solid white",
        paddingTop: "56.25%",
        height: "100px",
    },
    content: {
        border: "1px solid white",
    },
});

const PhotoCard = (props) => {
    const classes = useStyles();
    const { image, favorite, author, subHeader, likes, dislikes } = props;

    return (
        <Card className={classes.root} variant='outlined'>
            <CardActionArea>
                <CardHeader
                    className={classes.header}
                    avatar={<Avatar>M</Avatar>}
                    title={author}
                    subheader={subHeader}
                />
            </CardActionArea>

            <CardMedia className={classes.media} image={image} />

            <Box className={classes.content}>
                <CardContent>
                    <Typography align='justify' variant='body2'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                </CardContent>

                <CardActions disableSpacing>
                    <FavoriteButton
                        onClick={props.onClick}
                        favorite={favorite}
                    />
                    <LikesButtons likes={likes} dislikes={dislikes} />
                </CardActions>
            </Box>
        </Card>
    );
};

export default PhotoCard;
