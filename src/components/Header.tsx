import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      backgroundColor: '#1e1e1e'
    },
    toolbar: {
      justifyContent: 'space-between'
    },
    home: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'flex-start'
    },
    avatar: {
      width: theme.spacing(20),
      height: 'fit-content',
      margin: theme.spacing(1)
    },
    campus: {
      marginLeft: theme.spacing(1)
    },
    bold: {
      fontWeight: 'bold'
    },
    link: {
      textDecoration: 'none'
    }
  })
);

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position='sticky' className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Box>
          <Link to='/' className={clsx(classes.home, classes.link)}>
            <Avatar
              alt='LIKE LION'
              src='https://mju-likelion.s3.ap-northeast-2.amazonaws.com/static/basiclogo_E_H_W.png'
              variant='square'
              className={classes.avatar}
            />
            <Typography
              variant='h5'
              color='textPrimary'
              className={classes.bold}
            >
              | MJU
            </Typography>
            <Typography color='textPrimary' className={classes.campus}>
              (Nature)
            </Typography>
          </Link>
        </Box>
        <Box>
          <a
            href='http://www.likelion-mju.com'
            target='_blank'
            className={classes.link}
          >
            <Button color='primary'>명지대 인문캠퍼스</Button>
          </a>
          <Link to='/apply-intro' className={classes.link}>
            <Button>8기 지원하기</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
