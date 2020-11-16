import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	main: {
		flexGrow: '1'
	}
});

const Discussion = () => {
	const classes = useStyles();
	return <div className={classes.main}>Discussion Page coming soon...</div>;
};

export default Discussion;
