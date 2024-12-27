// Login.tsx
import React, { useState } from 'react';
import { Box, Typography, Button, TextField, FormControl, InputLabel } from '@mui/material';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { Footer, Header } from '@ss/common-components';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Logging in with:', { username, password });
    };

    const handleCancel = () => {
        setUsername('');
        setPassword('');
        navigate('/authentication');
    };

    return (
        <Box>
            <Header />
            <Box className={styles.Full}>

                <hr className={styles.customHr} />
                <div className={styles.AppContainer}>
                    <div className={styles.LoginContainer}>
                        <Box className={styles.head}>
                            <Typography
                                variant="h6"
                                className={styles.loginTitle}
                            >
                                Login
                            </Typography>
                        </Box>

                        <form className={styles.form} onSubmit={handleLogin}>
                           

                                <FormControl variant="outlined">
                                    <InputLabel shrink htmlFor="username">
                                        Username
                                    </InputLabel>
                                    <TextField onChange={handleUsernameChange} id="username" placeholder="Type Username" />
                                </FormControl>

                            

                           

                                <FormControl variant="outlined">
                                    <InputLabel shrink htmlFor="password">
                                        Password
                                    </InputLabel>
                                    <TextField onChange={handlePasswordChange} id="password" placeholder="Type Password" />
                                </FormControl>
                            

                           
                                <Link to="/" >
                                    <Typography className={styles.label1}> Forgot Password</Typography>
                                </Link>
                        

                            <Box className={styles.buttonWrapper}>
                               
                                <Button onClick={handleCancel} className={styles.cancelButton} variant="outlined">Cancel</Button>
                                
                                <Button className={styles.loginButton} variant="contained" color="primary" size="large">
                                    Login
                                </Button>
                            </Box>
                        </form>
                    </div>
                </div>

            </Box>
            <Box component="footer"
                position="fixed"
                bottom={0}
                left={0}
                width="100%"
                display="flex"
                justifyContent="center"
                alignItems="center">
                <Footer />
            </Box>
        </Box>
    );
};

export default Login;
