import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function LoginDone() {
    const location = useLocation();
    const { email } = location.state || {};

    const buttonStyle = {
        borderRadius: '50px',
        display: 'inline-flex',
        textTransform: 'none', // To prevent uppercase text
        fontWeight: 'bold', // Set font weight if needed
        fontFamily: 'Jura, Arial, sans-serif',
        padding: '15px 45px',
        gap: '10px',
        fontSize: '1.5rem',
      };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      };

    return (
    <Container component="main" maxWidth="m">
        <Typography variant="h4" align="center" gutterBottom>
        Hi {email}!
        </Typography>
        <Typography variant="h4" align="center" gutterBottom>
        Welcome back to WUTT!
        </Typography>
        <div style={containerStyle}>
            <Button
            align="center" gutterBottom
            component={Link}
            to="/"
            variant="contained"
            style={buttonStyle}
            sx={{ mt: 3 }}
            >
            Home Page
            </Button>
        </div>
       
    </Container>
    );
}