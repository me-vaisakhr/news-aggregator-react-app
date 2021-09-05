import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SortIcon from '@material-ui/icons/Sort';
import { MenuItem, Popover, Typography } from '@material-ui/core';
import {SORT_BY} from '../../config/constants'
import useQueryParam from '../../hooks/useQueryParam';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
        zIndex: 10 ,
        margin: theme.spacing(1),
        top: 'auto',
        right: 'auto',
        bottom: 10,
        right: '5%',
        position: 'fixed'
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

/**
 * Sort - is the component for sort selction.
 * @param onSortChange - handler to handle the sort value changes
 */
export default function Sort({onSortChange}) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selection, setSelection] = React.useState('publishedAt');
  const [sort, setSort] = useQueryParam('sort', '');

  /**
   * handleClick - handler for opening the popover / menulist
   * @param event - click event 
   */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * handleSelection - handler for user selection.
   * @param selection - selected sort value 
   */
  const handleSelection = (selection) => {
    setAnchorEl(null);
    setSelection(selection)
    setSort(selection)
    onSortChange(selection)
  };

  React.useEffect(()=>{
    if(sort){
        setSelection(sort)
    }
  },[sort])

  /**
   * handleClose - handler for closing the popover / menulist.
   */
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className={classes.root}>
      <Fab variant="extended" onClick={handleClick}>
        <SortIcon className={classes.extendedIcon} />
        Sorted By {SORT_BY.filter((item)=> item.code == selection)[0]?.name}
      </Fab>
      {
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
          {
            SORT_BY && SORT_BY.map((item,index)=>(
              <MenuItem onClick={()=>handleSelection(item.code)} value={item.code} key={`sort-by-00${index}`}>{item.name}</MenuItem>
            ))
          }
        </Popover>
      }
    </div>
  );
}
