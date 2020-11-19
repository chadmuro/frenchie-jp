import React, { useContext } from 'react';
import {
	Container,
	Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import UploadForm from './UploadForm';
import ImageGrid from './ImageGrid';
import { AuthContext } from '../../contexts/AuthContext';

const useStyles = makeStyles({
	title: {
		paddingTop: '5rem',
	},
	main: {
		flexGrow: '1',
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
			<ImageGrid />
		</Container>
	);
};

export default Photos;
