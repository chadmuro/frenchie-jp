import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Subscribe from './contactInfo/Subscribe';
import About from './contactInfo/About';

const useStyles = makeStyles({
	main: {
		flexGrow: '1',
	},
});

const Contact = () => {
	const classes = useStyles();
	return (
		<div className={classes.main}>
			<About />
			<Subscribe />
		</div>
	);
};

export default Contact;
