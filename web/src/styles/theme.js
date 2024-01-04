import '@fontsource/noto-sans';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    h3: {
      fontFamily: 'Roboto',
      fontSize: '3rem',
      lineHeight: '1.75rem',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Roboto',
      fontSize: '2rem',
      lineHeight: '1.75rem',
      fontWeight: 500,
    },
    h5: {
      fontFamily: 'Roboto',
      fontSize: '1.5rem',
      lineHeight: '1.75rem',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Roboto',
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: '1.75rem',
    },
    subtitle1: {
      fontFamily: 'Roboto',
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: 700,
    },
    subtitle2: {
      fontFamily: 'Roboto',
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontWeight: 700,
    },
    body1: {
      fontFamily: 'Roboto',
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: 400,
    },
    body2: {
      fontFamily: 'Roboto',
      fontSize: '0.875rem',
      lineHeight: 1.43,
      fontWeight: 400,
    },
    caption: {
      fontFamily: 'Roboto',
      fontSize: '0.75rem',
      lineHeight: '1rem',
      fontWeight: 400,
    },
    button: {
      fontFamily: 'Roboto',
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '1.5rem',
    },
  },
});
export default theme;
