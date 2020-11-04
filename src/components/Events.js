import React from 'react';
import NextEvent from './events/NextEvent';
import PastEvents from './events/PastEvents';

const Events = () => {
	return (
		<div>
			<NextEvent />
			<PastEvents />
		</div>
	);
};

export default Events;
