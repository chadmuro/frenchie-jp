import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Events from './Events';
import Photos from './Photos';
import Discussion from './Discussion';
import Contact from './Contact';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route path="/" exact component={Home} />
					<Route path="/events" exact component={Events} />
					<Route path="/photos" exact component={Photos} />
					<Route path="/discussion" exact component={Discussion} />
					<Route path="/contact" exact component={Contact} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
