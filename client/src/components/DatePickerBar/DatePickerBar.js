import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { fetchQuotes } from '../../actions/parkingLocations';
import './DatePickerBar.scss';
import { useDispatch } from 'react-redux';

export const DatePickerBar = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="bar">
      Parking from
      <DatePicker
        className="datepicker"
        isClearable
        selected={startDate}
        onChange={date => {
          setStartDate(date);
        }}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      Parking to
      <DatePicker
        isClearable
        className="datepicker"
        selected={endDate}
        onChange={date => {
          setEndDate(date);
        }}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={30}
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <div>
        <button
          className="search-button"
          onClick={() => {
            console.log('about to fire fetch quotes');
            dispatch(fetchQuotes({ startDate, endDate }));
          }}
        >
          Get Prices
        </button>
      </div>
    </div>
  );
};
