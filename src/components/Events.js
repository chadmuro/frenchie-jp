import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import NextEvent from './events/NextEvent';
import PastEvents from './events/PastEvents';
import NewEventModal from './events/NewEventModal';

const useStyles = makeStyles({
	main: {
		flexGrow: '1',
		position: 'relative',
	},
	newButton: {
		position: 'absolute',
		top: 20,
		right: 20,
	},
});

const Events = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const openModal = () => {
		setOpen(!open);
	}

	return (
		<div className={classes.main}>
			<Button
				variant="outlined"
				color="secondary"
				className={classes.newButton}
				onClick={openModal}
			>
				New Event
			</Button>
			<NewEventModal open={open} setOpen={setOpen} />
			<NextEvent />
			<PastEvents />
		</div>
	);
};

export default Events;
