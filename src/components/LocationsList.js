import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from './LocationCard';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
      }
})

export default function LocationsList() {
    const classes=useStyles();
    const [location, setLocation] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/location/')
        .then(res => {
            // console.log(res.data.results);
            setLocation(res.data.results)
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <div className={classes.wrapper}>
            {location.map((loc, index) => {
                return <LocationCard key={index} name={loc.name} type={loc.type} dimension={loc.dimension} residents={loc.residents.length} />
            })}
        </div>
    )
}
