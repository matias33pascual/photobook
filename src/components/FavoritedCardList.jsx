import React from "react";
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    table: {
        minWidth: "200px",
    },
});

const FavoritedCardList = (props) => {
    const rows = props.favoriteList;
    const classes = useStyles();

    return (
        <TableContainer>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Author</TableCell>
                        <TableCell>Image</TableCell>
                        <TableCell>Quote</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {rows.length !== 0 &&
                        rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>
                                    <Typography>
                                        {row.firstName + " " + row.lastName}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <img src={row.image} width='100px' />
                                </TableCell>
                                <TableCell>{row.quote}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FavoritedCardList;
