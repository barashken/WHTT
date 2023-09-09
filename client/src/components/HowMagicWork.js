import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CenteredContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  minHeight: '100vh',
});

const TextContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#B48665', // Brown background color
  color: 'black', // Text color
  padding: '16px',
  borderRadius: '50px', // Rounded corners
  marginBottom: '16px', // Add spacing between text containers
});

const LogoContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const LogoImage = styled('img')({
  height: 130,
  marginRight: 16,
});

const FlyLogoImage = styled('img')({
  height: 170,
  marginRight: 16,
});

const SmallArrowLogo = styled('img')({
  height: 50,
  marginRight: 16,
});

const HowMagicWork = () => {
  return (
    <CenteredContainer>
      <TextContainer>
        <Typography variant="h2" gutterBottom fontFamily="Jura, Arial, sans-serif">
            How The Magic Works?
        </Typography>
        <Typography variant="h5" gutterBottom fontFamily="Jura, Arial, sans-serif">
            All you have to do is choose the destination and the type of trip you desire, <br />
            and experience the trip of a lifetime with our artificial intelligence planning services! <br />    
            Best of all, this entire experience is completely free!
        </Typography>
      </TextContainer>
      <LogoContainer>
        <LogoImage src="\comp.png" />
        <SmallArrowLogo src="\arrow.png" />
        <LogoImage src="\luggage.png" />
        <SmallArrowLogo src="\arrow.png" />
        <FlyLogoImage src="\fly.png" />
      </LogoContainer>
    </CenteredContainer>
  );
};

export default HowMagicWork;
