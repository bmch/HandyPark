import React, { useState, useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LocationList from '../LocationList/LocationList';
import { fetchParkingLocations } from '../../actions/parkingLocations';
import GoogleMap from '../GoogleMap/GoogleMap';
import Marker from '../GoogleMap/Marker';
import Logo from '../../assets/graphics/handyparklogo@2x.png';
import DatePickerBar from '../DatePickerBar/DatePickerBar';

import './Dashboard.scss';

export default () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchParkingLocations()), [dispatch]);

  const locationsState = useSelector((state) => state.locations);
  const locations = useSelector((state) => state.locations.locations);

  /**
   * Fit map to its bounds after the api is loaded
   * @param {Object} map - current Google Map instance
   * @param {Object} maps - maps API object
   * @param {Object} places - the array of locations for the map to display
   */
  const apiIsLoaded = (map, maps, places) => {
    // Get bounds by our places
    const bounds = getMapBounds(map, maps, places);
    // Fit map to bounds
    map.fitBounds(bounds); // Sets the viewport to contain the given bounds.
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
  };

  // Return map bounds based on list of places
  const getMapBounds = (map, maps, places) => {
    const bounds = new maps.LatLngBounds();
    // A LatLngBounds instance represents a rectangle in geographical coordinates
    places.forEach((place) => {
      // Extends this bounds to contain the given point.
      bounds.extend(new maps.LatLng(place.location.lat, place.location.lng));
    });
    return bounds;
  };

  // Re-center map when resizing the window
  const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      });
    });
  };

  const [listView, setListView] = useState(true);
  const toggleListView = () => {
    console.log('toggle fired');
    setListView(!listView);
  };

  return (
    <React.Fragment>
      <DatePickerBar />

      <div className="toggle">
        <div className="map-list-button" onClick={() => toggleListView()}>
          <div className="inner-map-button">
            {listView ? 'View Map' : 'List View'}
          </div>
        </div>
      </div>

      {/* {locationsState.isFetching && <div>Loading</div>} */}
      {/* {!locationsState.isFetching && <LocationList showHideClass={listView} />} */}

      <LocationList showHideClass={listView} />
      {locations.length && (
        <GoogleMap
          showHideClass={listView}
          defaultZoom={6}
          zoom={listView ? 1 : 14}
          defaultCenter={[4.5983562, -5.9304971]}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) =>
            apiIsLoaded(map, maps, locations)
          }
        >
          {locations.map((place) => (
            <Marker
              key={place._id}
              id={place._id}
              price={place.quote ? place.quote : place.price}
              lat={place.location.lat}
              lng={place.location.lng}
            />
          ))}
        </GoogleMap>
      )}
    </React.Fragment>
  );
};
