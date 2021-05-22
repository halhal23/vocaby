import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import API from '../api';
import styled from 'styled-components';
// material-ui
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Wrapper = styled.div`
  padding: 100px 200px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 960px) {
    padding: 100px 30px 50px;
  }
`;

const TitleGrid = styled(Grid)`
  background: #fff;
  box-shadow: 0 0 10px #ccc;
  padding: 20px 20px;
  margin-bottom: 50px;
`;

const ResultTest = ({ match }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [testId, setTestId] = useState(null);
  const [testData, setTestData] = useState({
    wordbook: '',
    level: '',
    result_count: null,
    correct_count: null
  });
  const [results, setResults] = useState([]);

  useEffect(() => {
    setTestId(match.params.test_id);
    API.get(`/tests/${match.params.test_id}`)
      .then(res => {
        console.log(res.data);
        setResults(res.data.results);
        setTestData(res.data.test);
      })
  },[])
  return (
    <Wrapper>
      <TitleGrid container>
        <Grid item sm={6}>
          <Box mb={2}>
            <Typography variant="h5">{ testData.wordbook }</Typography>
          </Box>
          <Box>{ testData.level }</Box>
        </Grid>
        <Grid item sm={6}>
          <Box>{ testData.result_count }問中{ testData.correct_count }問正解しました！</Box>
        </Grid>
      </TitleGrid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>単語</TableCell>
              <TableCell>意味</TableCell>
              <TableCell align="right">結果</TableCell>
              <TableCell align="right">回答した回数</TableCell>
              <TableCell align="right">正解した回数</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {result.word.english}
                </TableCell>
                <TableCell>{result.word.japanese}</TableCell>
                <TableCell align="right">{result.is_correct ? '正解' : '不正解'}</TableCell>
                <TableCell align="right">{result.word.answer_count}</TableCell>
                <TableCell align="right">{result.word.correct_count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={() => dispatch(push(`/wordbooks`))} color="primary">
        単語帳一覧へ
      </Button>
    </Wrapper>
  )
}

export default ResultTest;