import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Header from './Header';
import Home from './Home';
import Events from './events/Events';
import Photos from './photos/Photos';
import Discussion from './discussion/Discussion';
import Contact from './contact/Contact';
import Footer from './Footer';
import UserProfile from './users/UserProfile';
import AuthContextProvider from '../contexts/AuthContext';

const useStyles = makeStyles({
	container: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column',
	},
});

const App = () => {
	const classes = useStyles();

	return (
		<div>
			<BrowserRouter>
				<div className={classes.container}>
					<AuthContextProvider>
							<Header />
							<Route path="/" exact component={Home} />
							<Route path="/events" exact component={Events} />
							<Route path="/photos" exact component={Photos} />
							<Route path="/discussion" exact component={Discussion} />
							<Route path="/contact" exact component={Contact} />
							<Route path="/profile/:id" component={UserProfile} />
							<Footer />
					</AuthContextProvider>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
