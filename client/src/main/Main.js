import React, { Component, Fragment } from 'react';
import isEmpty from 'lodash.isempty';
import ApiClient from '../services/ApiClient';
// components:
import Marker from '../components/Marker';
import SliderUI from '../components/SliderUI';
import GoogleMap from '../components/GoogleMap';
import CardUI from '../components/CardUI';
import ButtonAppBar from '../components/ButtonAppBar';
import SearchBar from '../components/SearchBar';

// consts
import LOS_ANGELES_CENTER from '../const/la_center';

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

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      presentation: [],
      hoveredId: ''
    };
  }

  componentDidMount() {
    ApiClient.fetchLocations().then(data => {
      this.setState({ places: data, presentation: data });
    });
  }

  fetchParkingQuotes = (URL_STRING, METHOD) => {
    ApiClient.fetchQuotes(URL_STRING, METHOD).then(data => {
      this.setState({ places: data, presentation: data });
    });
  };

  markerHover = id => {
    this.setState({ hoveredId: id });
  };

  markerExit = () => {
    this.setState({ hoveredId: '' });
  };

  cardHover = id => {
    this.setState({ hoveredId: id });
  };

  cardExit = () => {
    this.setState({ hoveredId: '' });
  };

  changeSlider = newValue => {
    this.setState(prevState => {
      return {
        presentation: prevState.places.filter(el => {
          return el.price > newValue[0] && el.price < newValue[1];
        })
      };
    });
  };

  render() {
    const places = this.state.presentation;
    return (
      <div>
        <ButtonAppBar />
        <SearchBar getQuote={this.fetchParkingQuotes} />

        <div className="container">
          <div className="left">
            <SliderUI changeSlider={this.changeSlider} />

            {places.map(place => (
              <CardUI
                key={place._id}
                src={place.image}
                id={place._id}
                address={place.formatted_address}
                hoveredId={this.state.hoveredId}
                price={place.quote ? place.quote : place.price}
                start_date={place.start_date ? place.start_date : Date.now()}
                end_date={place.end_date ? place.end_date : Date.now()}
                cardHover={this.cardHover}
                cardExit={this.cardExit}
              />
            ))}
          </div>

          {!isEmpty(places) && (
            <GoogleMap
              defaultZoom={6}
              defaultCenter={LOS_ANGELES_CENTER}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) =>
                apiIsLoaded(map, maps, places)
              }
            >
              {places.map(place => (
                <Marker
                  markerHover={this.markerHover}
                  markerExit={this.markerExit}
                  hoveredId={this.state.hoveredId}
                  key={place._id}
                  id={place._id}
                  price={place.quote ? place.quote : place.price}
                  lat={place.location.lat}
                  lng={place.location.lng}
                />
              ))}
            </GoogleMap>
          )}
        </div>
      </div>
    );
  }
}

export default Main;
