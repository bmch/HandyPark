import React from 'react';
import Logo from '../assets/graphics/handyparklogo@2x.png';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default () => {
  const currentUser = useSelector(state => state.user.currentUser);
  return (
    <div className="top-header">
      <div className="logo">
        <Link to="/">
          <img className="logo" src={Logo} alt="Handy Park Logo" />
        </Link>
      </div>
      <div className="top-links">
        {!currentUser.id && (
          <div>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
        {!!currentUser.id && (
          <div>
            <Link to="/account">Account</Link>
          </div>
        )}
        <div>
          <Link to="/login">{!!currentUser.id ? 'Logout' : 'Login'}</Link>
        </div>
      </div>
    </div>
  );
};
