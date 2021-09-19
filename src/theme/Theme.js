/**
 * File for handling the theming of the application.
 */
import { createTheme } from '@material-ui/core/styles';
import {red,blue} from "@material-ui/core/colors";
const defaultTheme = createTheme({
    typography:{
      fontFamily:[
        'Fjalla One', 'Roboto', 'Helvetica', 'sans-serif'
      ].join(`,`),
    },
    palette: {
      text:{
        primary:'#000',
      },
      primary:{
        main:'#2b2d36',
      },
      secondary: {
        main: '#e0e0e0',
      },
      background: {
        main: '#fff',
      },
    },
});


export const lightTheme = createTheme({
    ...defaultTheme,
    palette:{
      text:{
        primary:'#000',
      },
      primary:{
        main:'#2b2d36',
      },
      secondary: {
        main: '#e0e0e0',
      },
      background: {
        main: '#fff',
      },
      type:"light"
    }
});

export const darkTheme = createTheme({
    ...defaultTheme,
    palette:{
      text:{
        primary:'#fff',
      },
      primary:{
        main:'#f6f7f9',
      },
      secondary: {
        main: '#2c2e3d',
      },
      background: {
        main: '#1c1c1c',
      },
      type:"dark"
    }
});

export  {defaultTheme};