import React, { useState } from 'react';
import { Modal, Typography, Button, Fade, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { authSignUp } from '../../hooks/useAuth';
import { dbSignUp } from '../../hooks/useFirestore';

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
    error: {
        marginTop: '1rem'
    }
});

const SignUpModal = ({ open, setOpen }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [frenchieName, setFrenchieName] = useState('');
    const [error, setError] = useState('');
	const classes = useStyles();

	const formSubmit = e => {
		e.preventDefault();
		const newUser = {
			email,
			password,
			firstName,
			lastName,
			frenchieName
		}
        authSignUp(email, password)
					.then((res) => {
						console.log(res);
						dbSignUp({...newUser, uid: res.user.uid})
						setEmail('');
						setPassword('');
						setFirstName('');
						setLastName('');
						setFrenchieName('');
						setOpen(!open);
						setError('');
					})
					.catch(error => setError(error.message));
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
						<TextField
							type="test"
							id="firstName"
							label="First Name"
							variant="outlined"
							value={firstName}
							onChange={e => setFirstName(e.target.value)}
							className={classes.input}
							required
						/>
						<TextField
							type="text"
							id="lastName"
							label="Last Name"
							variant="outlined"
							value={lastName}
							onChange={e => setLastName(e.target.value)}
							className={classes.input}
							required
						/>
						<TextField
							type="text"
							id="frenchieName"
							label="Frenchie Name"
							variant="outlined"
							value={frenchieName}
							onChange={e => setFrenchieName(e.target.value)}
							className={classes.input}
							required
						/>
						<br />
						<Button
							variant="contained"
							color="secondary"
							type="submit"
							className={classes.button}
						>
							Sign Up
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

export default SignUpModal;
