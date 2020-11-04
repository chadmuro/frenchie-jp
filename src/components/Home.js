import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Button } from '@material-ui/core';
import NextEvent from './events/NextEvent';
import Subscribe from './contactInfo/Subscribe';

import heroImage from '../img/frenchie-hero.jpg';

const useStyles = makeStyles(() => ({
	gutterBottom: {
		marginBottom: '2.5rem',
	},
	main: {
		flexGrow: '1'
	},
	hero: {
		backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${heroImage})`,
		height: '500px',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: '#fff',
		textAlign: 'center'
	},
}));

const Hero = () => {
	const classes = useStyles();

	return (
		<div className={classes.main}>
			<Box className={classes.hero}>
				<Typography className={classes.text} variant="h1">
					Tokyo Frenchies
				</Typography>
				<Typography
					className={classes.text}
					variant="h5"
					gutterBottom
					classes={{ gutterBottom: classes.gutterBottom }}
				>
					Tokyo French Bulldog Meetup
				</Typography>
				<Button variant="contained" color="secondary" size="large">
					Upcoming Events
				</Button>
			</Box>
			<NextEvent />
			<Subscribe />
		</div>
	);
};

export default Hero;
