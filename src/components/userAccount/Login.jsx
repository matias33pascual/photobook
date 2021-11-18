import { Button, TextField, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { Modal } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import useUserData from "./../../hooks/useUserData";
import useModal from "./../../hooks/useModal";
import modalUserAccountStyle from "./../../style/modalUserAccountStyle";

const Login = () => {
    const loginUser = useUserData({
        email: "",
        password: "",
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
                    Login
                </Typography>
                <form
                    action=''
                    autoComplete='off'
                    onSubmit={loginUser.loginHandleSubmit}>
                    <TextField
                        autoFocus
                        required
                        name='email'
                        value={loginUser.userData.email}
                        onChange={loginUser.handleChange}
                        variant='outlined'
                        label='Email'
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
                        name='password'
                        value={loginUser.userData.password}
                        onChange={loginUser.handleChange}
                        variant='outlined'
                        label='Password'
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
                        Login
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

export default Login;
