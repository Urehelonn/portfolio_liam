import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import theme from '../styles/theme';
import '../assets/font/fonts.css';
import '../styles/globals.css';
import { StyledEngineProvider } from '@mui/material/styles';

import ReduxProvider from '../reduxs/provider';

export const metadata = {
  title: "Liam's Page",
  description: 'A fun site to build using Next.js, Spring Boot, and Cypress :3',
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <ReduxProvider>
          <Component
            {...pageProps}
            style={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.text.primary,
            }}
          />
        </ReduxProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default MyApp;
