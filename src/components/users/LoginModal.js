import React, { useState } from 'react';
import { Modal, Typography, Button, Fade, TextField, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';
import { authLogin } from '../../hooks/useAuth';
import logoSmall from '../../img/logo192.png';

const useStyles = makeStyles({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
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
	closeButton: {
		position: 'absolute',
		top: 5,
		right: 5,
	},
	form: {
		padding: '1rem',
		paddingRight: '2rem',
	},
	input: {
		margin: '.5rem',
	},
	button: {
		marginTop: '1rem',
	},
	error: {
		marginTop: '1rem',
	},
});

const LoginModal = ({ open, setOpen }) => {
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
	const classes = useStyles();

	const formSubmit = e => {
		e.preventDefault();
		authLogin(email, password).then(() => {
            setEmail('');
            setPassword('');
            setOpen(!open);
            setError('');
        }).catch(error => setError(error.message));
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
					<img src={logoSmall} alt="logo" />
					<Typography variant="h4">Login</Typography>
					<form className={classes.form} onSubmit={formSubmit}>
						<TextField
							type="email"
							id="email"
							label="Email"
							variant="outlined"
							value={email}
							onChange={e => setEmail(e.target.value)}
							className={classes.input}
							fullWidth
							required
						/>
						<TextField
							type="password"
							id="password"
							label="Password"
							variant="outlined"
							value={password}
							onChange={e => setPassword(e.target.value)}
							className={classes.input}
							fullWidth
							required
						/>
						<Button
							variant="contained"
							color="secondary"
							type="submit"
							className={classes.button}
						>
							Login
						</Button>
						<Typography color="error" className={classes.error}>
							{error}
						</Typography>
					</form>
				</div>
			</Fade>
		</Modal>
	);
};

export default LoginModal;
