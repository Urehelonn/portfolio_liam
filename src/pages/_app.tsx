import {CssBaseline, ThemeProvider} from '@mui/material';
import {AppProps} from 'next/app';
import theme from '../styles/theme';
import '../assets/font/fonts.css';
import '../styles/globals.css';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Component {...pageProps}
                       style={{
                           backgroundColor: theme.palette.primary.main,
                           color: theme.palette.text.primary
                       }}
            />
        </ThemeProvider>
    );
}

export default MyApp;
