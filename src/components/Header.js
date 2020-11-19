import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	Button,
	Typography,
	IconButton,
	Menu,
	MenuItem,
} from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import MenuIcon from '@material-ui/icons/Menu';
import SignUpModal from './users/SignUpModal';
import LoginModal from './users/LoginModal';
import { authLogout } from '../hooks/useAuth';
import { AuthContext } from '../contexts/AuthContext';

const useStyles = makeStyles({
	link: {
		textDecoration: 'none',
		color: '#220A03',
	},
	title: {
		flexGrow: 1,
		textDecoration: 'none',
		color: '#fff',
	},
	navigation: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
});

const Header = () => {
	const classes = useStyles();
	const { isLoggedIn } = useContext(AuthContext);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const [openSignUp, setOpenSignUp] = useState(false);
	const [openLogin, setOpenLogin] = useState(false);

	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const openSignUpModal = () => {
		setOpenSignUp(!openSignUp);
		handleClose();
	};

	const openLoginModal = () => {
		setOpenLogin(!openLogin);
		handleClose();
	};

	const handleLogout = () => {
		authLogout();
		handleClose();
	};

	return (
		<div>
			<AppBar position="sticky">
				<Toolbar>
					<Link to="/" className={classes.title}>
						<Typography variant="h6">Tokyo Frenchies</Typography>
					</Link>
					<div className={classes.navigation}>
						{isMobile ? (
							<>
								<IconButton
									color="inherit"
									aria-label="menu"
									onClick={handleMenu}
								>
									<MenuIcon />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									keepMounted
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={open}
									onClose={handleClose}
								>
									<MenuItem onClick={handleClose}>
										<Link to="/" className={classes.link}>
											Home
										</Link>
									</MenuItem>
									<MenuItem onClick={handleClose}>
										<Link to="/events" className={classes.link}>
											Events
										</Link>
									</MenuItem>
									<MenuItem onClick={handleClose}>
										<Link to="/photos" className={classes.link}>
											Photos
										</Link>
									</MenuItem>
									<MenuItem onClick={handleClose}>
										<Link to="/discussion" className={classes.link}>
											Discussion
										</Link>
									</MenuItem>
									<MenuItem onClick={handleClose}>
										<Link to="/contact" className={classes.link}>
											Contact
										</Link>
									</MenuItem>
								</Menu>
							</>
						) : (
							<>
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
							</>
						)}
						{!isLoggedIn && (
							<>
								<SignUpModal open={openSignUp} setOpen={setOpenSignUp} />
								<Button
									variant="contained"
									color="secondary"
									onClick={openSignUpModal}
								>
									Sign Up
								</Button>

								<LoginModal open={openLogin} setOpen={setOpenLogin} />
								<Button
									variant="contained"
									color="secondary"
									onClick={openLoginModal}
								>
									Login
								</Button>
							</>
						)}
						{isLoggedIn && (
							<Link to="/" className={classes.link}>
								<Button
									variant="contained"
									color="secondary"
									onClick={handleLogout}
								>
									Logout
								</Button>
							</Link>
						)}
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
