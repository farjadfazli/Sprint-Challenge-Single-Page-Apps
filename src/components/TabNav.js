import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-evenly',
      width: '100%'
    },
  });

function LinkTab(props) {
    return (
      <Tab
        component={Link}
        {...props}
      />
    );
  }

export default function TabNav() {
    const classes=useStyles();
    const [value, setValue] = useState(0);
    function handleChange(event, newValue) {
        setValue(newValue);
      }
    return (
        <Paper square className={classes.root}>
            <Tabs
            variant="fullWidth"
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            >
                <LinkTab to="/" label="Home Page" />
                <LinkTab to="/characters" label="Characters" />
                <LinkTab to="/locations" label="Locations" />
                <LinkTab to="/episodes" label="Episodes" />
            </Tabs>
      </Paper>
    )
};
