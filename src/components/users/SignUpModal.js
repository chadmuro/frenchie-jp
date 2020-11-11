import React, { useState } from 'react';
import { Modal, Typography, Button, Fade, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { authSignUp } from '../../hooks/useAuth';

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
	form: {
        padding: '1rem',
        paddingRight: '2rem'
	},
	input: {
		margin: '.5rem',
	},
	button: {
		marginTop: '1rem',
	},
});

const SignUpModal = ({ open, setOpen }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const classes = useStyles();

	const formSubmit = e => {
        e.preventDefault();
        authSignUp(email, password).then(() => {
            setEmail('');
            setPassword('');
            setOpen(!open);
        });
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
					<Typography variant="h4">Sign Up</Typography>
					<form className={classes.form} onSubmit={formSubmit}>
						<TextField
							type="email"
							id="email"
							label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
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
							Sign Up
						</Button>
					</form>
				</div>
			</Fade>
		</Modal>
	);
};

export default SignUpModal;
