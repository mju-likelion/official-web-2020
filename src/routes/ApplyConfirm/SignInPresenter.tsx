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
  sid: {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  password: {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0),
      minHeight: 'calc(100vh - 128px)',
      '& > form': {
        margin: theme.spacing(2, 6)
      }
    },
    phrase: {
      padding: theme.spacing(4, 0),
      '& > *': {
        margin: theme.spacing(0, 2)
      }
    },
    title: {
      marginBottom: theme.spacing(4),
      fontSize: '2.5em',
      textAlign: 'center',
      fontWeight: 'bold',
      lineHeight: 1.4
    },
    button: {
      margin: theme.spacing(2, 0),
      padding: theme.spacing(2, 0)
    },
    signin: {
      fontWeight: 'bold'
    }
  })
);

export default function SignInPresenter(args: Args) {
  const { sid, password, onSubmit } = args;

  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>MJU LikeLion | Apply Confirm</title>
      </Helmet>

      <Container disableGutters maxWidth={false}>
        <Paper className={classes.root}>
          <Grid container>
            <Grid item xs={12} className={classes.phrase}>
              <Typography
                color='primary'
                variant='h4'
                className={classes.title}
              >
                학번과 비밀번호를 입력해주세요!
              </Typography>
            </Grid>
          </Grid>
          <form onSubmit={onSubmit}>
            <Container maxWidth='xs'>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <Textfield
                    autoComplete='student_id'
                    fullWidth
                    id='sid'
                    label='학번 (8자리)'
                    name='sid'
                    required
                    variant='outlined'
                    {...sid}
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
                    fullWidth
                    type='submit'
                    variant='contained'
                    className={classes.button}
                  >
                    <Typography color='textPrimary' className={classes.signin}>
                      확인
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Container>
          </form>
        </Paper>
      </Container>
    </>
  );
}
