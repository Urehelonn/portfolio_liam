import React, { useState } from 'react';
import NavBar from '@/components/common/navbar';
import { useRouter } from 'next/router';
import {
  Grid,
  Box,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Link,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/reduxs/store';
import authServices from '@/services/auth.services';
import { login } from '@/reduxs/slices/authSlices';

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (username.length <= 5 || password.length <= 5) {
      alert(
        'Please make sure your username and password has been entered correctly.'
      );
    } else {
      try {
        const userData = await authServices
          .login({ username, password })
          .then();
        dispatch(login(userData));
      } catch (error: any) {
        if (error.response.data) {
          alert(error.response.data);
        } else {
          alert('Login failed: ' + error.message);
        }
      }
    }
  };

  return (
    <div className={'min-w-[800px]'}>
      <div
        className={'m-auto relative z-5 mt-12 flex justify-center align-middle'}
        style={{ maxWidth: '80%' }}
      >
        <h3 className={'text-[45px] underline'}>Log In</h3>
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
            helperText="Need to be an valid email address. "
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
            helperText="Need to have 6 or more digit of mixed number and letters."
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
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
            <Grid item xs>
              <Link
                onClick={() => {
                  alert('Function is coming soon!');
                }}
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                onClick={() => {
                  router.push('/register').then();
                }}
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </div>
      <NavBar />
    </div>
  );
};

export default LoginPage;
