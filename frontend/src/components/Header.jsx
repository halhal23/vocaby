import React from 'react';
import {useSelector} from 'react-redux';
import {getIsSignedIn} from '../reducks/users/selectors';
import {push} from 'connected-react-router';
import {useDispatch} from 'react-redux';
//material
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  item: {
    cursor: 'pointer',
  }
}));

const Header = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const isSignedIn = getIsSignedIn(selector);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} onClick={() => dispatch(push('/'))}>
            VOCABY
          </Typography>
          {
            isSignedIn ? (
              <>
                <Button color="inherit" className={classes.item}>item1</Button>
                <Button color="inherit" className={classes.item}>item2</Button>
                <Button color="inherit" className={classes.item}>item3</Button>
                <Button color="inherit" className={classes.item}>item4</Button>
              </>
            ) : (
              <>
                <Button color="inherit" className={classes.item} onClick={() => dispatch(push('/sign_up'))}>サインアップ</Button>
                <Button color="inherit" className={classes.item} onClick={() => dispatch(push('/sign_in'))}>サインイン</Button>
              </>
            )
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;