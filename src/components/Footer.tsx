import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Facebook, Instagram, GitHub } from '@material-ui/icons';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: theme.spacing(8),
      alignContent: 'center'
    },
    copyright: {
      marginLeft: theme.spacing(2)
    },
    iconGroup: {
      display: 'flex',
      justifyContent: 'flex-end',
      '& @media maxWidth: 600px': {
        justifyContent: 'center'
      },
      '& > *': {
        marginRight: theme.spacing(2)
      }
    },
    link: {
      textDecoration: 'none'
    }
  })
);

export default function Footer() {
  const classes = useStyles();

  return (
    <Container component='footer' disableGutters>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={4}>
          <Typography className={classes.copyright}>
            MJU Like Lion © {new Date().getFullYear()}
          </Typography>
        </Grid>
        <Grid item sm={4} />
        <Grid item xs={12} sm={4} className={classes.iconGroup}>
          <a
            href='https://www.facebook.com/likelionatmju/'
            className={classes.link}
          >
            <Facebook color='action' />
          </a>
          <a
            href='https://www.instagram.com/mju_likelion/'
            className={classes.link}
          >
            <Instagram color='action' />
          </a>
          <a href='https://github.com/mju-likelion' className={classes.link}>
            <GitHub color='action' />
          </a>
        </Grid>
      </Grid>
    </Container>
  );
}
