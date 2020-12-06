import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import App from './components/App';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#6d4c41',
		},
		secondary: {
			main: '#eb5756',
		},
	},
});

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>,
	document.querySelector('#root')
);