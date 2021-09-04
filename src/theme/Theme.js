import { createTheme } from '@material-ui/core/styles';
import {red,blue} from "@material-ui/core/colors";
const defaultTheme = createTheme({
    palette: {
      text:{
        primary:'#000',
      },
      primary:{
        main:'#039be5',
      },
      secondary: {
        main: '#d9182b',
      },
    },
});

export  {defaultTheme};