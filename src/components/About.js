import React from 'react';
import { Grid, Card, Typography, CardMedia, CardContent, makeStyles } from '@material-ui/core';
import ipu from '../img/ipu.jpg';

const useStyles = makeStyles((theme) => ({
	aboutContainer: {
		paddingTop: '5rem',
	},
	about: {
		display: 'flex',
		[theme.breakpoints.down('xs')]: {
			flexDirection: 'column',
		},
	},
	media: {
		width: '300px',
		height: '400px',
		[theme.breakpoints.down('xs')]: {
            width: '100%',
            height: '300px'
		},
	},
}));

const About = () => {
    const classes = useStyles();

	return (
		<Grid container className={classes.aboutContainer}>
			<Grid item xs={12}>
				<Typography variant="h3" align="center">
					About
				</Typography>
			</Grid>
			<Grid xs={0} sm={1} />
			<Grid item xs={12} sm={10} className={classes.aboutContainer}>
				<Card className={classes.about}>
					<CardMedia
						className={classes.media}
						image={ipu}
						title="Ipu Frenchie"
					/>
					<CardContent>
						<Typography align="center">Hi my name is Chad!</Typography>
					</CardContent>
				</Card>
			</Grid>
			<Grid xs={0} sm={1} />
		</Grid>
	);
};

export default About;