import React, { useState } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
	subscribeForm: {
		textAlign: 'center',
		paddingTop: '6rem'
	},
	input: {
		width: '300px'
	},
	button: {
		marginTop: '1rem'
	}
}));

const Subscribe = () => {
	const [email, setEmail] = useState('');
	const classes = useStyles();

	const handleChange = (e) => {
		e.preventDefault();
		setEmail(e.target.value);
	};

	return (
		<div id="mc_embed_signup">
			<form
				action="https://gmail.us2.list-manage.com/subscribe/post?u=2ae6fedffde143b3c53c3fc77&amp;id=bdd7d7ed1a"
				method="post"
				id="mc-embedded-subscribe-form"
				name="mc-embedded-subscribe-form"
				target="_blank"
				noValidate
				className={classes.subscribeForm}
			>
				<div id="mc_embed_signup_scroll">
					<Typography variant="h6" htmlFor="mce-EMAIL">Join our newsletter</Typography>
					<TextField
						type="email"
						value={email}
						name="email"
						id="mce-EMAIL"
						placeholder="Email"
						onChange={handleChange}
						variant="outlined"
						autoComplete="email"
						className={classes.input}
						required
					/>

					<div>
						<Button
							type="submit"
							value="Subscribe"
							name="subscribe"
							id="mc-embedded-subscribe"
							variant="outlined"
							color="secondary"
							className={classes.button}
						>
							Subscribe!
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Subscribe;
