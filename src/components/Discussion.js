import React, { useContext, useState } from 'react';
import {
	Grid,
	Card,
	CardContent,
	Container,
	Typography,
	Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AuthContext } from '../contexts/AuthContext';
import { useFirestore } from '../hooks/useFirestore';
import NewPostModal from './discussion/NewPostModal';
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
	const { docs } = useFirestore('posts', 'createdAt');
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
					<Grid item xs={12} sm={8}>
						{docs &&
							docs.map(post => {
								return (
									<Card key={post.id}>
										<CardContent>
											<Typography variant="h6">{post.title}</Typography>
											<Typography color="primary">{post.name}</Typography>
											<Typography variant="caption">
												{post.createdAt.toDate().toDateString()}
											</Typography>
											<Typography>{post.description}</Typography>
										</CardContent>
									</Card>
								);
							})}
					</Grid>
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
