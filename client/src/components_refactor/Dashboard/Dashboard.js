import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import LocationList from '../LocationList/LocationList';
import GoogleMap from '../GoogleMap/GoogleMap';
import Marker from '../GoogleMap/Marker';
import '../../style.css';

export default () => {
  const locations = useSelector(state => state.locations);
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
    places.forEach(place => {
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

  return (
    <React.Fragment>
      <div className="top"></div>
      <LocationList />
      {locations.length && (
        <GoogleMap
          defaultZoom={6}
          defaultCenter={[4.5983562, -5.9304971]}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) =>
            apiIsLoaded(map, maps, locations)
          }
        >
          {locations.map(place => (
            <Marker
              //   markerHover={this.markerHover}
              //   markerExit={this.markerExit}
              //   hoveredId={this.state.hoveredId}
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
