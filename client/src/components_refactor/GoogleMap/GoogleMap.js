import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

const Wrapper = styled.div``;

//  width: 80%;
//  height: 84vh;

const GoogleMap = ({ children, ...props }) => (
  <div className="map">
    <div class="toggle">
      <button>toggle view</button>
    </div>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.REACT_APP_MAP_KEY
      }}
      {...props}
    >
      {children}
    </GoogleMapReact>
  </div>
);

GoogleMap.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ])
};

GoogleMap.defaultProps = {
  children: null
};

export default GoogleMap;
