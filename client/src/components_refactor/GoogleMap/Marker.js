import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { hover, unhover } from '../../actions/onMouseHover';

import MarkerPNG from '../../assets/graphics/Sample_2.10-01-red.png';
import MarkerHoverPNG from '../../assets/graphics/Sample_2.9-01-purple.png';

const Wrapper = styled.div`
  background-image: url(${MarkerPNG});
  height: 100px;
  width: 59px;
  transform: translate(-50%, -100%);

  position: absolute;
  left: -10;
  bottom: -90;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top;
`;

const HighLightWrapper = styled.div`
  background-image: url(${MarkerHoverPNG});
  height: 106px;
  width: 65px;
  transform: translate(-50%, -100%);

  position: absolute;
  left: -10;
  bottom: -90;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: left top;
`;

const Price = styled.h1`
  font-size: 1.5em;
  text-align: center;

  vertical-align: top;
  padding-top: 19px;
  margin-top: 2px;
  position: aboslute;
  margin: 0;
  color: white;
`;

const PriceHover = styled.h1`
  font-size: 1.8em;
  text-align: center;

  vertical-align: top;
  padding-top: 19px;
  margin-top: 2px;
  position: aboslute;
  margin: 0;
  color: white;
`;

const Marker = ({ price, id }) => {
  const hoverID = useSelector(state => state.hoverID);
  const dispatch = useDispatch();

  if (hoverID === id) {
    return (
      <HighLightWrapper
        onMouseEnter={() => {
          dispatch(hover(id));
        }}
        onMouseLeave={() => dispatch(unhover())}
        primary={id === hoverID}
      >
        {<PriceHover>{'£' + parseFloat(price).toFixed(0)}</PriceHover>}
      </HighLightWrapper>
    );
  } else
    return (
      <Wrapper
        onMouseEnter={() => {
          dispatch(hover(id));
        }}
        onMouseLeave={() => dispatch(unhover())}
        primary={id === hoverID}
      >
        {<Price>{'£' + parseFloat(price).toFixed(0)}</Price>}
      </Wrapper>
    );
};

Marker.defaultProps = {
  onClick: null
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired
};

export default Marker;
