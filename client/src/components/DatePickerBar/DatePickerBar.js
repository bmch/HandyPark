import React, { useState, Suspense } from 'react';

import { fetchQuotes } from '../../actions/parkingLocations';
import './DatePickerBar.scss';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const GetPriceButton = styled.button`
  height: 2.7rem;
  border-radius: 0.4rem;
  background: #f1592c;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  padding-right: 0.8rem;
  padding-left: 0.8rem;
  border: 1px solid lightgrey;
  letter-spacing: 0.02rem;
  display: block;
  box-sizing: border-box;
  @media (max-width: 750px) {
    width: calc(100% - 2rem);
  }
`;

const DatePickerUI = React.lazy(() => import('./DatePickerUI'));
//import DatePickerUI from './DatePickerUI';
const DatePickerBar = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const initialEndDate = new Date();
  initialEndDate.setHours(initialEndDate.getHours() + 1);
  const [endDate, setEndDate] = useState(initialEndDate);

  return (
    <div className="bar">
      <div className="both-date-divs">
        <Suspense fallback={<div>Loading...</div>}>
          <DatePickerUI
            selected={startDate}
            onChange={setStartDate}
            labelText="Parking from"
          />
          <DatePickerUI
            selected={endDate}
            onChange={setEndDate}
            labelText="Parking to"
          />
        </Suspense>
      </div>

      <GetPriceButton
        className="search-button"
        onClick={() => {
          console.log('about to fire fetch quotes');
          dispatch(fetchQuotes({ startDate, endDate }));
        }}
      >
        GET PRICES
      </GetPriceButton>
    </div>
  );
};

export default DatePickerBar;
