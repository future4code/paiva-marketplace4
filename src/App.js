import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import Header from './Header'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import SellPage from './pages/SellPage/SellPage'
// import { theme } from "./theme"
import CartPage from "./pages/CartPage/CartPage"
import HomePage from "./pages/HomePage/HomePage"
import { createMuiTheme, makeStyles } from '@material-ui/core'

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





export default class App extends React.Component {

	state = {
		currentPage: "cartPage"
	};

	changePage = (namePage) => {
		this.setState({ currentPage: namePage })
	}

	choosePage = () => {
		switch (this.state.currentPage) {
			case "homePage":
				return <HomePage />
			case "cartPage":
				return <CartPage />
			case "registerPage":
				return <RegisterPage />
			case "sellPage":
				return <SellPage />
			default:
				return <HomePage />
		}
	}
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Header changePage={this.changePage} />
				
				{this.choosePage()}
			</ThemeProvider>
		);
	}
}

