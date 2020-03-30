import React from 'react';
import { Helmet } from 'react-helmet';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Textfield from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Args {
  email: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  password: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  loading: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0),
      minHeight: 'calc(100vh - 128px)',
      '& form': {
        margin: theme.spacing(2)
      }
    },
    phrase: {
      padding: theme.spacing(4)
    },
    intro: {
      marginBottom: theme.spacing(4),
      fontSize: '2.5em',
      textAlign: 'center',
      fontWeight: 'bold',
      lineHeight: 1.4
    },
    info: {
      textAlign: 'center'
    },
    warning: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'orangered'
    },
    button: {
      margin: theme.spacing(4, 0),
      padding: theme.spacing(2, 0)
    },
    submit: {
      fontWeight: 'bold'
    },
    paddingZero: {
      padding: '0 !important'
    }
  })
);

export default function SignInPresenter(args: Args) {
  const { email, password, loading, onSubmit } = args;

  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>MJU LikeLion | Sign-in</title>
      </Helmet>

      <Container disableGutters maxWidth={false}>
        <Paper className={classes.root}>
          <Container maxWidth='xs'>
            <Grid container>
              <Grid item xs={12} className={classes.phrase}>
                <Typography
                  color='primary'
                  variant='h4'
                  className={classes.intro}
                >
                  로그인
                </Typography>
              </Grid>
            </Grid>
            <form onSubmit={onSubmit}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <Textfield
                    autoComplete='email'
                    fullWidth
                    id='email'
                    label='Email'
                    name='email'
                    required
                    variant='outlined'
                    {...email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Textfield
                    autoComplete='password'
                    fullWidth
                    id='password'
                    label='비밀번호'
                    name='password'
                    required
                    type='password'
                    variant='outlined'
                    {...password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    color='primary'
                    disabled={loading}
                    fullWidth
                    type='submit'
                    variant='contained'
                    className={classes.button}
                  >
                    <Typography color='textPrimary' className={classes.submit}>
                      {loading ? '로그인중...' : '로그인'}
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Container>
        </Paper>
      </Container>
    </>
  );
}
