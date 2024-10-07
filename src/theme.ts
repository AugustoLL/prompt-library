import { createTheme } from '@mui/material/styles';

// https://coolors.co/palettes/popular/coffee

const theme = createTheme({
  palette: {
    primary: {
      main: '#a56236',
    },
    secondary: {
      main: '#a53641',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    h1: {
      fontFamily: 'Playfair Display, serif',
    },
    h2: {
      fontFamily: 'Playfair Display, serif',
    },
    body1: {
      fontFamily: 'Inter, sans-serif',
    },
    body2: {
      fontFamily: 'Inter, sans-serif',
    },
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         borderRadius: 8, // Customize button appearance
  //       },
  //     },
  //   },
  // },
});

export default theme;