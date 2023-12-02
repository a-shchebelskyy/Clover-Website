import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

const PRIMARY = {
  lighter: '#DDF7D5', // 7 up
  light: '#AAEB96', // 4 up
  main: '#54D62C',
  dark: '#32801A', // 3 down
  darker: '#19400D', // 6 down
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#E0D5F7',
  light: '#B296EB',
  main: '#652CD6',
  dark: '#3D1A80',
  darker: '#281256',
  contrastText: '#fff',
};

const INFO = {
  lighter: '#D5E6F7',
  light: '#96C2EB',
  main: '#2C84D6',
  dark: '#1A4F80',
  darker: '#123556',
  contrastText: '#fff',
};

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: GREY[800],
};

const WARNING = {
  lighter: '#F7F4D5',
  light: '#EBE396',
  main: '#D6C72C',
  dark: '#80771A',
  darker: '#565012',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#F7D7D5',
  light: '#EB9A96',
  main: '#D6352C',
  dark: '#80201A',
  darker: '#561512',
  contrastText: '#fff',
};

const palette = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: PRIMARY,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: '#fff',
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
