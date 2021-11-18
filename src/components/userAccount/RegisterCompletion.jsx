import React, { useState } from "react";
import * as userService from "../services/userService";

import { Button, TextField, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import useUserData from "./../../hooks/useUserData";
import useModal from "./../../hooks/useModal";
import modalUserAccountStyle from "./../../style/modalUserAccountStyle";

const RegisterCompletion = ({ location }) => {
    const URLParams = new URLSearchParams(location.search);

    const userToken = URLParams.get("token");
    const userEmail = URLParams.get("email");

    const user = useUserData({
        password: "",
        passwordConfirm: "",
    });

    const modalUserAccount = useModal(true);
    const classes = modalUserAccountStyle();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newUser = {
                email: userEmail,
                password: user.userData.password,
                token: userToken,
            };
            await userService.registerUser(newUser);
        } catch (ex) {
            // TODO: check error y mostrar algo en pantalla
        }
    };

    const body = (
        <Container maxWidth='sm'>
            <Paper elevation={8} className={classes.paper}>
                <Typography
                    variant='h5'
                    color='primary'
                    align='center'
                    gutterBottom
                    className={classes.title}>
                    Completando su registro
                </Typography>
                <form action='' autoComplete='off' onSubmit={handleSubmit}>
                    <TextField
                        disabled
                        defaultValue={userEmail}
                        name='email'
                        variant='outlined'
                        label='Email'
                        color='secondary'
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={classes.field}
                    />
                    <TextField
                        autoFocus
                        required
                        name='password'
                        value={user.userData.password}
                        onChange={user.handleChange}
                        variant='outlined'
                        label='Ingrese su password'
                        color='secondary'
                        fullWidth
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={classes.field}
                    />
                    <TextField
                        required
                        name='passwordConfirm'
                        value={user.userData.passwordConfirm}
                        onChange={user.handleChange}
                        variant='outlined'
                        label='Confirme su password'
                        color='secondary'
                        required
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={classes.field}
                    />
                    <Button
                        type='submit'
                        color='secondary'
                        variant='contained'
                        size='small'>
                        Registrarse
                    </Button>
                </form>
            </Paper>
        </Container>
    );

    return (
        <>
            <Button onClick={modalUserAccount.open}>Abrir</Button>
            <Modal
                open={modalUserAccount.modalState}
                onClose={modalUserAccount.close}>
                {body}
            </Modal>
        </>
    );
};

export default RegisterCompletion;
