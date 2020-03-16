import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from 'components/Header';
import Home from 'routes/Home';
import ApplyIntro from 'routes/ApplyIntro';

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
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/apply-intro' component={ApplyIntro} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
