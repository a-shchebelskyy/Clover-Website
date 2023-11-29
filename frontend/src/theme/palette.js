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
  lighter: '#E0F1DB', // 7 up
  light: '#A2D492', // 4 up
  main: '#64B74A',
  dark: '#3C6E2C', // 4 down
  darker: '#28491E', // 7 down
  contrastText: '#fff',
};

const SECONDARY = {
  lighter: '#D6EDF2',
  light: '#85CAD7',
  main: '#33A7BD',
  dark: '#1F6471',
  darker: '#0F3239',
  contrastText: '#fff',
};

const INFO = {
  lighter: '#DBE0F1',
  light: '#92A2D4',
  main: '#4A64B7',
  dark: '#2C3C6E',
  darker: '#1E2849',
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
  lighter: '#F1EFDB',
  light: '#D4CE92',
  main: '#B7AD4A',
  dark: '#6E682C',
  darker: '#49451E',
  contrastText: GREY[800],
};

const ERROR = {
  lighter: '#F1DCDB',
  light: '#D49692',
  main: '#B7504A',
  dark: '#6E302C',
  darker: '#49201E',
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
