import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      width: '100%',
      height: '100%',
      display: 'flex',
      position: 'fixed',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundSize: 'cover',
      justifyContent: 'center',
      backgroundImage:
        'url(https://mju-likelion.s3.ap-northeast-2.amazonaws.com/static/home/main_background.png)',
      backgroundPositionX: 'center',
      backgroundPositionY: 'center'
    },
    title: {
      marginTop: -theme.spacing(10),
      textAlign: 'center',
      '&::before': {
        top: -theme.spacing(2),
        left: -theme.spacing(2),
        content:
          'url(https://mju-likelion.s3.ap-northeast-2.amazonaws.com/static/home/left-wing.png)',
        position: 'relative'
      },
      '&::after': {
        top: -theme.spacing(2),
        left: theme.spacing(2),
        content:
          'url(https://mju-likelion.s3.ap-northeast-2.amazonaws.com/static/home/right-wing.png)',
        position: 'relative'
      }
    },
    hr: {
      position: 'relative',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    subtitle: {
      textAlign: 'center'
    },
    button: {
      width: theme.spacing(18),
      height: theme.spacing(8),
      marginTop: theme.spacing(3)
    },
    avatar: {
      width: '260px',
      height: 'auto',
      opacity: '.8',
      marginTop: theme.spacing(8)
    },
    fontBold: {
      fontWeight: 'bold'
    }
  })
);

export default function Home() {
  const classes = useStyles();

  return (
    <Container disableGutters maxWidth={false}>
      <Box className={classes.background}>
        <Box>
          <Typography variant='h3' className={classes.title}>
            <span className={classes.fontBold}>멋쟁이 사자처럼</span> 8기
          </Typography>
          <hr className={classes.hr} />
        </Box>
        <Typography variant='h6' className={classes.subtitle}>
          {'모집기간: '}
          <span className={classes.fontBold}>
            20년 3월 18일 ~ 20년 3월 29일
          </span>
        </Typography>
        <Button variant='outlined' className={classes.button}>
          <Typography variant='h6' className={classes.fontBold}>
            지원하기
          </Typography>
        </Button>
        <Avatar
          alt='HACK YOUR LIFE'
          src='https://mju-likelion.s3.ap-northeast-2.amazonaws.com/static/home/slogan2_W.png'
          variant='square'
          className={classes.avatar}
        />
      </Box>
    </Container>
  );
}
