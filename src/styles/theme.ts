import {createTheme} from '@mui/material/styles';
import colour from '@/styles/colours'

const theme = createTheme({
    palette: {
        primary: {
            main: colour.dark, // Replace this with your desired background color
        },
        text: {
            primary: colour.white,
        },
    },
    typography: {
        fontFamily: 'InknutAntiqua, sans-serif',
    },
});

export default theme;
