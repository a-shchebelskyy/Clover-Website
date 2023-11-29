/* eslint-disable import/no-duplicates */
/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types';
// hooks
import { useEffect } from 'react';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Typography, Stack, AppBar, Drawer, Toolbar, Button, ListItemButton } from '@mui/material';
// utils
import { useLocation, useNavigate, NavLink as RouterLink } from 'react-router-dom';
import useResponsive from '../../hooks/useResponsive';

//
// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
    [theme.breakpoints.up('lg')]: {
      width: `100%`,
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.customShadows.card,
      display: 'flex',
    },
  }));
  
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    minHeight: HEADER_MOBILE,
    flexDirection: 'row',
    alignSelf: 'center',
    display: 'flex',
    // marginRight: 'auto',
    width: `100%`,
    maxWidth: 1280,
    [theme.breakpoints.up('lg')]: {
      minHeight: HEADER_DESKTOP,
      padding: theme.spacing(0, 5),
    },
  }));

  const NavLinks = styled('div')(({ theme }) => ({
    marginLeft: 'auto',
    display: 'inline-flex',
    alignSelf: 'center',
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 5),
    },
  }));

  const NavButtons = styled('div')(({ theme }) => ({
    marginLeft: 'auto',
    display: 'inline-flex',
    alignSelf: 'right',
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 5),
    },
  }));



// ----------------------------------------------------------------------

export default function Header() {
    const navigate = useNavigate();
    const theme = useTheme();

    const { pathname } = useLocation();

    const isDesktop = useResponsive('up', 'lg');

    const home =()=>{
        navigate('/')
    }

    const GREY = theme.palette.text.secondary;

    return (
        <StyledRoot>
                <StyledToolbar>
                    <Box sx={{ py: 3, display: 'inline-flex', cursor: "pointer" }} onClick={home}>
                        <img src="/assets/logo-full-1.png" height={40}  />
                    </Box>
                    <NavLinks>
                        <ListItemButton
                            component={RouterLink}
                            to={"/login"}
                            sx={{
                                height: 48,
                                marginRight: 2,
                                position: 'relative',
                                color: theme.palette.text.secondary,
                                borderRadius: theme.shape.borderRadius,
                                '&.active': {
                                    color: 'text.primary',
                                  },
                            }}
                        >
                            Services
                        </ListItemButton>
                        <ListItemButton
                            component={RouterLink}
                            to={"/login"}
                            sx={{
                                height: 48,
                                marginRight: 2,
                                position: 'relative',
                                color: theme.palette.text.secondary,
                                borderRadius: theme.shape.borderRadius,
                                '&.active': {
                                    color: 'text.primary',
                                  },
                            }}
                        >
                            About
                        </ListItemButton>
                        <ListItemButton
                            component={RouterLink}
                            to={"/login"}
                            sx={{
                                height: 48,
                                marginRight: 2,
                                position: 'relative',
                                color: theme.palette.text.secondary,
                                borderRadius: theme.shape.borderRadius,
                                '&.active': {
                                    color: 'text.primary',
                                  },
                            }}
                        >
                            FAQ
                        </ListItemButton>
                        <ListItemButton
                            component={RouterLink}
                            to={"/login"}
                            sx={{
                                height: 48,
                                position: 'relative',
                                color: theme.palette.text.secondary,
                                borderRadius: theme.shape.borderRadius,
                                '&.active': {
                                    color: 'text.primary',
                                  },
                            }}
                        >
                            Contact
                        </ListItemButton>
                    </NavLinks>
                    <NavButtons>
                        <Button sx={{ mr: 1 }} size="medium" type="button" variant="contained" href="/register">
                            Sign Up
                        </Button>
                        <Button size="medium" type="button" variant="outlined" href="/login">
                            Login
                        </Button>
                    </NavButtons>
                </StyledToolbar>
        </StyledRoot>
    );
}
  