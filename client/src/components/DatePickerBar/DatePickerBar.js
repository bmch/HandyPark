import React, { useState, useRef, Suspense } from 'react';

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
const DatePickerBar = (props) => {
  const startRef = useRef();
  const endRef = useRef();

  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  const initialEndDate = new Date();
  initialEndDate.setHours(initialEndDate.getHours() + 1);
  const [endDate, setEndDate] = useState(initialEndDate);

  const onStartChange = (date) => {
    // startRef.current.setOpen(false);
    // endRef.current.setOpen(true);
    setStartDate(date);
  };

  return (
    <div className="bar">
      <div className="both-date-divs">
        <Suspense fallback={<div>DatePicker Loading...</div>}>
          <DatePickerUI
            //  ref={startRef}
            selected={startDate}
            onChange={onStartChange}
            labelText="Parking from"
            minDate={new Date()}
          />
          <DatePickerUI
            // ref={endRef}
            selected={endDate}
            onChange={setEndDate}
            labelText="Parking to"
            minDate={startDate}
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
