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
    AccordionSummary,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteButton from "./buttons/FavoriteButton";
import LikesButtons from "./buttons/LikesButtons";

const useStyles = makeStyles({
    root: {
        width: "300px",
        height: "350px",
        border: "1px solid rgb(220,220,220)",
    },
    header: {
        backgroundColor: "rgb(150,150,255)",
        height: "60px",
    },
    media: {
        marginTop: "1px",
        paddingTop: "56.25%",
    },
    content: {
        margin: "-5px",
        marginTop: "-10px",
    },
});

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
        <Card className={classes.root} variant='outlined'>
            <CardActionArea>
                <CardHeader
                    className={classes.header}
                    avatar={
                        <Avatar
                            src={avatar}
                            alt={author}
                            style={{
                                width: 54,
                                height: 54,
                                marginLeft: -12,
                            }}
                        />
                    }
                    title={author}
                    subheader={subheader}
                />
            </CardActionArea>

            <CardMedia className={classes.media} image={image} />

            <Box className={classes.content}>
                <CardContent style={{ height: "75px" }}>
                    <Typography align='justify' variant='body2'>
                        {quote}
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
