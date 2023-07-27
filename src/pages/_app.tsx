// pages/_app.tsx
import { CssBaseline, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import theme from '../styles/theme'; // You need to create this theme file

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
