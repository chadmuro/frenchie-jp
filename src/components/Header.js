import React from 'react';
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/Appbar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
    },
    title: {
        flexGrow: 1
    }
}));

const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>frenchie-JP</Typography>
					<Button>Home</Button>
					<Button>Events</Button>
					<Button>Members</Button>
					<Button>Photos</Button>
					<Button>Discussion</Button>
					<Button variant="outlined" color="secondary">Sign In</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
