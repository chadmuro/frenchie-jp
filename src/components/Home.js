import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import About from './About';

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
					frenchie-JP
				</Typography>
				<Typography
					className={classes.text}
					variant="h5"
					gutterBottom
					classes={{ gutterBottom: classes.gutterBottom }}
				>
					Tokyo French Bulldog Meetup
				</Typography>
				<Button variant="contained" color="primary" size="large">
					Upcoming Events
				</Button>
			</Box>
			<About />
		</div>
	);
};

export default Hero;
