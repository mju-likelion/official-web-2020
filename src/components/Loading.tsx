import React from 'react';
import { Helmet } from 'react-helmet';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 2),
      '& > form': {
        margin: theme.spacing(2, 8)
      },
      minHeight: 'calc(100vh - 128px)'
    },
    loading: {
      textAlign: 'center',
      margin: theme.spacing(4, 0)
    }
  })
);

export default function Loading() {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>MJU LikeLion | Loading</title>
      </Helmet>

      <Container disableGutters maxWidth={false}>
        <Paper className={classes.root}>
          <Typography variant='h4' className={classes.loading}>
            Loading...
          </Typography>
        </Paper>
      </Container>
    </>
  );
}
