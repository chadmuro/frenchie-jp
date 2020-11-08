import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import PastEventCard from './PastEventCard';

const useStyles = makeStyles(() => ({
    title: {
        paddingTop: '5rem'
    }
}))

const PastEvents = () => {
    const classes = useStyles();

    return (
			<Container>
				<Typography variant="h3" align="center" className={classes.title}>
					Past Events
				</Typography>
				<Grid container spacing={3}>
					<PastEventCard />
					<PastEventCard />
					<PastEventCard />
					<PastEventCard />
					<PastEventCard />
					<PastEventCard />
				</Grid>
			</Container>
		);
}

export default PastEvents;