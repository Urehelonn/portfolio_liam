import React, { useState } from 'react';
import NavBar from '@/components/common/navbar';
import { useRouter } from 'next/router';
import { Grid, Box, TextField, Button, Link } from '@mui/material';
import authServices from '@/services/auth.services';

const RegisterPage = () => {
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get('email') as string;
    const password = formData.get('password') as string;
    const passwordConfirmation = formData.get('passwordConfirmation') as string;
    if (passwordConfirmation !== password) {
      alert('Passwords entered do not match, please try again!');
    } else {
      await authServices.register({ username, password }).then(

      );
    }
  };

  return (
    <div className={'min-w-[800px]'}>
      <div
        className={'m-auto relative z-5 mt-12 flex justify-center align-middle'}
        style={{ maxWidth: '80%' }}
      >
        <h3 className={'text-[45px] underline'}>Sign Up</h3>
      </div>
      <div
        className={
          'm-auto mt-[8px] flex flex-col align-middle max-w-screen-lg ' +
          'border-2 rounded-lg border-white p-[20px]'
        }
      >
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            className={'mt-3'}
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            className={'mt-3'}
            required
            fullWidth
            label="Password Confirmation"
            name="passwordConfirmation"
            type="password"
            id="passwordConfirmation"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link
                onClick={() => {
                  router.push('/login').then();
                }}
              >
                {'Already have an account? Log In'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </div>
      <NavBar />
    </div>
  );
};

export default RegisterPage;
