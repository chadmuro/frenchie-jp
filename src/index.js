import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import App from './components/App';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#ff7043',
		},
		secondary: {
			main: '#8c9eff',
		},
	},
});

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.querySelector('#root')
);