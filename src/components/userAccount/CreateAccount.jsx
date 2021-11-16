import React, { useState } from "react";
import httpServices from "../services/httpServices";
import config from "../services/config.json";
// import { toast } from "react-toastify";
import * as userService from "../services/userService";
import { Button, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const CreateAccount = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleChange = (e) => {
        const newUserData = { ...user };
        newUserData[e.target.name] = e.target.value;
        setUser(newUserData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await userService.createUser(user);
        } catch (ex) {
            // TODO: check error y mostrar algo en pantalla
        }

        //toast("revisa tu email!");
    };

    const [modal, setModal] = useState(false);

    const changeModalState = () => {
        setModal(!modal);
    };

    const openModal = () => {
        setModal(true);
    };

    const useStyle = makeStyles({
        paper: {
            width: 400,
            padding: 10,
        },
        title: {
            paddingTop: 10,
        },
        field: {
            marginTop: 20,
            marginBottom: 20,
            display: "block",
        },
    });

    const classes = useStyle();

    const body = (
        <Container maxWidth='sm'>
            <Paper elevation={8} className={classes.paper}>
                <Typography
                    variant='h5'
                    color='primary'
                    align='center'
                    gutterBottom
                    className={classes.title}>
                    Creando tu cuenta
                </Typography>
                <form action='' noValidate autoComplete='off'>
                    <TextField
                        variant='outlined'
                        label='Nombre'
                        color='secondary'
                        fullWidth
                        required
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={classes.field}
                    />
                    <TextField
                        variant='outlined'
                        label='Apellido'
                        color='secondary'
                        required
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={classes.field}
                    />
                    <TextField
                        variant='outlined'
                        label='Email'
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
                        Crear
                    </Button>
                </form>
            </Paper>
        </Container>
    );

    return (
        <>
            <Button onClick={() => openModal()}>Abrir</Button>
            {body}
            <Modal open={modal} onClose={changeModalState}>
                {body}
            </Modal>
            {/* <Container maxWidth=''>
                <Grid container direction={"column"}>
                    <Grid item>
                        <Typography variant='h5' component='div'>
                            Creando tu cuenta
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            id='firstName'
                            label='Nombre'
                            defaultValue=''
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id='firstName'
                            label='Apellido'
                            defaultValue=''
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id='firstName'
                            label='Email'
                            defaultValue=''
                        />
                    </Grid>
                </Grid>
            </Container> */}
        </>
        // {/* <h1>Creando tu cuenta de usuario</h1>
        // <form action='' onSubmit={handleSubmit}> */}
        // {/* <label htmlFor='firstName'>Nombre</label>
        //     <input
        //         type='text'
        //         name='firstName'
        //         id='firstName'
        //         value={user.firstName}
        //         onChange={handleChange}
        //     /> */}

        // {/* <label htmlFor='lastName'>Apellido</label>
        //     <input
        //         type='text'
        //         name='lastName'
        //         id='lastName'
        //         value={user.lastName}
        //         onChange={handleChange}
        //     />

        //     <label htmlFor='email'>Email</label>
        //     <input
        //         type='text'
        //         name='email'
        //         id='email'
        //         value={user.email}
        //         onChange={handleChange}
        //     />
        //     <button type='submit'>Crear</button>
        // </form> */}
    );
};

export default CreateAccount;
