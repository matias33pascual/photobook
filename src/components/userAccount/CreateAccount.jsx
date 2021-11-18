import { Button, TextField, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import useUserData from "./../../hooks/useUserData";
import useModal from "./../../hooks/useModal";
import modalUserAccountStyle from "./../../style/modalUserAccountStyle";

const CreateAccount = () => {
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
                    action=''
                    autoComplete='off'
                    onSubmit={createUserAccount.createHandleSubmit}>
                    <TextField
                        autoFocus
                        required
                        name='firstName'
                        value={createUserAccount.userData.firstName}
                        onChange={createUserAccount.handleChange}
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
                        required
                        name='lastName'
                        value={createUserAccount.userData.lastName}
                        onChange={createUserAccount.handleChange}
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
                        required
                        name='email'
                        value={createUserAccount.userData.email}
                        onChange={createUserAccount.handleChange}
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
            <Button onClick={modalUserAccount.open}>Abrir</Button>
            <Modal
                open={modalUserAccount.modalState}
                onClose={modalUserAccount.close}>
                {body}
            </Modal>
        </>
    );
};

export default CreateAccount;
