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
	aboutContainer: {
		paddingTop: '5rem',
	},
	text: {
		color: '#fff',
	},
}));

const Hero = () => {
	const classes = useStyles();

	return (
		<div>
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
