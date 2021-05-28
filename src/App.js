import React from 'react';
import { createMuiTheme, makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import SellPage from './pages/SellPage/SellPage';
import InitialPage from './pages/InitialPage/InitialPage';


const useStyles = makeStyles({
	root: {

	}
});

const theme = createMuiTheme({
	spacing: 4,
	palette: {
		primary: {
			main: '#E5E3EF',
		},
		secondary: {
			main: '#8265C9',
		},
	},
});

class App extends React.Component {

	state = {
		currentPage: "registerPage"
	};

	changePage = (currentPage) => {
		this.setState({ currentPage: currentPage })
	}

	render() {
		const choosePage = () => {
			switch (this.state.currentPage) {
				case "registerPage":
					return <RegisterPage />
				case "initialPage": //aqui ficará o valor do state para a página Login
					return <SellPage /> //aqui ficará a página Login
				default:
					return <SellPage /> //aqui deve ficar a Home
			}
		}
		return (
			<ThemeProvider theme={theme}>
				<Header changePage={this.changePage} />
				{choosePage()}
				<SellPage />
			</ThemeProvider>
		);
	}
}

export default App;