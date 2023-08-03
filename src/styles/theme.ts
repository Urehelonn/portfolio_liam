import {createTheme} from '@mui/material/styles';
import colour from '@/styles/colours'

const theme = createTheme({
    palette: {
        primary: {
            main: colour.green['100'],
        },
        text: {
            primary: colour.white,
        },
        success: {
            main: '#6cad91',
        }
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                notchedOutline: {
                    borderColor: colour.sky
                },
            }
        }
    },
    typography: {
        fontFamily: 'InknutAntiqua, sans-serif',
    },
});

export default theme;
