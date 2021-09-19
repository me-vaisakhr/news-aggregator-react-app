import { lightTheme, darkTheme } from '../theme/Theme';
import useDarkMode from 'use-dark-mode' 
import { ThemeProvider } from '@material-ui/core';
export default ({ children }) => {
  const { value } = useDarkMode()
  const theme = value ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}