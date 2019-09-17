import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    width: 350,
    margin: '20px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  wrapper: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-around',
  }
});

export default function EpisodeCard(props) {
    const classes=useStyles();
    return (
        <div className={classes.wrapper}>
            <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
               {props.episode}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.date}
                </Typography>
            </CardContent>
            </Card>
        </div>
    )
}