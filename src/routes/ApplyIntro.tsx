import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0),
      '& > *': {
        margin: theme.spacing(2),
        padding: theme.spacing(0, 4)
      }
    },
    intro: {
      margin: theme.spacing(2, 0),
      fontSize: '2.5em',
      textAlign: 'center',
      fontWeight: 'bold',
      lineHeight: 1.6
    },
    applyButton: {
      margin: theme.spacing(4, 0),
      display: 'flex',
      justifyContent: 'center'
    },
    link: {
      textDecoration: 'none'
    },
    applyTypo: {
      margin: theme.spacing(2, 4),
      fontWeight: 'bold'
    },
    title: {
      marginTop: theme.spacing(6),
      fontWeight: 'bold'
    },
    desc: {
      padding: theme.spacing(0, 4),
      fontSize: '1.5em',
      '& p': {
        margin: theme.spacing(1, 0)
      }
    }
  })
);

export default function ApplyIntro() {
  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>MJU LikeLion | Apply Intro</title>
      </Helmet>

      <Container disableGutters maxWidth={false}>
        <Paper className={classes.root}>
          <Typography variant='h4' color='primary' className={classes.intro}>
            머리속에 세상에 내보이고 싶은 서비스가 있으신 분,
            <br /> 누구보다 열정있게 코딩할 수 있으신 분,
            <br />
            {'전공 <<<<< 코딩이다 하시는 분!'}
            <br />
            2020년 명지대(자연) 멋쟁이 사자처럼과 함께해요!
          </Typography>
          <Box className={classes.applyButton}>
            <Link to='/apply' className={classes.link}>
              <Button variant='outlined'>
                <Typography variant='h6' className={classes.applyTypo}>
                  지원서 작성하러 가기
                </Typography>
              </Button>
            </Link>
          </Box>
          <Typography variant='h4' className={classes.title}>
            8기에서 새롭게 바뀐 점이 있다면?
          </Typography>
          <Typography variant='h6' className={classes.desc}>
            <p>이번 8기부터는 멋쟁이 사자처럼이 큰 변화를 가지게 되었습니다.</p>
            <p>
              교육활동이 주로 이루어졌던 기존과는 달리 코딩을 배우는 데에 그치지
              않고
              <br />
              실제로 자신만의 웹서비스를 제작할 수 있도록 하고자 합니다.
            </p>
            <p>
              또한 제작된 서비스를 이용하여 창업, 스타트업과 같이 구체적인
              수익모델을 설계할 수 있도록 할 예정입니다.
            </p>
          </Typography>
          <Typography variant='h4' className={classes.title}>
            커리큘럼은 어떻게 되나요?
          </Typography>
          <Typography variant='h6' className={classes.desc}>
            <p>4~5월: 아이디어 설계 및 팀 모집</p>
            <p>
              6~9월: 다양한 언어(HTML, CSS, Python, Django)를 배우며 웹서비스
              개발단계
            </p>
            <p>9월: 다른 대학들과 함께 멋쟁이 사자처럼 해커톤 대회참가</p>
            <p>
              10~12월: 개발한 웹서비스를 이용하여 스타트업 설계, 운영방식 교육
              등을 진행
            </p>
          </Typography>
          <Typography variant='h4' className={classes.title}>
            모집 관련 사항들
          </Typography>
          <Typography variant='h6' className={classes.desc}>
            <p>최종 선발 인원: 15명 내외</p>
            <p>1차 서류 마감일: 3월 31일 (화) 23시까지</p>
            <p>1차 합격자 발표: 4월 3일 (금) 예정</p>
            <p>면접 진행: 최종 선발인원의 1.5~2배수</p>
            <p>면접 진행 날짜: 추후 공지예정 (4월 둘째주 내 진행)</p>
          </Typography>
          <Typography variant='h4' className={classes.title}>
            그 외에 궁금한 사항이 있다면?
          </Typography>
          <Typography variant='h6' className={classes.desc}>
            <p>
              아래에 있는 페이스북, 인스타그램, 이메일 등을 이용하여 연락주시면
              <br />
              성실히 답변드리겠습니다!
            </p>
          </Typography>
        </Paper>
      </Container>
    </>
  );
}
