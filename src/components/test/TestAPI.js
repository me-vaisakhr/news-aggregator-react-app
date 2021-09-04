import React from 'react'
import { fetchPosts } from '../../redux/actions/exampleActions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  getLoading,
  getPosts,
  getError
} from '../../redux/selectors/exampleSelector';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    itemContainer:{
        padding:theme.spacing(1),
        margin:theme.spacing(1),
    },
}));

const TestAPI = ({loading, posts, error,fetchPosts}) => {
    const classes = useStyles()
    React.useEffect(()=>{
        fetchPosts();
    },[]);
    return(
        <div>
            <Typography variant="h2">Posts : </Typography>
            {
                !loading ?
                <Grid container>
                    <>{posts && posts.map((item,index)=>(
                            <Grid item lg={3} sm={6} md={4} xs={12} key={index}>
                                <Card className={classes.itemContainer} spellCheck>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">{item.title}</Typography>
                                        <Typography variant="body2" component="p">{item.body}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </> 
                </Grid>:
                    <p>loading...</p>
            }
        </div>
    );
}
const mapStateToProps = createStructuredSelector({
    loading: getLoading,
    posts: getPosts,
    error: getError,
});

function mapDispatchToProps(dispatch) {
    return { 
        fetchPosts: data => dispatch(fetchPosts(data)), 
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TestAPI);