import { Button, TextField, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import useUserData from "../../hooks/useUserData";
import useModal from "../../hooks/useModal";
import modalUserAccountStyle from "../../style/modalUserAccountStyle";

const Register = () => {
    const createUserAccount = useUserData({
        firstName: "",
        lastName: "",
        email: "",
    });

    const modalUserAccount = useModal(false);
    const classes = modalUserAccountStyle();

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
                <form
                    autoComplete='off'
                    onSubmit={createUserAccount.createHandleSubmit}>
                    <TextField
                        value={createUserAccount.userData.firstName}
                        onChange={createUserAccount.handleChange}
                        autoFocus
                        required
                        label='Nombre'
                        name='firstName'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={classes.field}
                    />
                    <TextField
                        value={createUserAccount.userData.lastName}
                        onChange={createUserAccount.handleChange}
                        required
                        label='Apellido'
                        name='lastName'
                        variant='outlined'
                        color='secondary'
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={classes.field}
                    />
                    <TextField
                        value={createUserAccount.userData.email}
                        onChange={createUserAccount.handleChange}
                        required
                        label='Email'
                        name='email'
                        variant='outlined'
                        color='secondary'
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
            <Button onClick={modalUserAccount.open}>Abrir</Button>
            <Modal
                open={modalUserAccount.modalState}
                onClose={modalUserAccount.close}>
                {body}
            </Modal>
        </>
    );
};

export default Register;
