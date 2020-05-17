import React from 'react';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ startDate, endDate, checkoutState, id }) => {
  const dtf = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
  const [
    { value: start_mo },
    ,
    { value: start_da },
    ,
    { value: start_ye },
    ,
    { value: start_hr },
    ,
    { value: start_min },
  ] = dtf.formatToParts(startDate);
  const [
    { value: end_mo },
    ,
    { value: end_da },
    ,
    { value: end_ye },
    ,
    { value: end_hr },
    ,
    { value: end_min },
  ] = dtf.formatToParts(endDate);

  const { src, address, price } = checkoutState;

  return (
    <div className="summary-container">
      <h2 className="booking-summary-heading">Booking Summary</h2>
      <div className="img-dates">
        <div className="summary-img-container">
          <img className="summary-img" src={src} alt={address}></img>
        </div>
        <div className="summary-dates">
          <div className="icon-address">
            <div className="marker-icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </div>
            <div className="summary-address">{address}</div>
          </div>
          <div className="parking-paragraph">
            <strong>Parking From</strong>
          </div>
          <div className="date-summary">{`${start_da} ${start_mo} ${start_ye} from ${start_hr}:${start_min} `}</div>
          <div className="parking-paragraph">
            <strong>Parking to</strong>
          </div>
          <div className="date-summary">{`${end_da} ${end_mo} ${end_ye} until ${end_hr}:${end_min}`}</div>
          <div className="price-summary">
            <div className="price-heading">
              <h2>Price</h2>
            </div>
            <div className="price-amount">
              <h2>£{price}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
