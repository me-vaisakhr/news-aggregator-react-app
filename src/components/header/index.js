import { Box, Container, Hidden, makeStyles, Typography } from "@material-ui/core"
import LanguageSelector from "../utils/LanguageSelector";
import Logo from '../utils/Logo'
import SearchBar from "../utils/SearchBar"
import Time from '../utils/Time'
import WeatherInfo from "../utils/WeatherInfo";

const useStyles = makeStyles((theme) => ({
    container:{
        position:'sticky',
        top:0,
        background:theme.palette.background.main,
        padding:`${theme.spacing(2)}px 0px`,
        zIndex:999,
    },
    headerContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'end'
    },
    languageContainer:{
        display:'flex',
        position: 'absolute',
        left: '150px',
    },
    mobileSearchBarContainer:{
        marginTop: '10px'
    },
    mobileLanguageSelector:{
        display:'flex',
        justifyContent:'flex-end'
    }
}));
/**
 * Header - is the component responsible for the header section of the application.
 * @param onSearch - handler to handle the search value changes.
 * @param onLanguageChange - handler to handle the language value changes.
 */
const Header = ({onSearch, onLanguageChange}) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Box className={classes.headerContainer}>
                <Box component="div">
                    <Logo/>
                    <Time/>
                </Box>
                <Hidden xsDown>
                    <Box component="div" className={classes.languageContainer}>
                        <LanguageSelector onLanguageChange={onLanguageChange}/>
                    </Box>
                </Hidden>
                <Box component="div">
                    <WeatherInfo/>
                    <Hidden smUp>
                        <Box component="div" className={classes.mobileLanguageSelector}>
                            <LanguageSelector onLanguageChange={onLanguageChange}/>
                        </Box>
                    </Hidden>
                    <Hidden xsDown>
                        <SearchBar onSearch={onSearch}/>
                    </Hidden>
                </Box>
            </Box>
            <Hidden smUp>
                <Box component="div" className={classes.mobileSearchBarContainer}>
                    <SearchBar onSearch={onSearch}/>
                </Box>
            </Hidden>
        </div>
    )
}

export default Header