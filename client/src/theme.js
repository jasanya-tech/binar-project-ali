import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: grey[900],
        },
        secondary: {
            main: red[600],
        },
    },
})