import React from 'react'
import { useState } from 'react';
import {Grow, Avatar,Paper,Grid,Typography,Container, Button } from '@material-ui/core';
import {GoogleLogin } from '@react-oauth/google';
import  LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./styles";
import Input from './input';

const Auth = () => {
    const classes = useStyles();
    const [isSignup, setIsSignup] =useState(false) ;
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = () =>{};
    const handleChange = () =>{};
    const handleShowPassword = () =>setShowPassword((prevShowPassword) => !prevShowPassword);
    const switchMode = () => {setIsSignup((prevSignUp) => !prevSignUp); setShowPassword(false);};

    const googleSuccess = async (res) =>{
        console.log(res);
    };
    const googleFailure = (error) =>{
        console.log(error);
        console.log("Google Sign in was unsuccessful!");
    };
    
  return (
    <Grow in>

    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange}  half />
                            </>
                        )}
                        <Input name="email" label="Email Address"  handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password"  handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
                        {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
                </Grid>

                <Button type='submit' fullWidth variant="contained" color='primary' className={classes.submit}>
                    {isSignup ? 'Sign up' : 'Sign in'}
                </Button>

                    <GoogleLogin 
                       
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                    />

                <Grid container justify-content="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign In' : 'Dont have an account? Sign Up'}
                            </Button>
                        </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>
    </Grow>

  )
}
export default Auth