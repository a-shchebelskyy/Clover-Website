/* eslint-disable jsx-a11y/alt-text */
import { Helmet } from 'react-helmet-async';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import {Container, Typography, Box, Drawer, Button } from '@mui/material';
import React, { useRef, u } from "react";
import { Link, useNavigate } from 'react-router-dom';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Logo from '../../components/logo';
import Header from '../../components/header/index';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  // [theme.breakpoints.up('lg')]: {
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
  // },
}));

const StyledSection = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 1280,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  boxShadow: theme.customShadows.card,
  backgroundColor: theme.palette.background.default,
}));

const HeroText = styled('div')(({ theme }) => ({
  maxWidth: 545,
  marginTop: 278,
  // marginBottom: 119,
  // minHeight: '100vh',
  // display: 'flex',
  // justifyContent: 'center',
  flexDirection: 'column',
  // padding: theme.spacing(12, 0),
  position: 'relative',
}));

const HeroImage = styled('div')(({ theme }) => ({
  zIndex: 3,
    position: 'absolute',
    top: 92,
    maxWidth: 1920,
    // minHeight: '100vh',
    // display: 'flex',
    // justifyContent: 'right',
    // flexDirection: 'column',
    // padding: theme.spacing(12, 0),
  }));

// ----------------------------------------------------------------------

export default function Home() {
  const theme = useTheme();
  const scrollToRef = useRef(null);
  const navigate = useNavigate();
  const mdUp = useResponsive('up', 'lg');

  return (
      <>
        <Helmet>
            <title>Clover | Home</title>
        </Helmet>
        <Header/>
        <StyledRoot 
          sx={{
            backgroundImage: "url('assets/images/covers/cover-hero-2.png')",
            backgroundRepeat: "no-repeat",
            // backgroundSize: 'cover',
            // position: 'absolute',
            // backgroundPosition: 'center center',
            width: '100%',
            height: '100%',
            // content: '""',
            // display: 'block',
          }}
        >
            <Container maxWidth="lg">
                <HeroText>
                    <Typography variant="h1" mb={2} color={theme.palette.background.paper}>
                        Insurance that pays off
                    </Typography>
                    <Typography variant="body1" mb={3} color={theme.palette.background.paper}>
                      Get up to 25% cashback on your auto and home insurance policy today with Clover
                    </Typography>
                    <Button size="large" type="button" variant="contained" href="/register" color={'inherit'} marginBottom={0}>
                        Learn how
                    </Button>
                </HeroText>
                {/* <HeroImage>
                    <img
                        src="assets/images/covers/cover-hero.png"
                        alt="hero"
                    />
                </HeroImage> */}
            </Container>
        </StyledRoot>
        {/* <Learn scrollToRef={scrollToRef} /> */}
        {/* <Trend /> */}
        {/* <Popular classSection="section-bg section-mb0" /> */}
        {/* <Steps /> */}
        {/* <News classSection="section-bg" /> */}
        {/* <Download /> */}
      </>
  );
}
