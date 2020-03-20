import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { Helmet } from 'react-helmet';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { client } from 'Apollo/Client';
import Header from 'components/Header';
import Home from 'routes/Home';
import ApplyIntro from 'routes/ApplyIntro';
import Apply from 'routes/Apply';
import Footer from 'components/Footer';

export default function App() {
  const theme = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#f39926'
      },
      secondary: {
        main: '#424242'
      }
    },
    typography: {
      fontFamily: [
        'Noto Sans KR',
        'Roboto',
        '"Helvetica Neue"',
        'sans-serif',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Arial',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(',')
    }
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Helmet>
          <title>MJU LikeLion</title>
        </Helmet>

        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/apply-intro' component={ApplyIntro} />
            <Route path='/apply' component={Apply} />
            <Redirect from='*' to='/' />
          </Switch>
          <Footer />
        </Router>
        <ToastContainer position='top-right' />
      </ThemeProvider>
    </ApolloProvider>
  );
}
