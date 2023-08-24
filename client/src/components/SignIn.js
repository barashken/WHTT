import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { backendUrl } from '../constants';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function validateEmail(email) {
  // Use a simple regex to check email format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export default function SignIn() {
  const navigate = useNavigate();
  const [emailMessage, setErrorEmail] = useState(''); // ['Email is already taken', 'Password must be at least 8 characters long']
  const [passwordMessage, setErrorPassword] = useState(''); // ['Email is already taken', 'Password must be at least 8 characters long']
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const email = formData.get('email');
    const password = formData.get('password');

    if (!validateEmail(email)) {
      setErrorEmail('Invalid email format');
      setIsEmailInvalid(true);
    }
    else {
      setIsEmailInvalid(false);
    }
  
    if (password.length < 8) {
      setErrorPassword('Password must be at least 8 characters');
      setIsPasswordInvalid(true);
    }
    else {
      setIsPasswordInvalid(false);
    }

    if (isEmailInvalid || isPasswordInvalid) {
      return;
    }

    if (!validateEmail(email)) {
      setErrorEmail('Invalid email format');
      setIsEmailInvalid(true);
    }
    else {
      setIsEmailInvalid(false);
    }
  
    if (password.length < 8) {
      setErrorPassword('Password must be at least 8 characters');
      setIsPasswordInvalid(true);
    }
    else {
      setIsPasswordInvalid(false);
    }

    if (isEmailInvalid || isPasswordInvalid) {
      return;
    }

    try {
      const response = await fetch(backendUrl + '/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
      });

      const responseData = await response.json();
      console.log(responseData); // Handle response from the server

      if (response.ok) {
        // Redirect to the registration-done page
        navigate('/login-done', {
          state: {
          email,
          },
        });
      }
      else {
        // Handle error messages
        if (responseData.error.includes('email')) {
          setErrorEmail(responseData.error);
          setIsEmailInvalid(true);
        }
        else if (responseData.error.includes('password')) {
          setErrorPassword(responseData.error);
          setIsPasswordInvalid(true);
      }
    }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              error={isEmailInvalid}
              helperText={isEmailInvalid ? emailMessage : ''}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={isPasswordInvalid}
              helperText={isPasswordInvalid ? passwordMessage : ''}
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
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
