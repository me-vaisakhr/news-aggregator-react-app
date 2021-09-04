import React from 'react'
import { incrementAction,decrementAction } from '../redux/actions/countingAction';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  getCount
} from '../redux/selectors/countingSelector';

const TestCounter = ({count,incrementAction,decrementAction,}) => {
    return(
        <>
            <button onClick={()=>{incrementAction()}}>INCREMENT</button>
                {count}
            <button onClick={()=>{decrementAction()}}>DECREMENT</button>
        </>
    )
}
const mapStateToProps = createStructuredSelector({
    count: getCount,
});

function mapDispatchToProps(dispatch) {
    return { 
      incrementAction: data => dispatch(incrementAction(data)), 
      decrementAction: data => dispatch(decrementAction(data)) 
    };
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TestCounter);