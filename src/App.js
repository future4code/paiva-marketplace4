import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage'
import RegisterPage from './pages/RegisterPage/RegisterPage';
import SellPage from './pages/SellPage/SellPage';
import CartPage from './pages/CartPage/CartPage';
import CartItem from './components/CartItem/CartItem';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;     
  }`

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
    currentPage: "homePage"
  };

  changePage = (namePage) => {
    this.setState({ currentPage: namePage })
  }

  choosePage = () => {
    switch (this.state.currentPage) {
      case "homePage":
        return <HomePage changePage={this.changePage} />
      case "registerPage":
        return <RegisterPage />
      case "sellPage":
        return <SellPage changePage={this.changePage} />
      case "cartPage":
        return <CartPage />
      default:
        return <HomePage changePage={this.changePage} />
    }
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header changePage={this.changePage} />

        <Footer />
        {this.choosePage()}
      </ThemeProvider>
    );
  }
}

