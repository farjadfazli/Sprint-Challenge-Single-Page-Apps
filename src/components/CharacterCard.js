import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 345,
    margin: '20px'
  },
  media: {
    height: 250,
  },
  wrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
  }
});

export default function CharacterCard(props) {
  const classes=useStyles();
  return (
    <div className={classes.wrapper}>
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.pic}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.species} {props.status} 
          </Typography>
          <p>Location: {props.loc} </p>
          <p>Origin: {props.origin} </p>
        </CardContent>
      </CardActionArea>
    </Card>
  </div>
  );
}
