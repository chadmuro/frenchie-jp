import React from 'react';
import { TextField, Button } from '@material-ui/core';

const Contact = () => {
	return (
		<>
		<TextField
			id="outlined-email-input"
			label="Email"
			type="email"
			name="email"
			autoComplete="email"
			variant="outlined"
		/>
		</>
	);
};

export default Contact;
