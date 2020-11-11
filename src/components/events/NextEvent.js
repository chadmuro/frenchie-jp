import React from 'react';
import {
	Container,
	Grid,
	Typography,
	Card,
	CardContent,
	CardMedia,
	Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useFirestore } from '../../hooks/useFirestore';

const useStyles = makeStyles({
	title: {
		paddingTop: '5rem',
	},
	card: {
		marginTop: '3rem',
	},
	content: {
		display: 'flex',
		height: '200px',
		flexDirection: 'column',
		justifyContent: 'center',
		paddingLeft: '2rem',
	},
	name: {
		paddingTop: '1rem',
		paddingBottom: '1rem',
	},
	image: {
		height: '200px',
		marginBottom: '20px'
	},
	description: {
		paddingLeft: '2rem',
		paddingRight: '2rem'
	},
	button: {
		margin: '1rem 0'
	}
});

const NextEvent = () => {
	const classes = useStyles();
	const { docs } = useFirestore('events', 'next');
	const event = docs[0];

	if (event) {
		return (
			<Container maxWidth="md">
				<Grid item xs={12} className={classes.title}>
					<Typography variant="h3" align="center">
						Upcoming Event
					</Typography>
				</Grid>
				<Card className={classes.card}>
					<Grid container>
						<Grid item xs={12} sm={7}>
							<CardContent className={classes.content}>
								<Typography variant="h6">{event.date.toUpperCase()}, {event.time}</Typography>
								<Typography variant="h4" className={classes.name}>
									{event.name}
								</Typography>
								<Typography variant="h6">
									<LocationOnIcon />
									<Button href={event.url} target="_blank" color="secondary">
										{event.location}
									</Button>
								</Typography>
								<Typography>{event.joiners} frenchies attending</Typography>
							</CardContent>
						</Grid>
						<Grid item xs={12} sm={5}>
							<CardMedia
								className={classes.image}
								component="img"
								alt="French Bulldog meetup"
								image="https://www.telegraph.co.uk/content/dam/news/2017/02/14/french-bulldog_trans_NvBQzQNjv4BqZgEkZX3M936N5BQK4Va8RVX_50byq9Ah3wJAV0YS_Ms.jpg"
							/>
						</Grid>
						<Grid item xs={12} className={classes.description}>
							<Typography variant="body1">
								{event.description}
							</Typography>
							<Button
								variant="contained"
								color="secondary"
								className={classes.button}
							>Join Event
							</Button>
						</Grid>
					</Grid>
				</Card>
			</Container>
		);
	} else {
		return (
			<Container maxWidth="md">
				<Grid item xs={12} className={classes.title}>
					<Typography variant="h3" align="center">
						Upcoming Event
					</Typography>
				</Grid>
			</Container>
		)
	}
};

export default NextEvent;
