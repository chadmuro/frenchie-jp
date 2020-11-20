import React, { useContext } from 'react';
import { Card, CardContent, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { GetUserInfo } from '../../hooks/useFirestore';
import { AuthContext } from '../../contexts/AuthContext';

const useStyles = makeStyles({
	main: {
		flexGrow: 1,
	},
	title: {
		paddingTop: '5rem',
	},
	card: {
		maxWidth: '800px',
		padding: '2rem',
	},
	cardTitle: {
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
});

const UserProfile = () => {
	const classes = useStyles();
	const { isLoggedIn } = useContext(AuthContext);
	const userInfo = GetUserInfo(isLoggedIn);
	const { frenchieName, firstName, lastName, location, biography } = userInfo;

	return (
		<div className={classes.main}>
			<Container maxWidth="md">
				<Typography variant="h3" align="center" className={classes.title}>
					Profile
				</Typography>
				<Card className={classes.card}>
					<CardContent>
						<div className={classes.cardTitle}>
							<Typography variant="h4" color="primary">
								{frenchieName}
							</Typography>
							<Typography variant="h6">
								{firstName} {lastName}
							</Typography>
							<Typography>Location: {location}</Typography>
							<Typography>Biography: {biography}</Typography>
						</div>
					</CardContent>
				</Card>
			</Container>
		</div>
	);
};

export default UserProfile;
