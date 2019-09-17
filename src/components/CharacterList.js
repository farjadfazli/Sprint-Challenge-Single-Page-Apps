import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import { makeStyles } from '@material-ui/core';
import SearchForm from './SearchForm';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
  }
})

export default function CharacterList() {
  const classes=useStyles();
  const [character, setCharacter] = useState([]);
  const [query, setQuery] = useState('');

  const onSearch = (e, name) => {
    e.preventDefault();
    setQuery(name);
  }

  useEffect(() => {
    if (query === "") {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setCharacter(res.data.results)
      })
      .catch(err => console.log(err))
    } else {
      axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
      .then(res => setCharacter(res.data.results))
      .catch(err => console.log(err))
    }

  }, [query]);

  return (
    <div className={classes.wrapper}>
      <SearchForm onSearch={onSearch} />
      {
        character.map((char, index) => {
          return <CharacterCard key={index} name={char.name} loc={char.location.name} species={char.species} gender={char.gender} status={char.status} pic={char.image} origin={char.origin.name}/>
        })
      }
    </div>
  );
}
