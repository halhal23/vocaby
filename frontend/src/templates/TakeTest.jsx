import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
// material-ui
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import useInterval from 'use-interval';
import queryString from 'query-string';
import API from '../api';

const TestWrapper = styled.div`
  background: #fff;
  box-shadow: 0 0 10px #ccc;
  padding: 20px 40px;
`;

const useStyles = makeStyles(() => {
  return createStyles({
    "button": {
      "color": "#ffb549",
      "borderColor": "#ffb549",
      "marginBottom": "10px",
      "width": "300px",
      "&:hover": {
        "color": "#fff",
        "background": "#ffb549",
      }
    },
    "countDownTime": {
      "marginBottom": '20px',
      "color": "blue",
      "textAlign": "center"
    },
    "countDownWord": {
      "color": "#aaa",
      "fontSize": "15px",
      "textAlign": "center"
    },
  })
})

const TakeTest = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [countTime, setCountTime] = useState(100);
  const [nowAnswering, setNowAnswering] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [words, setWords] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [limit, setLimit] = useState(null);
  const [testId, setTestId] = useState(null);

  useEffect(() => {
    console.log('effect');
    const queryParams = queryString.parse(props.location.search);
    setLimit(queryParams.limit);
    API.get('/tests/start', { params: { limit: queryParams.limit }})
      .then(res => {
        const word_datas = res.data.questions.map((value) => {
          const shuffled_choices = shuffle(value.choices);
          return { question: value.question, choices: shuffled_choices }
        })
        setWords(word_datas);
        setTestId(res.data.test_id);
        setNowAnswering(true);
      })
  }, [])

  useInterval(() => {
    if (countTime === 0) {
      console.log('timeout!!!!!!!!');
      doAnswer(0);
    }
    setCountTime(prevTime => prevTime - 10);
  }, 1000)

  const ToNextWord = () => {
    if (currentIndex >= (limit - 1)) {
      console.log('finish');
      setCurrentIndex(0);
      dispatch(push(`/tests/${testId}/result`));
    } else {
      setCurrentIndex(prevNumber => prevNumber + 1);
    } 
    setCountTime(100);
    setNowAnswering(true);
  }

  const doAnswer = (choicedWordId) => {
    if (choicedWordId === words[currentIndex].question.id) {
      setIsCorrect(true);
      API.post('results', { 
        test_id: testId,
        word_id: words[currentIndex].question.id,
        is_correct: true
      })
    } else {
      setIsCorrect(false);
      API.post('results', { 
        test_id: testId,
        word_id: words[currentIndex].question.id,
        is_correct: false
      })
    }
    setCountTime(-10);
    setNowAnswering(false);
  }

  const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const displayQuestion = (index) => {
    const word = words[index];
    if (word) {
      return {
        japanese: word.question.japanese,
        english: word.question.english,
        part: word.question.part
      }
    } else {
      return {
        japanese: '',
        english: '', 
        part: ''
      }
    }
  }

  return (
    <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
      <TestWrapper>
        {
          nowAnswering ? (
            <>
              <div className={classes.countDownTime}>
                <LinearProgress variant="determinate" value={countTime} />
              </div>
              <div className={classes.countDownWord}>
                { currentIndex + 1 } / { limit }
              </div>
              <Box textAlign="center" my={2}>
                <Typography variant="h3">{ displayQuestion(currentIndex).english }</Typography>
              </Box>
              <Box display="flex" flexDirection="column">
                {
                  words[currentIndex].choices.map((choice, index) => {
                    return (
                      <Button variant="outlined" className={classes.button} onClick={() => doAnswer(choice.id)} key={index}>{choice.japanese}</Button>
                    )
                  })
                }
                <Button variant="outlined" className={classes.button} onClick={() => doAnswer(0)}>???????????????</Button>
              </Box>
            </>
          ) : (
            <>
              <Box textAlign="center" my={2}>
                {
                  isCorrect ? (
                    <Typography variant="h5" style={{color: '#8bc34a'}}>?????????</Typography>
                  ) : (
                    <Typography variant="h5" color="primary">?????????...</Typography>
                  )
                }
              </Box>
              <Box textAlign="center" my={1}>
                <Typography variant="h4">{ displayQuestion(currentIndex).english }</Typography>
              </Box>
              <Box textAlign="center" my={1}>
                <Typography variant="h5">{ displayQuestion(currentIndex).japanese }</Typography>
              </Box>
              <Box textAlign="center" mt={1} mb={3}>
                <Typography variant="h5">{ displayQuestion(currentIndex).part }</Typography>
              </Box>
              <Button variant="outlined" className={classes.button} onClick={ToNextWord}>???????????????</Button>
            </>
          )
        }
      </TestWrapper>
    </Box>
  )
}

export default TakeTest;