import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import Header from './Header';
import Home from './Home';
import Events from './Events';
import Event from './Event';
import Photos from './Photos';
import Discussion from './Discussion';
import Contact from './Contact';
import Footer from './Footer';

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
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/events" exact component={Events} />
					<Route path="/events/:id" exact component={Event} />
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
