import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import Button from '@material-ui/core/Button';

const ResultTest = () => {
  const dispatch = useDispatch();
  return (
    <div>
      Test Result
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Button onClick={() => dispatch(push(`/tests/take?limit=10`))} color="primary">
        テストを開始する
      </Button>
    </div>
  )
}

export default ResultTest;