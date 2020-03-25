import React from 'react';
import { Link } from 'react-router-dom';
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
  wannaMakeImageUrl: string;
  file: React.RefObject<HTMLInputElement>;
  filename: string;
  onFileChange: any;
  axiosLoading: boolean;
  loading: boolean;
  onEdit: (event: React.FormEvent<HTMLFormElement>) => void;
  toBefore: React.MouseEventHandler;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0),
      '& > form': {
        margin: theme.spacing(2, 6)
      },
      minHeight: 'calc(100vh - 128px)'
    },
    phrase: {
      padding: theme.spacing(4, 0),
      '& > *': {
        margin: theme.spacing(0, 2)
      }
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
    input: {
      display: 'none'
    },
    link: {
      textDecoration: 'none'
    },
    imageButton: {
      marginRight: theme.spacing(2)
    },
    filename: {
      display: 'inline-block'
    },
    button: {
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
    wannaMakeImageUrl,
    file,
    filename,
    onFileChange,
    axiosLoading,
    loading,
    onEdit,
    toBefore
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
          <form onSubmit={onEdit}>
            <Grid container spacing={5}>
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
                  2. 다룰 줄 아는 프로그래밍 언어와, 사용할 수 있는 수준을
                  상(프로젝트 경험 있음) / 중(기능구현 경험 있음) / 하(기초지식
                  수준)로 표현해서 작성해주세요.
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
                <input
                  accept='image/*'
                  id='file'
                  onChange={onFileChange}
                  ref={file}
                  type='file'
                  className={classes.input}
                />
                {wannaMakeImageUrl && (
                  <a
                    href={wannaMakeImageUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={classes.link}
                  >
                    <Button variant='outlined' className={classes.imageButton}>
                      업로드된 이미지
                    </Button>
                  </a>
                )}
                <label htmlFor='file'>
                  <Button
                    variant='outlined'
                    color='primary'
                    component='span'
                    className={classes.imageButton}
                  >
                    사진 변경
                  </Button>
                </label>
                <Typography className={classes.filename}>{filename}</Typography>
              </Grid>
              <Grid item sm={3} className={classes.paddingZero} />
              <Grid item xs={12} sm={2}>
                <Button
                  color='secondary'
                  disabled={axiosLoading || loading}
                  fullWidth
                  type='submit'
                  variant='contained'
                  className={classes.button}
                >
                  <Typography color='textPrimary' className={classes.submit}>
                    {axiosLoading || loading ? '수정중...' : '수정하기'}
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Button
                  color='primary'
                  disabled={axiosLoading || loading}
                  fullWidth
                  variant='contained'
                  className={classes.button}
                  onClick={toBefore}
                >
                  <Typography color='textPrimary' className={classes.submit}>
                    이전 페이지
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={12} sm={2}>
                <Link to='/' className={classes.link}>
                  <Button
                    color='primary'
                    disabled={axiosLoading || loading}
                    fullWidth
                    variant='contained'
                    className={classes.button}
                  >
                    <Typography color='textPrimary' className={classes.submit}>
                      메인 페이지로
                    </Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item sm={3} className={classes.paddingZero} />
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
}
