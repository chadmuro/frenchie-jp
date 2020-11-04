import React from 'react';
import { Container, Grid, Card, Typography, CardMedia, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ipu from '../../img/ipu.jpg';

const useStyles = makeStyles((theme) => ({
	title: {
		paddingTop: '6rem',
	},
	main: {
		marginTop: '3rem'
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
		<Container maxWidth="lg">
			<Grid item xs={12} className={classes.title}>
				<Typography variant="h3" align="center">
					About
				</Typography>
			</Grid>
			<Grid container>
				<Grid item xs={12} className={classes.main}>
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
			</Grid>
		</Container>
	);
};

export default About;