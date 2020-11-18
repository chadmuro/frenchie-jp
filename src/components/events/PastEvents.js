import React from 'react';
import { Grid, Typography, Container, Card, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { useFirestore } from '../../hooks/useFirestore';

const useStyles = makeStyles(theme => ({
	title: {
		paddingTop: '5rem',
	},
	eventCard: {
		textAlign: 'center',
		marginTop: '3rem',
	},
	card: {
		padding: '1rem',
	},
	button: {
		marginTop: '1rem',
	},
	link: {
		textDecoration: 'none',
		color: theme.palette.text.primary,
	},
}));

const PastEvents = () => {
	const classes = useStyles();
	const { docs } = useFirestore('events', 'createdAt');

	return (
		<Container>
			<Typography variant="h3" align="center" className={classes.title}>
				Past Events
			</Typography>
			<Grid container spacing={3}>
				{docs &&
					docs.map(event => {
						if (!event.next) {
							return (
								<Grid
									item
									xs={12}
									sm={4}
									className={classes.eventCard}
									key={event.id}
								>
									<Card className={classes.card}>
										<Typography variant="body1">
											{event.date.toUpperCase()}, {event.time}
										</Typography>
										<Typography variant="h6">{event.name}</Typography>
										<Button
											variant="outlined"
											color="secondary"
											className={classes.button}
										>
											<Link to="/photos" className={classes.link}>
												View Photos
											</Link>
										</Button>
									</Card>
								</Grid>
							);
						} else {
							return null;
						}
					})}
			</Grid>
		</Container>
	);
};

export default PastEvents;
