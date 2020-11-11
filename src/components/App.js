import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Header from './Header';
import Home from './Home';
import Events from './Events';
import Photos from './Photos';
import Discussion from './Discussion';
import Contact from './Contact';
import Footer from './Footer';
import { auth } from '../firebase/config';

const useStyles = makeStyles({
	container: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
	},
});

const App = () => {
	const classes = useStyles();
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	auth.onAuthStateChanged((user) => {
		if (user) {
			setIsLoggedIn(true);
			console.log('logged in as ' + user.email)
		} else {
			setIsLoggedIn(false);
			console.log('not logged in');
		}
	});

	return (
		<div>
			<BrowserRouter>
				<div className={classes.container}>
					<Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
					<Route path="/" exact component={Home} />
					<Route path="/events" exact component={Events} />
					<Route path="/photos" exact component={Photos} />
					<Route path="/discussion" exact component={Discussion} />
					<Route path="/contact" exact component={Contact} />
					<Footer />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
