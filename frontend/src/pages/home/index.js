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
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
  },
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
  marginTop: 240,
  marginBottom: 143,
  // minHeight: '100vh',
  // display: 'flex',
  // justifyContent: 'center',
  flexDirection: 'column',
  // padding: theme.spacing(12, 0),
  position: 'relative',
}));

const HeroImage = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 100,
    right: `calc(50% - 750px)`,
    maxWidth: 913,
    margin: 'auto',
    // minHeight: '100vh',
    display: 'flex',
    justifyContent: 'right',
    // flexDirection: 'column',
    // padding: theme.spacing(12, 0),
  }));

// ----------------------------------------------------------------------

export default function Home() {
  const theme = useTheme();
  const scrollToRef = useRef(null);
  const navigate = useNavigate();
  const mdUp = useResponsive('up', 'lg');

  const GREY = theme.palette.text.secondary;

  return (
      <>
        <Header/>
        <Helmet>
            <title>Clover</title>
        </Helmet>

        <StyledRoot>
            <Container maxWidth="lg">
                <HeroText>
                    <Typography variant="h1" mb={2}>
                        Insurance that pays off
                    </Typography>
                    <Typography variant="body1" mb={3} color={GREY}>
                        Clover merges customer service, integrity, and innovation, rewarding you with a revolutionary coverage experience.
                    </Typography>
                    <Button size="large" type="button" variant="contained" href="/register" marginBottom={80}>
                        Get started
                    </Button>
                </HeroText>
                <HeroImage>
                    <img
                        src="assets/images/covers/cover.png"
                        alt="hero"
                    />
                </HeroImage>
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
