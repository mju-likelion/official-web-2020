import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(20),
      height: 'fit-content',
      margin: theme.spacing(1)
    }
  })
);

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position='sticky' color='transparent'>
      <Toolbar>
        <Avatar
          alt='LIKE LION'
          src='static/basiclogo_E_H_W.png'
          variant='square'
          className={classes.avatar}
        />
      </Toolbar>
    </AppBar>
  );
}
