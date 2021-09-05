import { Box, Card, CardContent, Container, Grid, Typography } from "@material-ui/core"
import makeStyles from '@material-ui/core/styles/makeStyles';

import { fetchTopHeadlines, fetchSearchedNews } from '../../redux/actions/fetchNewsAction';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  getLoading,
  getNews,
  getError
} from '../../redux/selectors/fetchNewsSelector';
import React from "react";
import NewsCard from "../utils/NewsCard";
import Sort from "../utils/Sort";
import Loader from "../utils/Loader";
import EmptyList from "../utils/EmptyList";

const useStyles = makeStyles((theme) => ({
    headline:{
        color:theme.palette.primary.main,
        fontWeight:500,
    },
    itemContainer:{
        [theme.breakpoints.up("sm")]:{
            padding:`${theme.spacing(1)}px`,
        },
        padding:`${theme.spacing(1)}px 0`,
    },
    titleContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    contentContainer:{
        padding:'2px',
    }
}));
const NewsContent = ({options, loading, news, error, fetchTopHeadlines, fetchSearchedNews, onSortChange}) => {
    React.useEffect(()=>{
        if(options){
            if(options.search){
                getSearchedNews(options)
            }
            else{
                getTopHeadlines(options);
            }
        }
    },[options])
    const getTopHeadlines =async (options) => {
        await fetchTopHeadlines(options);
    }

    const getSearchedNews =async (options) => {
        const data = options
        await fetchSearchedNews(data);
    }
    const classes = useStyles();
    const {articles} = news 
    return (
        <Container className={classes.contentContainer}>
            <Box component="div" className={classes.titleContainer}>
                <Typography className={classes.headline} variant="h6">
                    {news && news.title}
                </Typography>
            </Box>
            <Grid container>
                {
                    articles && articles.length ? articles.map((newsItem,index)=>(
                        <Grid className={classes.itemContainer} item lg={3} sm={6} md={4} xs={12} key={`news-00${index}`}>
                            <NewsCard news={newsItem}/>
                        </Grid>
                    )) :
                    <>
                        {loading ?
                            <Loader open={loading}/> :
                            <EmptyList/>
                        }
                    </>
                }
                {articles && articles.length && <Sort onSortChange={onSortChange}/>}
            </Grid>
        </Container>
    )
}

const mapStateToProps = createStructuredSelector({
    loading: getLoading,
    news: getNews,
    error: getError,
});

function mapDispatchToProps(dispatch) {
    return { 
        fetchTopHeadlines: options => dispatch(fetchTopHeadlines(options)), 
        fetchSearchedNews: options => dispatch(fetchSearchedNews(options)), 
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewsContent);