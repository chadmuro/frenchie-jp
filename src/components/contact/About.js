import React from 'react';
import {
	Container,
	Grid,
	Card,
	Typography,
	CardMedia,
	CardContent,
	makeStyles,
} from '@material-ui/core';
import ipu from '../../img/ipu.jpg';

const useStyles = makeStyles({
	title: {
		paddingTop: '5rem',
		paddingBottom: '3rem',
	},
	image: {
		height: '300px',
	},
});

const About = () => {
	const classes = useStyles();

	return (
		<Container maxWidth="md">
			<Typography variant="h3" align="center" className={classes.title}>
				About Us
			</Typography>
			<Card>
				<Grid container>
					<Grid item xs={12} sm={4}>
						<CardMedia
							image={ipu}
							title="Ipu Frenchie"
							className={classes.image}
						/>
					</Grid>
					<Grid item xs={12} sm={8}>
						<CardContent>
							<Typography align="center">
								We are a community of French Bulldogs and owners in Tokyo,
								Japan. Japanese or English speaking is okay. Come join us!
							</Typography>
						</CardContent>
					</Grid>
				</Grid>
			</Card>
		</Container>
	);
};

export default About;
