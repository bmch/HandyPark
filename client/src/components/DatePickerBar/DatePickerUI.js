import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DatePickerUI = ({ selected, onChange, labelText, minDate }) => {
  // const calendarRef = useRef();

  return (
    <div>
      {/* <label> */}
      <div
        className="date-picker-wrapper"
        // onClick={() => {
        //   calendarRef.current.setOpen(true);
        // }}
      >
        <div className="calendar-icon">
          <FontAwesomeIcon icon={faCalendarAlt} />
        </div>
        <div className="label-datepicker">
          <div className="date-picker-label">{labelText}</div>
          <DatePicker
            className="datepicker"
            selected={selected}
            onChange={(date) => {
              onChange(date);
            }}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="time"
            dateFormat="MMMM d yyyy h:mm aa"
            withPortal
            minDate={minDate}
            // ref={ref}
            //onClickOutside={clickOutside}
          />
        </div>
      </div>
      {/* </label> */}
    </div>
  );
};

export default DatePickerUI;
