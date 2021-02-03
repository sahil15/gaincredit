import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    fontColor:{
        color:'#502E2D'
    }
  }));

export default function CafeCard(props) {
    const {cafe} = props;
    const classes = useStyles();
    return (
        <>
            <Card id={cafe.id} className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={cafe.imageLink}
                    title={cafe.imageDescription}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" className={classes.fontColor} component="h2">
                        Name
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.fontColor} component="p">
                        {cafe.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" className={classes.fontColor} component="h2">
                        Email
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.fontColor} component="p">
                        {cafe.email}
                    </Typography>
                    <Typography gutterBottom variant="h5" className={classes.fontColor} component="h2">
                        Phone Number
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.fontColor} component="p">
                        {cafe.phone}
                    </Typography>
                    <Typography gutterBottom variant="h5" className={classes.fontColor} component="h2">
                        Location
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.fontColor} component="p">
                        {cafe.location}
                    </Typography>
                    <Typography gutterBottom variant="h5" className={classes.fontColor} component="h2">
                        Zip Code
                    </Typography>
                    <Typography variant="body2" color="textSecondary" className={classes.fontColor} component="p">
                        {cafe.zipCode}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}


