import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DatePickerUI = ({ selected, onChange, labelText }) => {
  return (
    <div>
      <label>
        <div className="date-picker-wrapper">
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
              // onFocus={(e) => (e.target.readOnly = true)}
            />
          </div>
        </div>
      </label>
    </div>
  );
};

export default DatePickerUI;
