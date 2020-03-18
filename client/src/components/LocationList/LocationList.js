import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchParkingLocations } from '../../actions/parkingLocations';

import CardUI from './CardUI';

export const LocationList = ({ showHideClass }) => {
  const locations = useSelector(state => state.locations.locations);

  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchParkingLocations()), [dispatch]);

  return (
    <div className={showHideClass ? 'show list' : 'hide list'}>
      {locations.length &&
        locations.map(place => (
          <CardUI
            key={place._id}
            src={place.image}
            id={place._id}
            address={place.formatted_address}
            price={place.quote ? place.quote : place.price}
            start_date={place.start_date ? place.start_date : Date.now()}
            end_date={place.end_date ? place.end_date : Date.now()}
          />
        ))}
    </div>
  );
};

export default LocationList;
