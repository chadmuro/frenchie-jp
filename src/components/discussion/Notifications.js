import React from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useFirestore } from '../../hooks/useFirestore';

const useStyles = makeStyles(theme => ({
	list: {
		listStyle: 'none',
		padding: 0,
		fontFamily: theme.typography.fontFamily,
	},
}));

const Notifications = () => {
	const classes = useStyles();
	const { docs } = useFirestore('notifications', 'time');

	return (
		<Grid item xs={12} sm={4}>
			<Card>
				<CardContent>
					<Typography align="center" variant="h6" >Notifications</Typography>
					<ul className={classes.list}>
						{docs &&
							docs.map(notification => {
								return (
									<li key={notification.id}>
										<Typography color="primary">{notification.user}</Typography>
										<Typography>{notification.content}</Typography>
										<Typography variant="caption">
											{notification.time.toDate().toDateString()}
										</Typography>
									</li>
								);
							})}
					</ul>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Notifications;
