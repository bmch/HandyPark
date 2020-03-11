import React from 'react';
import BookButton from './BookButton';

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
}) => (
  <div
    // onMouseEnter={() => cardHover(id)}
    // onMouseLeave={() => cardExit()}
    className={hoveredId === id ? 'card hover-state' : 'card base-state'}
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
