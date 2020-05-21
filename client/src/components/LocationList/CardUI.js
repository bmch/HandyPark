import React from 'react';
import BookButton from './BookButton';
import { useSelector, useDispatch } from 'react-redux';
import { hover, unhover } from '../../actions/onMouseHover';

import FadeLoader from 'react-spinners/FadeLoader';

export default ({ src, address, id, price, start_date, end_date }) => {
  const hoverID = useSelector((state) => state.hoverID);
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.locations.isFetching);
  price = parseFloat(price).toFixed(2);
  return (
    <div
      onMouseEnter={() => dispatch(hover(id))}
      onMouseLeave={() => dispatch(unhover())}
      className={hoverID === id ? 'card hover-state' : 'card base-state'}
    >
      <div>
        <img className="card-img" src={src} alt={address}></img>
      </div>

      <div>{address}</div>
      <div className="last-div-card">
        {isFetching ? (
          <FadeLoader color={'rgb(241, 89, 44)'} loading={isFetching} />
        ) : (
          <div>£{price}</div>
        )}

        <div>
          <BookButton
            id={id}
            price={price}
            start_date={start_date}
            end_date={end_date}
            src={src}
            address={address}
          />
        </div>
      </div>
    </div>
  );
};
