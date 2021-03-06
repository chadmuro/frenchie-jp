import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import App from './App';

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
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThemeProvider>,
	document.querySelector('#root')
);
