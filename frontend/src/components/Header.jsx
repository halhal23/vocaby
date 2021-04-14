import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {getIsSignedIn} from '../reducks/users/selectors';
import {push} from 'connected-react-router';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
//material
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background:rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100vw;
  color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 0 30px;
`;

const Header = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const isSignedIn = getIsSignedIn(selector);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setIsMenuOpen(isOpen);
  };

  return (
    <HeaderWrapper>
      <Wrapper>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon style={{ color: '#fff' }} />
        </IconButton>
        <p onClick={() => push('/')}>VOCABY</p>
        <Drawer anchor={'left'} open={isMenuOpen} onClose={toggleDrawer(false)}>
          なんか適当なメニュー
        </Drawer>
      </Wrapper>
      <Wrapper>
        {
          isSignedIn ? (
            <>
              <Button color="inherit">item1</Button>
              <Button color="inherit">item2</Button>
              <Button color="inherit">item3</Button>
              <Button color="inherit">item4</Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => dispatch(push('/sign_in'))}>SIGN IN</Button>
              <Button color="inherit" onClick={() => dispatch(push('/sign_up'))}>SIGN UP</Button>
            </>
          )
        }
      </Wrapper>
    </HeaderWrapper>
  );
}

export default Header;