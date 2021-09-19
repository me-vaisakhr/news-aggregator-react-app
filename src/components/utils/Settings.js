import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import SettingsIcon from '@material-ui/icons/Settings';
import { MenuItem, Popover, Tooltip, Typography } from '@material-ui/core';
import useDarkMode from 'use-dark-mode' 

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
        zIndex: 10 ,
        margin: theme.spacing(1),
        top: 'auto',
        left: 'auto',
        bottom: 10,
        left: '0%',
        position: 'fixed'
    },
  },
}));

/**
 * Settings - is the component for settings selction.
 */
export default function Settings() {
  const classes = useStyles();
  const { value, toggle, enable, disable } = useDarkMode()
  const [anchorEl, setAnchorEl] = React.useState(null);

  /**
   * handleClick - handler for opening the popover / menulist
   * @param event - click event 
   */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


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
      <Tooltip title="SETTINGS">
        <Fab variant="circular" onClick={handleClick}>
          <SettingsIcon />
        </Fab>
      </Tooltip>
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
          <MenuItem onClick={()=>{toggle()}} value='dark_theme'>
            <Typography>{`Enable ${value?'Light':'Dark'} Theme`}</Typography>
          </MenuItem>
        </Popover>
      }
    </div>
  );
}
