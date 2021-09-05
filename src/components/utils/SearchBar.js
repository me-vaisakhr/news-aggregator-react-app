import React from 'react'
import { IconButton, InputBase, Paper, TextField, Typography } from "@material-ui/core"
import makeStyles from '@material-ui/core/styles/makeStyles';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/CloseSharp';
import useQueryParam from '../../hooks/useQueryParam'
import clsx from 'clsx';
const useStyles = makeStyles((theme) => ({
    rightAlign:{
        float:'right'
    }
}));

const SearchBar = ({onSearch}) => {
    const classes = useStyles();
    const [input,setInput] = React.useState('');

    const [search, setSearch] = useQueryParam('search', '');
    React.useEffect(()=>{
        if(search && input == ''){
            setInput(search)
        }
    },[search])
    return (
        <Paper component="div" className={classes.root}>
            <IconButton disabled color="primary" className={classes.iconButton} aria-label="directions">
                <SearchIcon className={classes.iconButton}/>
            </IconButton>
            <InputBase
                className={classes.input}
                value={input}
                placeholder="Search the world"
                onChange={(e)=>{setInput(e.target.value)}}
                onKeyDown={(e)=>{
                    if(e.key == 'Enter' && input)
                    {
                        setSearch(input)
                        onSearch(input)
                    }
                }}
            />
            {input && 
                <IconButton 
                    color="primary" 
                    className={clsx(classes.iconButton,classes.rightAlign)} 
                    aria-label="directions" 
                    onClick={()=>{
                        setInput('')
                        setSearch('')
                        onSearch('')
                    }
                }>
                    <CloseIcon />
                </IconButton>
            }
        </Paper>
    )
}

export default SearchBar