import React from 'react';
import BookButton from './BookButton';
import { useSelector, useDispatch } from 'react-redux';
import { hover, unhover } from '../../actions/onMouseHover';

export default ({
  src,
  hoveredId,
  address,
  id,
  price,
  cardHover,
  cardExit,
  start_date,
  end_date
}) => {
  const hoverID = useSelector(state => state.hoverID);
  const dispatch = useDispatch();

  return (
    <div
      onMouseEnter={() => dispatch(hover(id))}
      onMouseLeave={() => dispatch(unhover())}
      className={hoverID === id ? 'card hover-state' : 'card base-state'}
    >
      <div>
        <img src={src} alt={address}></img>
      </div>

      <div>{address}</div>
      <div className="last-div-card">
        <div>£{parseFloat(price).toFixed(2)} </div>
        <div>
          <BookButton
            id={id}
            price={price}
            start_date={start_date}
            end_date={end_date}
          />
        </div>
      </div>
    </div>
  );
};
