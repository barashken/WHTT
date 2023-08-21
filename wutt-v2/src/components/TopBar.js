import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles'; // Import styled from @mui/material/styles
import { AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
    color: '#000000',
}));

const LogoImage = styled('img')({
    height: 130, // Adjust the height to your desired size
    marginRight: 16,
});

const TitleText = styled(Typography)({
  flexGrow: 1,
});

const LogoTitleContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column', // Align items vertically (text under the logo)
    alignItems: 'center', // Align items at the center horizontally
  });

  const ButtonContainer = styled('div')({
    marginLeft: 'auto', // This pushes the buttons to the right
  });

const TopBar = ( { showButtons = true }) => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <LogoTitleContainer>
            {/* Logo (adjust the path to your logo image) */}
            <Link to="/">
                <LogoImage src="\wuttlogo.png" alt="Logo" />
            </Link>
            <TitleText variant="h6">With Us To Travel</TitleText>
        </LogoTitleContainer>
        {showButtons && ( // Show buttons only if showButtons is true}
        <ButtonContainer>
            <Button color="inherit" size='large' component={Link} to="/signup">Sign Up</Button>
            {/* Sign In Button */}
            <Button color="inherit" size='large' component={Link} to="/signin">Sign In</Button>
            {/* Sign Out Button */}
            <IconButton color="inherit" size='large'>
            <AccountCircle />
            </IconButton>
        </ButtonContainer>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default TopBar;
