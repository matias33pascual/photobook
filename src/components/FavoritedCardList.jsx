import React, { useState } from "react";
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Typography,
    TablePagination,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    table: {
        minWidth: "200px",
    },
});

const FavoritedCardList = (props) => {
    const classes = useStyles();

    const rows = props.favoriteList;

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows =
        rowsPerPage / Math.min(rowsPerPage, rows.length - page * rowsPerPage);

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
                        rows
                            .slice(
                                page * rowsPerPage,
                                page * rowsPerPage + rowsPerPage
                            )
                            .map((row, index) => (
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
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component='div'
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </TableContainer>
    );
};

export default FavoritedCardList;
