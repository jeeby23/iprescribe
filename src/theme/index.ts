import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: { main: '#2065D1' },
    secondary: { main: '#F56565' },
    text: { secondary: '#718096' },
  },
  typography: {
    fontFamily: '"Onest", "Inter", "Roboto", sans-serif',
    h1: {
      fontFamily: '"Onest", sans-serif',
      fontWeight: 500,
      fontSize: '64px',
      lineHeight: '72px',
      letterSpacing: '-0.04em',
    },
  },
});