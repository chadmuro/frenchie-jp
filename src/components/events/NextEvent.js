import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles(() => ({
	title: {
		paddingTop: '6rem',
    },
    card: {
        marginTop: '3rem'
    },
    content: {
        display: 'flex',
        height: '200px',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        paddingTop: '1rem',
        paddingBottom: '1rem'
    },
    image: {
        marginTop: '1rem',
        marginRight: '1rem'
    },
    description: {
        padding: '1rem',
    },
    button: {
        marginTop: '1rem'
    }
}));

const NextEvent = () => {
	const classes = useStyles();
	return (
		<Container maxWidth="md">
			<Grid item xs={12} className={classes.title}>
				<Typography variant="h3" align="center">
					Next Event
				</Typography>
			</Grid>
			<Card className={classes.card}>
				<Grid container>
					<Grid item xs={12} sm={8}>
						<CardContent className={classes.content}>
							<Typography variant="h6">SUN, JAN 1, 11:00AM</Typography>
							<Typography variant="h4" className={classes.name}>
								January 2021 Meetup. Test for a long title
							</Typography>
							<Typography variant="h6">
								<LocationOnIcon />
								<Link href="#" color="secondary">Yoyogi Park</Link>
							</Typography>
						</CardContent>
					</Grid>
					<Grid item xs={12} sm={4}>
						<CardMedia
							className={classes.image}
							component="img"
							alt="French Bulldog meetup"
							image="https://www.telegraph.co.uk/content/dam/news/2017/02/14/french-bulldog_trans_NvBQzQNjv4BqZgEkZX3M936N5BQK4Va8RVX_50byq9Ah3wJAV0YS_Ms.jpg"
							height="200px"
						/>
					</Grid>
					<Grid item xs={12} className={classes.description}>
						<Typography variant="body1">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Typography>
						<Button
							variant="contained"
							color="secondary"
							className={classes.button}
						>
							View Event Details
						</Button>
					</Grid>
				</Grid>
			</Card>
		</Container>
	);
};

export default NextEvent;
