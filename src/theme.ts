import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    // h1: {
    //   fontSize: '2.5rem',
    // },
    // h2: {
    //   fontSize: '2rem',
    // },
    // button: {
    //   textTransform: 'none', 
    // },
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