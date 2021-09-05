import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {COUNTRIES} from '../../config/constants'
import useQueryParam from '../../hooks/useQueryParam'

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    minWidth: 120,
  },
}));

export default function LanguageSelector({onLanguageChange}) {
  const classes = useStyles();
  const [code, setCode] = React.useState('en');
  const [open, setOpen] = React.useState(false);
  const [language, setLanguage] = useQueryParam('language', '');

  const handleChange = (event) => {
    setCode(event.target.value);
    setLanguage(event.target.value)
    onLanguageChange(event.target.value)
  };

  React.useEffect(()=>{
    if(language){
      setCode(language)
    }
  },[language])

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Language</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          placeholder={"Language"}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={code}
          onChange={handleChange}
        >
          {
            COUNTRIES && COUNTRIES.map((item,index)=>(
              <MenuItem value={item.code} key={`language-00${index}`}>{item.name}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </div>
  );
}