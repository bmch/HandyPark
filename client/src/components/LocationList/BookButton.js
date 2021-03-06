import React from 'react';
import { NavLink } from 'react-router-dom';
import './BookButton.scss';
import { useHistory } from 'react-router-dom';
import BookButtonSpin from './BookButtonSpin';
import { useSelector, useDispatch } from 'react-redux';
import { addToCheckout } from '../../actions/checkout';

import './Loader.scss';

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
  const history = useHistory();
  const dispatch = useDispatch();

  const [isButtonLoading, setIsButtonLoading] = React.useState(false);

  React.useEffect(() => {
    if (isButtonLoading) {
      setTimeout(() => {
        setIsButtonLoading(false);
      }, 1500);
    }
  }, [isButtonLoading]);

  const delay = (e) => {
    e.preventDefault();
    setTimeout((params) => {
      history.push({
        pathname: `/checkout/${id}`,
        search: `?starts=${start_date}&ends=${end_date}`,
        state: { price, src, address },
      });
    }, 750);
  };

  return (
    <div className="book-button-div" onClick={delay}>
      <div>
        <BookButtonSpin
          isLoading={isButtonLoading}
          onClick={() => {
            setIsButtonLoading(true);
            dispatch(
              addToCheckout({
                location_id: id,
                price,
                start_time: start_date,
                end_time: end_date,
              })
            );
          }}
        >
          Book
        </BookButtonSpin>
      </div>
    </div>
  );
}
