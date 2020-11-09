import React from 'react';
import { makeStyles } from '@material-ui/styles';
import NextEvent from './events/NextEvent';
import PastEvents from './events/PastEvents';

const useStyles = makeStyles({
	main: {
		flexGrow: '1'
	}
});

const Events = () => {
	const classes = useStyles();
	return (
		<div className={classes.main}>
			<NextEvent />
			<PastEvents />
		</div>
	);
};

export default Events;
