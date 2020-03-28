import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Args {
  title: string;
  desc?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 2),
      minHeight: 'calc(100vh - 128px)',
      '& > form': {
        margin: theme.spacing(2, 8)
      }
    },
    title: {
      margin: theme.spacing(4, 0),
      textAlign: 'center',
      fontWeight: 'bold'
    },
    desc: {
      textAlign: 'center'
    },
    buttonBox: {
      margin: theme.spacing(4, 0),
      display: 'flex',
      padding: theme.spacing(2, 0),
      justifyContent: 'center'
    },
    link: {
      textDecoration: 'none'
    },
    toHome: {
      margin: theme.spacing(1, 2),
      fontWeight: 'bold'
    }
  })
);

export default function Complete(args: Args) {
  const { title, desc } = args;

  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>MJU LikeLion | Error</title>
      </Helmet>

      <Container disableGutters maxWidth={false}>
        <Paper className={classes.root}>
          <Typography color='primary' variant='h4' className={classes.title}>
            {title}
          </Typography>
          <Typography variant='h6' className={classes.desc}>
            {desc}
          </Typography>
          <Box className={classes.buttonBox}>
            <Link to='/' className={classes.link}>
              <Button variant='outlined'>
                <Typography color='textPrimary' className={classes.toHome}>
                  메인으로 돌아가기
                </Typography>
              </Button>
            </Link>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
