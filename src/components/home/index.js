import { Container } from "@material-ui/core";
import React from "react";
import NewsContent from "../content";
import Header from '../header'
import {useLocation} from "react-router-dom";
import {DEFAULT_LANGUAGE} from '../../config/constants'
import Settings from "../utils/Settings";

/**
 * Home - is the component which is the main page, which have header part and news list showing part  
 */
const Home = () => {
    const [options, setOptions] = React.useState(null)

    const location = useLocation();

    /**
    * setNewsOptions - use to set the option state  
    * @param search - search key
    */
    const setNewsOptions = (search,sort,language) => {
        setOptions({search,language,sort})
    }

    React.useEffect(() => {
        if(location.search){
            const search = new URLSearchParams(location.search).get('search');
            const sort = new URLSearchParams(location.search).get('sort');
            const language = new URLSearchParams(location.search).get('language')||DEFAULT_LANGUAGE;
            setNewsOptions(search,sort,language)
        }
        else{
            setNewsOptions('','',DEFAULT_LANGUAGE)
        }
    }, [location]);
    
    /**
    * handleSearch - handler to handle the search  
    * @param search - search key
    */
    const handleSearch = (search) => {
        const params = window.location.search
        const sort = new URLSearchParams(params).get('sort');
        const language = new URLSearchParams(params).get('language')||DEFAULT_LANGUAGE;
        setNewsOptions(search,sort,language)
    }

    /**
    * handleLanguage - handler to handle the language  
    * @param language - changed language value
    */
    const handleLanguage = (language) => {
        const params = window.location.search
        const sort = new URLSearchParams(params).get('sort');
        const search = new URLSearchParams(params).get('search');
        setNewsOptions(search,sort,language)
    }

    /**
    * handleSort - handler to handle the sort  
    * @param sort - changed sort value
    */
    const handleSort = (sort) => {
        const params = window.location.search
        const language = new URLSearchParams(params).get('language')||DEFAULT_LANGUAGE;
        const search = new URLSearchParams(params).get('search');
        setNewsOptions(search,sort,language)
    }

    return(
        <Container>
            <Header onSearch={(search)=>{handleSearch(search)}} onLanguageChange={(language)=>{handleLanguage(language)}}/>
            <NewsContent options={options} onSortChange={(sort)=>{handleSort(sort)}}/>
            <Settings/>
        </Container>
    )
}

export default Home