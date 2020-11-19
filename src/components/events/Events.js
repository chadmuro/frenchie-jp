import React, { useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import NextEvent from './NextEvent';
import PastEvents from './PastEvents';
import NewEventModal from './NewEventModal';
import { AuthContext } from '../../contexts/AuthContext';

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
	const { isLoggedIn } = useContext(AuthContext);

	const openModal = () => {
		setOpen(!open);
	}

	return (
		<div className={classes.main}>
			{isLoggedIn ? (
				<Button
					variant="outlined"
					color="secondary"
					className={classes.newButton}
					onClick={openModal}
				>
					New Event
				</Button>
			) : (
				''
			)}

			<NewEventModal open={open} setOpen={setOpen} />
			<NextEvent />
			<PastEvents />
		</div>
	);
};

export default Events;
