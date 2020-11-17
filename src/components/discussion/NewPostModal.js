import React, { useContext, useState } from 'react';
import {
	Modal,
	Typography,
	Button,
	TextField,
	IconButton,
	Fade,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { postFirestore, GetUserInfo } from '../../hooks/useFirestore';
import { AuthContext } from '../../contexts/AuthContext';

const useStyles = makeStyles({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	closeButton: {
		position: 'absolute',
		top: 5,
		right: 5,
	},
	container: {
		backgroundColor: '#fff',
		outline: 'none',
		maxHeight: '1000px',
		maxWidth: '500px',
		textAlign: 'center',
		padding: '1rem',
		paddingTop: '3rem',
		position: 'relative',
	},
	form: {
		padding: '1rem',
	},
	input: {
		margin: '.5rem',
	},
	button: {
		marginTop: '1rem',
	},
});

const NewEventModal = ({ open, setOpen }) => {
    const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const { isLoggedIn } = useContext(AuthContext);
	const classes = useStyles();

	const userInfo = GetUserInfo(isLoggedIn);

	const formSubmit = e => {
		e.preventDefault();
		let postObj = {
            title,
            description,
            name: userInfo.frenchieName
		};

		postFirestore('posts', postObj);
		setTitle('');
		setDescription('');
		setOpen(!open);
	};

	return (
		<Modal
			open={open}
			className={classes.modal}
			onClick={e => (e.target.ariaHidden ? setOpen(!open) : null)}
			closeAfterTransition
		>
			<Fade in={open}>
				<div className={classes.container}>
					<IconButton
						className={classes.closeButton}
						onClick={e => (e.target.ariaHidden ? setOpen(!open) : null)}
					>
						<CloseIcon />
					</IconButton>
					<Typography variant="h4">New Post</Typography>
					<form className={classes.form} onSubmit={formSubmit}>
						<TextField
							id="title"
							label="Post Title"
							variant="outlined"
                            className={classes.input}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
							fullWidth
							required
						/>
						<TextField
							id="description"
							label="Description"
							variant="outlined"
							className={classes.input}
							multiline
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
							fullWidth
							required
						/>
						<Button
							variant="contained"
							color="secondary"
							type="submit"
							className={classes.button}
						>
							Submit
						</Button>
					</form>
				</div>
			</Fade>
		</Modal>
	);
};

export default NewEventModal;
