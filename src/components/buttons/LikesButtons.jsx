import React, { useState } from "react";
import { IconButton, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";

const useStyles = makeStyles({
    root: {
        marginTop: "-5px",
        marginBottom: "2px",
    },
    text: {
        margin: "0px 10px -10px",
        fontSize: "12px",
    },
});

const LikesButtons = (props) => {
    const classes = useStyles();
    const { likes: likesNumber, dislikes: dislikesNumber } = props;
    const [likes, setLikes] = useState(likesNumber);
    const [dislikes, setDislikes] = useState(dislikesNumber);
    const [reaction, setReaction] = useState();

    const handleClick = (thumb) => {
        if (reaction === thumb) {
            if (thumb === "up") {
                setLikes(likes - 1);
            } else {
                setDislikes(dislikes - 1);
            }
            setReaction(false);
        } else {
            if (thumb === "up") {
                setLikes(likes + 1);

                if (reaction === "down") {
                    setDislikes(dislikes - 1);
                }
            } else {
                setDislikes(dislikes + 1);

                if (reaction === "up") {
                    setLikes(likes - 1);
                }
            }
            setReaction(thumb);
        }
    };

    return (
        <>
            <Grid container className={classes.root}>
                <Grid item>
                    <Typography className={classes.text}>{likes}</Typography>
                    <IconButton onClick={() => handleClick("up")}>
                        {reaction === "up" ? (
                            <ThumbUpIcon fontSize='small' color='primary' />
                        ) : (
                            <ThumbUpOutlinedIcon fontSize='small' />
                        )}
                    </IconButton>
                </Grid>
                <Grid item style={{ marginLeft: "-10px" }}>
                    <Typography className={classes.text}>{dislikes}</Typography>
                    <IconButton onClick={() => handleClick("down")}>
                        {reaction === "down" ? (
                            <ThumbDownIcon fontSize='small' color='primary' />
                        ) : (
                            <ThumbDownOutlinedIcon fontSize='small' />
                        )}
                    </IconButton>
                </Grid>
            </Grid>
        </>
    );
};

export default LikesButtons;
