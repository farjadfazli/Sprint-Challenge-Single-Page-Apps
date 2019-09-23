import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
      }
})

export default function EpisodeList() {
    const classes=useStyles();

    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode/')
        .then(res => {
            // console.log(res.data.results)
            setEpisode(res.data.results)
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <div className={classes.wrapper}>
            {episode.map((ep, index) => {
                return <EpisodeCard key={index} name={ep.name} episode={ep.episode} date={ep.air_date} />
            })}
        </div>
    )
}

