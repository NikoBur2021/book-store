import {createTheme} from "@material-ui/core/styles";

import Roboto from '../fonts/RobotoCondensed-Regular.ttf';
const roboto = {
    fontFamily: 'Roboto Condensed',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('Roboto'),
    local('Roboto-Regular'),
    url(${Roboto}) format('truetype')
  `,
    unicodeRange:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createTheme({

    typography: {
        fontFamily: 'Uchen, Arial',
        // fontSize: 24
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [roboto],
            },
        },
    },
    palette: {
        primary: {
            main: '#556677'
        },
        secondary: {
            main: '#54c611'
        }
    },


});
export default theme;