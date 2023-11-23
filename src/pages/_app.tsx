import {CssBaseline, ThemeProvider} from '@mui/material';
import {AppProps} from 'next/app';
import theme from '../styles/theme';
import '../assets/font/fonts.css';
import '../styles/globals.css';
import {StyledEngineProvider} from '@mui/material/styles';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
                <CssBaseline/>
                <Component {...pageProps}
                           style={{
                               backgroundColor: theme.palette.primary.main,
                               color: theme.palette.text.primary
                           }}
                />
            </StyledEngineProvider>
        </ThemeProvider>
    );
}

export default MyApp;
