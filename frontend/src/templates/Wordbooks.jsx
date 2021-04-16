import React, { useState } from 'react';
import styled from 'styled-components';
// material-ui
import MenuBookIcon from '@material-ui/icons/MenuBook';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const Wrapper = styled.div`
  width: 700px;
  margin: 0 auto 50px;
  padding-top: 100px;
  @media (max-width: 960px) {
    width: 100%;
    padding: 100px 20px 50px;
  }
`;

const WordbookContainer = styled.div`
  background: #fff;
  box-shadow: 0 0 10px #eee;
`;

const WordbookGrid = styled(Grid)`
  margin: 50px 0;
  @media (max-width: 600px) {
    text-align: center;
  }
`;

const LevelGrid = styled(Grid)`
  border-top: 1px solid #ccc;
`;

const Wordbooks = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedWordCount, setSelectedWordCount] = useState(null);
  const [isRetry, setIsRetry] = useState(false);

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const toggleIsRetry = (bool) => {
    setIsRetry(!bool);
  }

  const selectWordCount = (count) => {
    setSelectedWordCount(count);
    console.log(selectedWordCount);
    console.log(isRetry);
  }

  return (
    <Wrapper>
      <Grid container spacing={2} alignItems="flex-start">
        <Grid item> <MenuBookIcon /> </Grid>
        <Grid item> 公開中の単語帳 </Grid>
      </Grid>
      <WordbookContainer>
        <WordbookGrid container>
          <Grid item sm={6} xs={12}>
            <Box p={2}>
              <Box mb={3}>
                <Typography variant="h5">ターゲット1900</Typography>
              </Box>
              <Typography color="textSecondary">単語数: 1200語</Typography>
            </Box>
          </Grid>
          <Grid item sm={3} xs={6}>
            <Box textAlign="center" fontSize={15} color="#999" my={2}>コンプリート率</Box>
            <Box position="relative" display="flex" justifyContent="center" alignItems="center" width={1} mb={2}>
              <CircularProgress value={80} variant="determinate" size={100} thickness={5} />
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
                <Box>
                  <Typography component="span" variant="h4">80</Typography>
                  <Typography variant="caption" color="textSecondary">%</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={3} xs={6}>
            <Box textAlign="center" fontSize={15} color="#999" my={2}>正答率</Box>
            <Box position="relative" display="flex" justifyContent="center" alignItems="center" width={1} mb={2}>
              <CircularProgress value={30} variant="determinate" size={100} thickness={5} />
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
                <Box>
                  <Typography component="span" variant="h4">30</Typography>
                  <Typography variant="caption" color="textSecondary">%</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </WordbookGrid>
        <LevelGrid container alignItems="center">
          <Grid item sm={3} xs={6}>
            <Box px={2} py={2}>
              <Typography variant="subtitle1">レベル1</Typography>
            </Box>
          </Grid>
          <Grid item sm={3} xs={6}>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
              テストを選択する
            </Button>
          </Grid>
          <Grid item sm={3} xs={6}>
            <Box position="relative" display="flex" justifyContent="center" alignItems="center" width={1} py={1}>
              <CircularProgress value={50} variant="determinate" size={60} thickness={5} />
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
                <Box>
                  <Typography component="span" variant="h6">50</Typography>
                  <Typography variant="caption" color="textSecondary">%</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={3} xs={6}>
            <Box position="relative" display="flex" justifyContent="center" alignItems="center" width={1} py={1}>
              <CircularProgress value={50} variant="determinate" size={60} thickness={5} />
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
                <Box>
                  <Typography component="span" variant="h6">50</Typography>
                  <Typography variant="caption" color="textSecondary">%</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </LevelGrid>
      </WordbookContainer>
      <Dialog
        open={modalOpen}
        onClose={handleClose}
      >
        <DialogTitle>
          <Box textAlign="center">テスト形式を選んで、テストを開始しよう！</Box>
        </DialogTitle>
        <DialogContent>
          <RadioGroup row aria-label="position" name="position" onChange={(event) => selectWordCount(event.target.value)}>
            <FormControlLabel value="10" control={<Radio color="primary" />} label="１０単語" />
            <FormControlLabel value="30" control={<Radio color="primary" />} label="３０単語" />
            <FormControlLabel value="50" control={<Radio color="primary" />} label="５０単語" />
          </RadioGroup>
          <Box textAlign="center" my={3}>
            <FormControlLabel 
              control={(
                <Switch
                checked={isRetry}
                onChange={() => toggleIsRetry(isRetry)}
                color="primary"
              />
              )}
              label="間違えた単語を復讐する"
            />
          </Box>
        </DialogContent>
        <Box display="flex" justifyContent="center">
          <Button onClick={handleClose}>
            キャンセル
          </Button>
          <Button onClick={handleClose} color="primary" disabled={selectedWordCount === null}>
            テストを開始する
          </Button>
        </Box>
      </Dialog>
    </Wrapper>
  )
}

export default Wordbooks