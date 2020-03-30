import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Textfield from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

interface Args {
  name: {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  email: {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  password: {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  gender: {
    value: any;
    onChange: (e: any) => void;
  };
  phone: {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  sid: {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  major: {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  github: {
    value: any;
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

export default function SignUpPresenter(args: Args) {
  const {
    name,
    email,
    password,
    gender,
    phone,
    sid,
    major,
    github,
    loading,
    onSubmit
  } = args;

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const genderInputLabel = useRef<HTMLLabelElement>(null);
  const [genderLabelWidth, setGenderLabelWidth] = useState<number>(0);
  useEffect(function() {
    if (genderInputLabel.current) {
      setGenderLabelWidth(genderInputLabel.current.offsetWidth);
    }
  }, []);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>MJU LikeLion | Sign-up</title>
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
                  회원가입
                </Typography>
                <Typography className={classes.info}>
                  본 회원가입은 멋쟁이 사자처럼 명지대(자연) 운영진 및
                  회원용입니다. 외부인의 경우 회원가입이 승인되지 않을 수
                  있습니다.
                </Typography>
              </Grid>
            </Grid>
            <form onSubmit={onSubmit}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <Textfield
                    autoComplete='name'
                    fullWidth
                    id='name'
                    label='이름'
                    name='name'
                    required
                    variant='outlined'
                    {...name}
                  />
                </Grid>
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
                  <FormControl fullWidth variant='outlined'>
                    <InputLabel htmlFor='password'>비밀번호</InputLabel>
                    <OutlinedInput
                      id='password'
                      type={showPassword ? 'text' : 'password'}
                      {...password}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge='end'
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={70}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth required variant='outlined'>
                    <InputLabel ref={genderInputLabel} id='gender-label'>
                      성별
                    </InputLabel>
                    <Select
                      labelId='gender-label'
                      labelWidth={genderLabelWidth}
                      {...gender}
                    >
                      <MenuItem value='MALE'>남자</MenuItem>
                      <MenuItem value='FEMALE'>여자</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Textfield
                    autoComplete='phone'
                    fullWidth
                    id='phone'
                    label='휴대전화'
                    name='phone'
                    required
                    variant='outlined'
                    {...phone}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Textfield
                    autoComplete='sid'
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
                    fullWidth
                    id='major'
                    label='전공'
                    name='major'
                    required
                    variant='outlined'
                    {...major}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Textfield
                    autoComplete='github'
                    fullWidth
                    id='github'
                    label='GitHub 계정 (username)'
                    name='github'
                    required
                    variant='outlined'
                    {...github}
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
                      {loading ? '제출중...' : '제출하기'}
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
