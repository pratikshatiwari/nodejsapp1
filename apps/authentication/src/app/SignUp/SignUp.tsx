import React, { useState } from 'react';
import { Typography, Box, Checkbox, Button, FormControl, InputLabel, TextField } from "@mui/material";
// import {ButtonE } from "@ss/common-components";
import styles from './SignUp.module.scss'; import { Link } from 'react-router-dom';

import { Footer, Header } from '@ss/common-components';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [formErrors, setFormErrors] = useState({
        email: '',
        mobile: '',
        checkbox: ''
    });

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateMobile = (mobile: string) => {
        return mobile.length === 10;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const errors = { email: '', mobile: '', checkbox: '' };

        if (!email || !validateEmail(email)) {
            errors.email = 'Please enter a valid email address';
        }

        if (!mobile || !validateMobile(mobile)) {
            errors.mobile = 'Please enter a valid 10-digit mobile number';
        }

        if (!isCheckboxChecked) {
            errors.checkbox = 'You must accept the terms of use';
        }

        setFormErrors(errors);

        if (!errors.email && !errors.mobile && !errors.checkbox) {
            console.log("Form submitted");
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setEmail(value);

        if (validateEmail(value)) {
            setFormErrors((prevErrors) => ({ ...prevErrors, email: '' }));
        }
    };

    const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setMobile(value);

        if (validateMobile(value)) {
            setFormErrors((prevErrors) => ({ ...prevErrors, mobile: '' }));
        }
    };

    const handleCheckboxChange = () => {
        setIsCheckboxChecked(!isCheckboxChecked);

        if (!isCheckboxChecked) {
            setFormErrors((prevErrors) => ({ ...prevErrors, checkbox: '' }));
        }
    };

    return (
        <Box className={styles.Full}>
            <Box>
                <Header showSearch={true} />

                <hr className={styles.customHr} />
            </Box>
            <div className={styles.AppContainer}>
                <div className={styles.container}>
                    <div className={styles.formContainer}>
                        <Box className={styles.header}>
                            <Typography variant="h2" className={styles.createAccountTitle}>
                                Create an Account
                            </Typography>
                        </Box>

                        <Box className={styles.buttonWrapper}>
                            <Button className={styles.facebookButton} variant="outlined"> Register with Facebook</Button>
                        </Box>

                        <Box className={styles.buttonWrapper}>

                            <Button className={styles.facebookButton} variant="outlined"> Register with Google</Button>
                        </Box>

                        <Box className={styles.emailWrapper}>
                            <Typography variant='h4' className={styles.emailText}>
                                Or create an account with email
                            </Typography>
                        </Box>

                        <form className={styles.form} onSubmit={handleSubmit}>
                           
                                <FormControl variant="outlined">
                                    <InputLabel shrink htmlFor="email">
                                        Email Address
                                    </InputLabel>
                                    <TextField className={styles.inputField} onChange={handleEmailChange} id="email" placeholder="Type email address"  />
                                </FormControl>
                                {formErrors.email && <Typography className={styles.error}>{formErrors.email}</Typography>}
                            
                          
                                <FormControl variant="outlined">
                                    <InputLabel shrink htmlFor="mobilno">
                                        Mobile No
                                    </InputLabel>
                                    <TextField className={styles.inputField} onChange={handleMobileChange} id="mobileno" placeholder="Type Mobile number"  />
                                </FormControl>
                                {formErrors.mobile && <Typography className={styles.error}>{formErrors.mobile}</Typography>}
                            

                            <Box className={styles.checkboxRow}>
                                <Checkbox
                                    className={styles.checkbox}
                                    checked={isCheckboxChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <Typography variant='h5' className={styles.checkboxLabel}>I Accept Terms of Use</Typography>
                                {formErrors.checkbox && <Typography className={styles.error}>{formErrors.checkbox}</Typography>}
                            </Box>
                            <Box className={styles.submitButtonWrapper}>
                                <Button className={styles.facebookButton} variant="outlined" type="submit">  Register now</Button>
                            </Box>
                        </form>
                    </div>

                    <div className={styles.loginContainer}>
                        <Box className={styles.innerBox}>
                            <Typography className={styles.haveAccountText}>Have an Account?</Typography>
                            <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Typography className={styles.loginText}>Login</Typography>
                            </Link>
                        </Box>
                    </div>
                </div>
            </div>
            <Footer />
        </Box>
    );
};

export default SignUp;
