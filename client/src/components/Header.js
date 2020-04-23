import React, { useEffect } from 'react';
import Logo from '../assets/graphics/handyparklogo@2x.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { beginLogout } from '../actions/user';

const SignUpWrapper = styled.div`
  border: 1px solid rgb(235, 235, 235) !important;
  border-radius: 21px !important;
  display: inline-flex !important;
  outline: currentcolor none medium !important;
  padding: 0px 16px !important;
  user-select: auto !important;
  align-items: center !important;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 1px 2px !important;
  height: 42px !important;
  cursor: pointer !important;
`;

const LinkWrapperDiv = styled.div`
  display: inline-flex !important;
  padding: 0px 16px !important;
  user-select: auto !important;
  align-items: center !important;
  height: 42px !important;
`;

const StyledLink = styled(Link)`
  color: #222222 !important;
  text-decoration: none !important;
  white-space: nowrap !important;
  text-align: inherit !important;
  line-height: 18px !important;
  font-weight: 600 !important;
  font-size: 16px !important;
  cursor: pointer !important;
`;

export default () => {
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  const userLinks = (
    <div className="top-links">
      <LinkWrapperDiv>
        <StyledLink to="/account">Account</StyledLink>
      </LinkWrapperDiv>
      <LinkWrapperDiv>
        <StyledLink
          to="/"
          onClick={() => {
            dispatch(beginLogout());
          }}
        >
          Log out
        </StyledLink>
      </LinkWrapperDiv>
    </div>
  );

  const guestLinks = (
    <div className="top-links">
      <SignUpWrapper>
        <StyledLink to="/signup">Sign Up</StyledLink>
      </SignUpWrapper>
      <LinkWrapperDiv>
        <StyledLink to="/login">Log in</StyledLink>
      </LinkWrapperDiv>
    </div>
  );

  return (
    <div className="top-header">
      <div className="logo">
        <Link to="/">
          <img className="logo" src={Logo} alt="Handy Park Logo" />
        </Link>
      </div>
      {isAuth ? userLinks : guestLinks}
    </div>
  );
};
