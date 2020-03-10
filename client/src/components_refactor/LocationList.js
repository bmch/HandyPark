import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchParkingLocations } from '../actions/parkingLocations';
import CardUI from './CardUI';

export const LocationList = props => {
  useEffect(() => {
    props.fetchData();
    console.log(props.locations);
  }, []);

  return (
    <div>
      {props.locations.length === 0 ? (
        <p>No locations</p>
      ) : (
        props.locations.map(place => {
          return (
            <CardUI
              key={place._id}
              src={place.image}
              id={place._id}
              address={place.formatted_address}
              // hoveredId={this.state.hoveredId}
              price={place.quote ? place.quote : place.price}
              start_date={place.start_date ? place.start_date : Date.now()}
              end_date={place.end_date ? place.end_date : Date.now()}
              // cardHover={this.cardHover}
              // cardExit={this.cardExit}
            />
          );
        })
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    locations: state.locations
  };
};

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchParkingLocations())
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationList);
