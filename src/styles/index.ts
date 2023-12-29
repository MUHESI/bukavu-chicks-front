// import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { defaultTheme } from './colors';

export const createdTheme = createTheme({
    palette: {
        primary: {
            main: defaultTheme.colors.primary,
        },
        secondary: {
            main: defaultTheme.colors.secondary,
        },
    },
});