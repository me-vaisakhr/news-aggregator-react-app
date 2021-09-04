import React from 'react'
import { incrementAction,decrementAction } from '../../redux/actions/countingAction';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  getCount
} from '../../redux/selectors/countingSelector';
import { Button, Paper, Typography } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    container:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
        padding:theme.spacing(1),
        position: '-webkit-sticky',
        position: 'sticky',
        top: 0,
    },
    count:{
        margin: theme.spacing(1),
        [theme.breakpoints.down("xs")]:{
            fontSize:'30px'
        },
    },
    buttton:{
        margin:theme.spacing(1),
        [theme.breakpoints.down("xs")]:{
            fontSize:'18px'
        },
        fontSize:'24px'
    }
}));

const TestCounter = ({count,incrementAction,decrementAction,}) => {
    const classes = useStyles();
    return(
        <Paper className={classes.container}>
            <Typography className={classes.count} variant="h2">Counter : </Typography>
            <Button className={classes.buttton} variant="contained" onClick={()=>{incrementAction()}}>+</Button>
            <Typography className={classes.count} variant="h3">{count}</Typography>
            <Button className={classes.buttton} variant="contained" onClick={()=>{decrementAction()}}>-</Button>
        </Paper>
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