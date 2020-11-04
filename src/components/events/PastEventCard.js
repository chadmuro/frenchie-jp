import React from 'react';
import { Grid, Typography, Button, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    eventCard: {
        textAlign: 'center',
        marginTop: '3rem'
    }
}))

const PastEventCard = () => {
    const classes = useStyles();
    return (
			<Grid item xs={12} sm={4} className={classes.eventCard}>
				<Card>
					<Typography variant="body1">SUN, DEC 1 2020, 11:00AM</Typography>
					<Typography variant="h6">December 2020 Event</Typography>
					<Button variant="outlined" color="primary">
						View Photos
					</Button>
				</Card>
			</Grid>
		);
}

export default PastEventCard;