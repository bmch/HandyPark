import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 56px;
  height: 22px;
  background-color: ${props => props.primary ? 'black' : 'white'};
  background-image: url("https://dxqviapaoowtl.cloudfront.net/images/markers/bookable-normal.png");
 
  border: 2px solid red;
  
  user-select: none;
  transform: translate(-50%, -50%);
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    background-color: black;
  }
`;

const Wrapper2 = styled.div`
  background-image: url("https://dxqviapaoowtl.cloudfront.net/images/markers/bookable-normal.png");
  height: 100px;
  width: 59px;
  transform: translate(-50%, -100%);
  

  position:absolute;
  left: -10;
  bottom: -90;
  
  background-size:     cover;   
  background-repeat:   no-repeat;
  background-position: left top;  
  &:hover {
    -webkit-filter: drop-shadow( 10px 5px 34px  rgba(0,0,0,0.95)) ;
    filter: drop-shadow( 10px 5px 34px   rgba(0,0,0,0.95) ) brightness(110%) hue-rotate(90deg) ;
    
  }
  
`;

const Price = styled.h1`
  font-size: 1.5em;
  text-align: center;

  vertical-align: top;
  padding-top: 19px;
  margin-top:2px;
  position: aboslute;
  margin:0;
  color: white;
  &:hover {
    color: yellow;
  }
`;


const Marker = ({markerHover,markerExit,price,id, hoveredId}) => (
  <Wrapper2
    onMouseEnter={()=> {
      markerHover(id)
    }}  
    onMouseLeave={()=> markerExit()  }
    primary={id===hoveredId}
  >
      { <Price>
       {'£'+ parseFloat(price).toFixed(0)}
      </Price> }

  </Wrapper2 >
);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Marker;
