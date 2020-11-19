import React, { useContext, useState } from 'react';
import {
	Grid,
	Container,
	Typography,
	Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AuthContext } from '../contexts/AuthContext';
import NewPostModal from './discussion/NewPostModal';
import Posts from './discussion/Posts';
import Notifications from './discussion/Notifications';

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
	title: {
		paddingTop: '5rem',
	},
	container: {
		marginTop: '3rem'
	}
});

const Discussion = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const { isLoggedIn } = useContext(AuthContext);

	const openModal = () => {
		setOpen(!open);
	};

	return (
		<div className={classes.main}>
			{isLoggedIn ? (
				<Button
					variant="outlined"
					color="secondary"
					className={classes.newButton}
					onClick={openModal}
				>
					New Post
				</Button>
			) : (
				''
			)}
			<NewPostModal open={open} setOpen={setOpen} />
			<Container maxWidth="md">
				<Grid item xs={12} className={classes.title}>
					<Typography variant="h3" align="center">
						Discussion
					</Typography>
				</Grid>
				{isLoggedIn ? (
					<Grid container spacing={4} className={classes.container}>
					<Posts />
					<Notifications />
				</Grid>
				) : (
					<Typography align="center" color="error" className={classes.container}>Sign up or login to view discussions</Typography>
				)}

				
			</Container>
		</div>
	);
};

export default Discussion;
