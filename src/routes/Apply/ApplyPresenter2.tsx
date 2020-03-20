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
  motive: {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  spec: {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  activity: {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  experience: {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  wannaMakeDesc: {
    value: any;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  volLoading: boolean;
  appLoading: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
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
    question: {
      fontSize: '1.6em',
      marginBottom: theme.spacing(2)
    },
    answer: {
      marginBottom: theme.spacing(4)
    },
    button: {
      margin: theme.spacing(2, 0),
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

export default function ApplyPresenter2(args: Args) {
  const {
    motive,
    spec,
    activity,
    experience,
    wannaMakeDesc,
    volLoading,
    appLoading,
    onSubmit
  } = args;

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
                각 질문에 대한 대답을 작성해주세요!
              </Typography>
              <Typography className={classes.info}>
                자세하게 작성해주실수록 평가하는데 도움이 됩니다!
              </Typography>
            </Grid>
          </Grid>
          <form onSubmit={onSubmit}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant='h6' className={classes.question}>
                  1. 지원동기를 작성해주세요.
                </Typography>
                <Textfield
                  fullWidth
                  id='motive'
                  multiline
                  name='motive'
                  required
                  rows='6'
                  variant='outlined'
                  className={classes.answer}
                  {...motive}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h6' className={classes.question}>
                  2. 다룰 줄 아는 프로그래밍 언어를 상/중/하로 표현해서
                  작성해주세요.
                </Typography>
                <Textfield
                  fullWidth
                  id='spec'
                  multiline
                  name='spec'
                  required
                  rows='4'
                  variant='outlined'
                  className={classes.answer}
                  {...spec}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h6' className={classes.question}>
                  3. 2020년 교내/외에서 활동하는 스터디, 모임 등이 있으신가요?
                  있다면 어느 활동을 하시나요?
                </Typography>
                <Textfield
                  fullWidth
                  id='activity'
                  multiline
                  name='activity'
                  required
                  rows='6'
                  variant='outlined'
                  className={classes.answer}
                  {...activity}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h6' className={classes.question}>
                  4. 코딩 관련해서 노력했던 것이나 프로젝트 등을 진행해본 경험이
                  있으신가요?
                  <br />
                  (사소한 것이라도 좋습니다! 진행하는 동안 느낀 점, 후기 등을
                  자세히 적어주시면 더욱 도움이 됩니다.)
                </Typography>
                <Textfield
                  fullWidth
                  id='experience'
                  multiline
                  name='experience'
                  required
                  rows='6'
                  variant='outlined'
                  className={classes.answer}
                  {...experience}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant='h6' className={classes.question}>
                  5. 만들고 싶은 웹서비스가 있으신가요? 만들고 싶은 서비스를
                  상세히 설명하고, 스케치를 작성해주세요!
                  <br />
                  (스케치는 글, 이미지 등으로 자유롭게 표현해주세요.)
                </Typography>
                <Textfield
                  fullWidth
                  id='wannaMake'
                  multiline
                  name='wannaMake'
                  required
                  rows='8'
                  variant='outlined'
                  className={classes.answer}
                  {...wannaMakeDesc}
                />
              </Grid>
              <Grid item sm={4} className={classes.paddingZero} />
              <Grid item xs={12} sm={4}>
                <Button
                  color={volLoading || appLoading ? 'secondary' : 'primary'}
                  disabled={volLoading || appLoading ? true : false}
                  fullWidth
                  type='submit'
                  variant='contained'
                  className={classes.button}
                >
                  <Typography color='textPrimary' className={classes.submit}>
                    {volLoading || appLoading ? '제출중...' : '제출하기'}
                  </Typography>
                </Button>
              </Grid>
              <Grid item sm={4} className={classes.paddingZero} />
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
}
