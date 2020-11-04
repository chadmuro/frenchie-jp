import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1
	},
	link: {
		textDecoration: 'none'
	},
    title: {
		flexGrow: 1,
		textDecoration: 'none',
		color: '#fff'
    }
}));

const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Link to="/" className={classes.title}>
						<Typography variant="h6">frenchie-JP</Typography>
					</Link>
					<Link to="/" className={classes.link}>
						<Button>Home</Button>
					</Link>
					<Link to="/events" className={classes.link}>
						<Button>Events</Button>
					</Link>
					<Link to="/photos" className={classes.link}>
						<Button>Photos</Button>
					</Link>
					<Link to="/discussion" className={classes.link}>
						<Button>Discussion</Button>
					</Link>
					<Link to="/contact" className={classes.link}>
						<Button>Contact</Button>
					</Link>
					<Button variant="contained" color="secondary">
						Sign In
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
