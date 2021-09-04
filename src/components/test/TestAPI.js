import React from 'react'
import { fetchPosts } from '../../redux/actions/exampleActions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  getLoading,
  getPosts,
  getError
} from '../../redux/selectors/exampleSelector';

const TestAPI = ({loading, posts, error,fetchPosts}) => {
    React.useEffect(()=>{
        fetchPosts();
    },[]);
    return(
        <>
        {
            !loading ?
                <>{posts && posts.map((item,index)=>(
                    <React.Fragment key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </React.Fragment>
                ))

                }
                </> :
                <p>loading...</p>
        }
        </>
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