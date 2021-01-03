import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Header from './components/Header';
import Home from './components/Home';
import Events from './components/events/Events';
import Photos from './components/photos/Photos';
import Discussion from './components/discussion/Discussion';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';
import UserProfile from './components/users/UserProfile';
import AuthContextProvider from './contexts/AuthContext';

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
			<div className={classes.container}>
				<AuthContextProvider>
					<Header />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/events" exact component={Events} />
						<Route path="/photos" exact component={Photos} />
						<Route path="/discussion" exact component={Discussion} />
						<Route path="/contact" exact component={Contact} />
						<Route path="/profile/:id" component={UserProfile} />
					</Switch>
					<Footer />
				</AuthContextProvider>
			</div>
		</div>
	);
};

export default App;
