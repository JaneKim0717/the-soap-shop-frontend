import React from 'react';
import ReactPlayer from "react-player";
import heroVideo from '../../assets/heroVideo.mp4'

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import './Hero.styles.scss';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '80vh',
    position: 'relative',
    '& video': {
      objectFit: 'cover',
    },
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  title: {
    paddingBottom: theme.spacing(4),
  },
}));

function Hero() {
  const classes = useStyles();
  let history = useHistory()

  return (
    <section className={classes.root}>
      <ReactPlayer
        url={heroVideo}
        playing
        loop
        muted
        width="100%"
        height="100%"
      />
      <div className={classes.overlay}>
        <Box
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          color="#fff"
        >
          <Typography variant="h3" component="h3" className={classes.title}>
            THE SOAP SHOP
          </Typography>
          <Typography variant="p" component="p" className={classes.title}>
            SELFCARE & WELLNESS
          </Typography>
          <Button color="black" variant="contained" onClick={() => history.push('/shop')}>
            SHOP NOW
          </Button>
        </Box>
      </div>
    </section>
  );
}

export default Hero