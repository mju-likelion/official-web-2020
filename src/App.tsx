import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { client } from 'Apollo/Client';
import Header from 'components/Header';
import Home from 'routes/Home';
import SignUp from 'routes/Auth/SignUp';
import ApplyConfirm from 'routes/ApplyConfirm';
import ApplyIntro from 'routes/ApplyIntro';
import Apply from 'routes/Apply';
import Footer from 'components/Footer';

function Analytics(): JSX.Element {
  const location = useLocation();

  ReactGA.initialize('UA-161833783-1');
  ReactGA.pageview(location.pathname + location.search);

  return <></>;
}

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
          <Analytics />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/sign-up' component={SignUp} />
            <Route path='/apply-confirm' component={ApplyConfirm} />
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
