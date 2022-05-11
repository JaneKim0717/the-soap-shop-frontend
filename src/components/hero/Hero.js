import React from 'react';
import { useHistory } from 'react-router-dom';
import ReactPlayer from "react-player";
import heroVideo from '../../assets/heroVideo.mp4'
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import styled from 'styled-components'
import './Hero.styles.scss';


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
    letterSpacing: 2,
    fontFamily: 'Montserrat',
  },
}));

const Button = styled.button`
    border:none;
    width: 150px;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

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
          <Button onClick={() => history.push('/shop')}>
            SHOP NOW
          </Button>
        </Box>
      </div>
    </section>
  );
}

export default Hero