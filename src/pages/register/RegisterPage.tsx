import React, { useEffect, useState } from 'react';
import NavBar from '@/components/common/navbar';
import { useRouter } from 'next/router';
import { Grid, Box, TextField, Button, Link } from '@mui/material';
import authServices from '@/services/auth.services';
import { emailValidator, passwordValidator } from '@/logic/formValidator';

const RegisterPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirmation: '',
  });

  const [fieldDirty, setFieldDirty] = useState({
    username: false,
    password: false,
    passwordConfirmation: false,
  });

  const [validationErrors, setValidationErrors] = useState({
    username: { display: false, msg: '' },
    password: {
      display: false,
      msg: '',
    },
    passwordConfirmation: {
      display: false,
      msg: '',
    },
  });

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // if (formData.passwordConfirmation !== formData.password) {
    //   alert('Passwords entered do not match, please try again!');
    // } else {
    //   const infoSubmission = {
    //     username: formData.email,
    //     password: formData.password,
    //   };
    //   try {
    //     await authServices.register(infoSubmission).then(() => {
    //       alert('Register succeed. Welcome! :D');
    //     });
    //   } catch (error: any) {
    //     if (error.response.data) {
    //       alert(error.response.data);
    //     } else {
    //       console.log(error);
    //     }
    //   }
    // }
  };

  const passConfirmationValidator = (pwd: string, pwdConf: string): string => {
    return pwd == pwdConf ? '' : 'Must match with the password.';
  };

  useEffect(() => {
    if (fieldDirty.username) {
      const err = emailValidator(formData.username);
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        username: {
          display: err.length > 0,
          msg: err,
        },
      }));
    }

    if (fieldDirty.password) {
      const err = passwordValidator(formData.password);
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        password: {
          display: err.length > 0,
          msg: err,
        },
      }));
    }

    if (fieldDirty.passwordConfirmation) {
      const err = passConfirmationValidator(
        formData.password,
        formData.passwordConfirmation
      );
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        passwordConfirmation: {
          display: err.length > 0,
          msg: err,
        },
      }));
    }
  }, [formData, fieldDirty]);

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
        <Box component="form" onSubmit={handleRegister} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Email Address"
            name="username"
            autoComplete="username"
            autoFocus
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            onBlur={() => {
              setFieldDirty((prev) => ({
                ...prev,
                username: true,
              }));
            }}
            error={validationErrors.username.display}
            helperText={
              validationErrors.username.display && validationErrors.username.msg
            }
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
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            onBlur={() => {
              setFieldDirty((prev) => ({
                ...prev,
                password: true,
              }));
            }}
            error={validationErrors.password.display}
            helperText={
              validationErrors.password.display && validationErrors.password.msg
            }
          />
          <TextField
            className={'mt-3'}
            required
            fullWidth
            label="Password Confirmation"
            name="passwordConfirmation"
            type="password"
            id="passwordConfirmation"
            onChange={(e) =>
              setFormData({ ...formData, passwordConfirmation: e.target.value })
            }
            onBlur={() => {
              setFieldDirty((prev) => ({
                ...prev,
                passwordConfirmation: true,
              }));
            }}
            error={validationErrors.passwordConfirmation.display}
            helperText={
              validationErrors.passwordConfirmation.display &&
              validationErrors.passwordConfirmation.msg
            }
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={
              !fieldDirty.username ||
              !fieldDirty.password ||
              !fieldDirty.passwordConfirmation ||
              validationErrors.username.display ||
              validationErrors.password.display ||
              validationErrors.passwordConfirmation.display
            }
          >
            Sign Up
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
