import React from 'react';
import { NavLink } from 'react-router-dom';
import './BookButton.scss';
export default function BookButton({
  id,
  price,
  start_date,
  end_date,
  src,
  address,
}) {
  start_date = new Date(start_date).toISOString().substring(0, 16);
  end_date = new Date(end_date).toISOString();
  return (
    <div>
      <NavLink
        className="book-navlink"
        to={{
          pathname: `/checkout/${id}`,
          search: `?starts=${start_date}&ends=${end_date}`,
          state: { price, src, address },
        }}
      >
        <button className="book-button">Book</button>
      </NavLink>
    </div>
  );
}
