import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Textfield from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Args {
  name: {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  email: {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  phone: {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  grade: {
    value: any;
    onChange: (e: any) => void;
  };
  college: {
    value: any;
    onChange: (e: any) => void;
  };
  major: {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  loading: boolean;
  onEdit: React.MouseEventHandler;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0),
      '& > form': {
        margin: theme.spacing(2, 8)
      },
      minHeight: 'calc(100vh - 128px)'
    },
    phrase: {
      padding: theme.spacing(4, 0)
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
      margin: theme.spacing(2, 0),
      padding: theme.spacing(2, 0)
    },
    continue: {
      fontWeight: 'bold'
    },
    paddingZero: {
      padding: '0 !important'
    }
  })
);

export default function EditPresenter1(args: Args) {
  const {
    name,
    email,
    phone,
    grade,
    college,
    major,
    loading,
    onEdit,
    onSubmit
  } = args;

  const gradeInputLabel = useRef<HTMLLabelElement>(null);
  const collegeInputLabel = useRef<HTMLLabelElement>(null);
  const [gradeLabelWidth, setGradeLabelWidth] = useState<number>(0);
  const [collegeLabelWidth, setCollegeLabelWidth] = useState<number>(0);
  useEffect(() => {
    if (gradeInputLabel.current) {
      setGradeLabelWidth(gradeInputLabel.current.offsetWidth);
    }
    if (collegeInputLabel.current) {
      setCollegeLabelWidth(collegeInputLabel.current.offsetWidth);
    }
  }, []);

  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>MJU LikeLion | Apply</title>
      </Helmet>

      <Container disableGutters maxWidth={false}>
        <Paper className={classes.root}>
          <Grid container>
            <Grid item xs={12} className={classes.phrase}>
              <Typography
                color='primary'
                variant='h4'
                className={classes.intro}
              >
                지원자의 정보입니다.
              </Typography>
              <Typography className={classes.info}>
                수정을 원하실 경우, 위의 내용을 수정하시고 아래 '수정하기'
                버튼을 누르시면 수정됩니다.
              </Typography>
            </Grid>
          </Grid>
          <form onSubmit={onSubmit}>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
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
              <Grid item xs={12} sm={4}>
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
              <Grid item xs={12} sm={4}>
                <Textfield
                  autoComplete='phone'
                  fullWidth
                  id='phone'
                  label='휴대폰 번호'
                  name='phone'
                  required
                  variant='outlined'
                  {...phone}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth required variant='outlined'>
                  <InputLabel ref={gradeInputLabel} id='grade-label'>
                    학년
                  </InputLabel>
                  <Select
                    labelId='grade-label'
                    labelWidth={gradeLabelWidth}
                    {...grade}
                  >
                    <MenuItem value='1'>1학년</MenuItem>
                    <MenuItem value='2'>2학년</MenuItem>
                    <MenuItem value='3'>3학년</MenuItem>
                    <MenuItem value='4'>4학년</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth required variant='outlined'>
                  <InputLabel ref={collegeInputLabel} id='college-label'>
                    단과대
                  </InputLabel>
                  <Select
                    labelId='college-label'
                    labelWidth={collegeLabelWidth}
                    {...college}
                  >
                    <MenuItem value='ICT융합대학'>ICT융합대학</MenuItem>
                    <MenuItem value='건축대학'>건축대학</MenuItem>
                    <MenuItem value='공과대학'>공과대학</MenuItem>
                    <MenuItem value='예술체육대학'>예술체육대학</MenuItem>
                    <MenuItem value='자연과학대학'>자연과학대학</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Textfield
                  autoComplete='major'
                  fullWidth
                  id='major'
                  label='학과 (전공)'
                  name='major'
                  required
                  variant='outlined'
                  {...major}
                />
              </Grid>
              <Grid item sm={3} className={classes.paddingZero} />
              <Grid item xs={12} sm={3}>
                <Button
                  color='secondary'
                  disabled={loading}
                  fullWidth
                  variant='contained'
                  className={classes.button}
                  onClick={onEdit}
                >
                  <Typography color='textPrimary' className={classes.continue}>
                    {loading ? '수정중...' : '수정하기'}
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={3}>
                <Button
                  color='primary'
                  fullWidth
                  type='submit'
                  variant='contained'
                  className={classes.button}
                >
                  <Typography color='textPrimary' className={classes.continue}>
                    계속
                  </Typography>
                </Button>
              </Grid>
              <Grid item sm={3} className={classes.paddingZero} />
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
}
