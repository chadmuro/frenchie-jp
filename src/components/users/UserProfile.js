import React, { useContext } from 'react';
import { Card, CardContent, Avatar, Container, Typography } from '@material-ui/core';
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
        padding: '2rem'
    },
    cardContent: {
        display: 'flex'
    },
    cardTitle: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        height: '150px',
        width: '150px'
    }
});

const UserProfile = () => {
    const classes = useStyles();
    const { isLoggedIn } = useContext(AuthContext);
    const userInfo = GetUserInfo(isLoggedIn);
    console.log(userInfo);

	return (
		<div className={classes.main}>
			<Container maxWidth="md">
				<Typography variant="h3" align="center" className={classes.title}>
					Profile
				</Typography>
                <Card className={classes.card}>
                    <CardContent className={classes.cardContent}>
                        <Avatar className={classes.avatar}>CM</Avatar>
                        <div className={classes.cardTitle}>
                            <Typography variant="h4" color="primary">Ipu</Typography>
                            <Typography variant="h6">Chad Muro</Typography>
                            <Typography>Member since Jan 2021</Typography>
                        </div>
                    </CardContent>
                    <Typography>Biography</Typography>
                </Card>
			</Container>
		</div>
	);
};

export default UserProfile;
