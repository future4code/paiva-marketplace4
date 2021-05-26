import React from 'react';
import { ThemeProvider, createMuiTheme, makeStyles } from 
'@material-ui/core';
import Header from './Header';

const useStyles= makeStyles({
	root: {
		
	}
});

function App() {
	const theme = createMuiTheme({
		spacing: 4,
		palette: {
			primary: {
				main: '#E5E3EF',
			},
			secondary: {
				main:'#8265C9',
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<Header/>
		</ThemeProvider>
	);
}

export default App;