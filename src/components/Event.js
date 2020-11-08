import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	main: {
		flexGrow: '1',
	},
}));


const Event = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md" className={classes.main}>
            <Typography variant="h5">Date</Typography>
            <Typography variant="h3">Title</Typography>
        </Container>
    )
}

export default Event;