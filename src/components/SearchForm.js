import React, { useState } from "react";
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  searchForm: {
    width: '100%',
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    background: 'white',
    border: '1px solid black',
    margin: theme.spacing(1),
    '&:hover': {
      background: 'gray',
      color: 'white'
    }
  }
}));


export default function SearchForm({ onSearch }) {
  const classes=useStyles();
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  // STRETCH TODO: Add stateful logic for query/form data
  return (
    <section className={classes.searchForm}>
      <form onSubmit={(e) => onSearch(e, name)}>
        {/* <input
          onChange={handleInputChange}
          placeholder="Search for Characters"
          value={name}
          name="name"
          className={classes.search}
        /> */}
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Characters"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={name}
              onChange={handleInputChange}
              inputProps={{ 'aria-label': 'search' }}
            />
             <Button variant="contained" className={classes.button} type="submit">Search</Button>
          </div>
      </form>
    </section>
  );
}
