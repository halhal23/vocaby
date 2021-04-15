import React from 'react';
import styled from 'styled-components';
// import WordbookImage from '../src/assets/images/wordbook.png'
import WordbookImage from '../assets/images/wordbook.png';
// material-ui
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Wrapper = styled.div`
  width: 700px;
  margin: 0 auto 50px;
  padding-top: 100px;
  @media (max-width: 960px) {
    width: 100%;
    padding: 100px 20px 50px;
  }
`;

const WordbookContainer = styled(Grid)`
  width: 100%;
  height: 100px;
  background: #fff;
  box-shadow: 0 0 10px #eee;
  box-sizing: border-box;
  @media (max-width: 600px) {
    flex-direction: column;
    height: 350px;
  }
`;

const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
`;

const Wordbooks = () => {
  return (
    <Wrapper>
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item> <MenuBookIcon /> </Grid>
        <Grid item> 公開中の単語帳 </Grid>
      </Grid>
      <WordbookContainer container>
        <Grid item xs={4} sm={2} container justify="center" alignItems="center" style={{height: '100%'}}>
          <Box position="relative" display="inline-flex">
            <CircularProgress value={80} variant="determinate" size={80} thickness={4} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="caption" component="div" color="textSecondary">{`80%`}</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={5} sm={7}>
          {/* <Box px={2} py={1} style={{background: '#ccc'}}>b</Box> */}
          <Box p={2}>
            <div>ターゲット1900</div>
            <p>正答率</p>
          </Box>
        </Grid>
        <Grid item xs={3} sm={3} style={{height: '100%'}}>
          {/* <Box style={{background: '#ccc'}} height={1}> c </Box> */}
          <div style={{height: '100%'}}>c</div>
        </Grid>
      </WordbookContainer>
    </Wrapper>
  )
}

export default Wordbooks