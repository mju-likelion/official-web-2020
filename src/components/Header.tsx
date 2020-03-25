import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MoreIcon from '@material-ui/icons/MoreVert';
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
    avatarDesktop: {
      width: theme.spacing(20),
      height: 'fit-content',
      margin: theme.spacing(1)
    },
    avatarMobile: {
      width: '36px',
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
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex'
      }
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    }
  })
);

export default function Header() {
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl
  ] = React.useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleMobileMenuOpen(event: React.MouseEvent<HTMLElement>) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  const classes = useStyles();

  return (
    <AppBar position='sticky' className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Box className={classes.sectionDesktop}>
          <Link to='/' className={clsx(classes.home, classes.link)}>
            <Avatar
              alt='LIKE LION'
              src='https://mju-likelion.s3.ap-northeast-2.amazonaws.com/static/basiclogo_E_H_W.png'
              variant='square'
              className={classes.avatarDesktop}
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
        <Box className={classes.sectionMobile}>
          <Link
            to='/'
            className={clsx(classes.home, classes.link, classes.sectionMobile)}
          >
            <Avatar
              alt='LIKE LION'
              src='https://mju-likelion.s3.ap-northeast-2.amazonaws.com/static/basiclogo_E_H_W_small.png'
              variant='square'
              className={classes.avatarMobile}
            />
            <Typography
              variant='h5'
              color='textPrimary'
              className={classes.bold}
            >
              MJU
            </Typography>
            <Typography color='textPrimary' className={classes.campus}>
              (Nature)
            </Typography>
          </Link>
        </Box>
        <Box className={classes.sectionDesktop}>
          <a
            href='http://www.likelion-mju.com'
            target='_blank'
            rel='noopener noreferrer'
            className={classes.link}
          >
            <Button color='primary'>명지대 인문캠퍼스</Button>
          </a>
          <Link to='/apply-confirm' className={classes.link}>
            <Button>지원서 제출 확인</Button>
          </Link>
          <Link to='/apply-intro' className={classes.link}>
            <Button>8기 지원하기</Button>
          </Link>
        </Box>
        <Box className={classes.sectionMobile}>
          <IconButton
            aria-label='show more'
            aria-controls='mobileMenu'
            aria-haspopup='true'
            onClick={handleMobileMenuOpen}
            color='default'
          >
            <MoreIcon />
          </IconButton>
          <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id='mobileMenu'
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
          >
            <MenuItem>
              <a
                href='http://www.likelion-mju.com'
                target='_blank'
                rel='noopener noreferrer'
                className={classes.link}
              >
                <Button color='primary'>명지대 인문캠퍼스</Button>
              </a>
            </MenuItem>
            <MenuItem>
              <Link to='/apply-confirm' className={classes.link}>
                <Button>지원서 제출 확인</Button>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to='/apply-intro' className={classes.link}>
                <Button>8기 지원하기</Button>
              </Link>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
