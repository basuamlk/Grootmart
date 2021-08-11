import { createTheme } from '@material-ui/core/styles';

const appTheme = createTheme({
  palette: {
    primary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      textPrimary: '#000000',
    },
    secondary: {
      light: '#ff5131',
      main: '#d60000',
      dark: '#9c0000',
      textSecondary: '#ffffff',
    },
  },
});

export default appTheme;
