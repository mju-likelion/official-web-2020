import React from 'react'
import Helmet from 'react-helmet'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Textfield from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props {
  github: {
    value: any
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
  week: {
    value: any
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  }
  loading: boolean
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0),
      minHeight: 'calc(100vh - 128px)',
    },
    title: {
      margin: theme.spacing(2, 0, 4),
      fontSize: '2.5em',
      textAlign: 'center',
      fontWeight: 'bold',
      lineHeight: 1.6,
    },
    info: {
      fontSize: theme.spacing(3),
      textAlign: 'center',
    },
    homework: {
      padding: theme.spacing(2, 6),
    },
    button: {
      margin: theme.spacing(4, 0),
      padding: theme.spacing(2, 0),
    },
    submit: {
      fontWeight: 'bold',
    },
  })
)

export default function HomeworkPresenter(props: Props) {
  const { github, week, loading, handleSubmit } = props

  const classes = useStyles()

  return (
    <>
      <Helmet>
        <title>MJU LikeLion | Homework</title>
      </Helmet>

      <Container disableGutters maxWidth={false}>
        <Paper className={classes.root}>
          <Container maxWidth='xs'>
            <Typography color='primary' variant='h4' className={classes.title}>
              과제 제출
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={5} className={classes.homework}>
                <Grid item xs={12}>
                  <Textfield
                    fullWidth
                    id='github'
                    label='GitHub Link'
                    name='github'
                    required
                    variant='outlined'
                    {...github}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Textfield
                    fullWidth
                    id='week'
                    label='Week'
                    name='week'
                    required
                    variant='outlined'
                    {...week}
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
  )
}
