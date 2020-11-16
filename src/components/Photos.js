import React, { useContext } from 'react';
import {
	Container,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import UploadForm from './photos/UploadForm';
import ImageGrid from './photos/ImageGrid';
import { AuthContext } from '../contexts/AuthContext';

const useStyles = makeStyles({
	title: {
		paddingTop: '5rem',
	},
	main: {
		flexGrow: '1',
	},
	month: {
		paddingTop: '3rem',
		paddingBottom: '1rem'
	},
});

const Photos = () => {
	const classes = useStyles();
	const { isLoggedIn } = useContext(AuthContext);

	return (
		<Container className={classes.main} maxWidth="lg">
			<Typography variant="h3" align="center" className={classes.title}>
				Photo Gallery
			</Typography>
			{isLoggedIn ? <UploadForm /> : ''}
			<Typography variant="h6" className={classes.month}>
				December 2020
			</Typography>
			<ImageGrid />
		</Container>
	);
};

export default Photos;
