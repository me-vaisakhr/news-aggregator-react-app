import { Container } from "@material-ui/core";
import React from "react";
import NewsContent from "../content";
import Header from '../header'
import {useLocation} from "react-router-dom";

const Home = () => {
    const [options, setOptions] = React.useState(null)

    const location = useLocation();

    const setNewsOptions = (search,sort,language) => {
        setOptions({search,language,sort})
    }

    React.useEffect(() => {
        if(location.search){
            const search = new URLSearchParams(location.search).get('search');
            const sort = new URLSearchParams(location.search).get('sort');
            const language = new URLSearchParams(location.search).get('language')||'en';
            setNewsOptions(search,sort,language)
        }
        else{
            setNewsOptions('','','en')
        }
    }, [location]);
    
    const handleSearch = (search) => {
        const params = window.location.search
        const sort = new URLSearchParams(params).get('sort');
        const language = new URLSearchParams(params).get('language')||'en';
        setNewsOptions(search,sort,language)
    }

    const handleLanguage = (language) => {
        const params = window.location.search
        const sort = new URLSearchParams(params).get('sort');
        const search = new URLSearchParams(params).get('search');
        setNewsOptions(search,sort,language)
    }

    const handleSort = (sort) => {
        const params = window.location.search
        const language = new URLSearchParams(params).get('language')||'en';
        const search = new URLSearchParams(params).get('search');
        setNewsOptions(search,sort,language)
    }

    return(
        <Container>
            <Header onSearch={(search)=>{handleSearch(search)}} onLanguageChange={(language)=>{handleLanguage(language)}}/>
            <NewsContent options={options} onSortChange={(sort)=>{handleSort(sort)}}/>
        </Container>
    )
}

export default Home