import React from 'react';
import Helmet from 'react-helmet';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Args {
  volunteers: any | undefined;
  loading: boolean;
  handleRowClick: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(4, 0),
      minHeight: 'calc(100vh - 128px)'
    },
    title: {
      margin: theme.spacing(2, 0, 4),
      fontSize: '2.5em',
      textAlign: 'center',
      fontWeight: 'bold',
      lineHeight: 1.6
    },
    tableContainer: {
      margin: theme.spacing(2, 0),
      padding: theme.spacing(0, 4)
    },
    howMany: {
      margin: theme.spacing(0, 4)
    },
    bold: {
      fontWeight: 'bold'
    }
  })
);

export default function VolunteersPresenter(args: Args) {
  const { volunteers, loading, handleRowClick } = args;

  const classes = useStyles();

  return (
    <>
      <Helmet>
        <title>MJU LikeLion | Volunteers</title>
      </Helmet>

      <Container disableGutters maxWidth={false}>
        <Paper className={classes.root}>
          <Typography color='primary' variant='h4' className={classes.title}>
            지원서 리스트
          </Typography>
          <TableContainer className={classes.tableContainer}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.bold}>이름</TableCell>
                  <TableCell className={classes.bold}>학번</TableCell>
                  <TableCell className={classes.bold}>학년</TableCell>
                  <TableCell className={classes.bold}>단과대학</TableCell>
                  <TableCell className={classes.bold}>학과</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!loading &&
                  volunteers &&
                  volunteers.map((row: any) => (
                    <TableRow
                      onClick={e => handleRowClick(e, row.id)}
                      key={row.id}
                    >
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.sid}</TableCell>
                      <TableCell>{row.grade}</TableCell>
                      <TableCell>{row.college}</TableCell>
                      <TableCell>{row.major}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Typography color='primary' className={classes.howMany}>
            {!loading && `총 ${volunteers.length}명`}
          </Typography>
        </Paper>
      </Container>
    </>
  );
}
