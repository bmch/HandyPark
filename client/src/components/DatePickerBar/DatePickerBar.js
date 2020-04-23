import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { fetchQuotes } from '../../actions/parkingLocations';
import './DatePickerBar.scss';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

export const DatePickerBar = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const DatePickerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: white;
    border: 1px solid lightgrey;
    border-radius: 0.5rem;
    height: 53px;
    color: grey;
    padding-left: 1rem;
    margin-right: 1rem;
    margin-left: 1rem;

    @media (max-width: 750px) {
      margin-right: 0.2rem;

      padding-left: 0.5rem;
      margin-left: 0.5rem;

      margin-right: 0rem;
    }
  `;

  const BothDateDivs = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;

    @media (max-width: 750px) {
      padding-bottom: 1rem;
      maring-bottom: 1rem;
    }
  `;

  const DatePickerLabel = styled.div`
    color: rgb(56, 55, 55);
    line-height: 1.2rem;
    font-weight: 400;
    font-size: 1rem;
    padding-left: 1.1rem;
    padding-bottom: 0px;

    @media (max-width: 750px) {
      font-size: 0.8rem;
      padding-left: 0.7rem;
      margin-left: 0.3rem;
    }
  `;

  const LabelandDatePicker = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 750px) {
      padding: 0rem;
      margin: 0rem;
    }
  `;

  // height: 53px;
  const GetPriceButton = styled.button`
    height: 2.7rem;
    border-radius: 0.4rem;
    // background: #92298f;
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

  return (
    <div className="bar">
      <BothDateDivs>
        <DatePickerWrapper>
          <i className="fas fa-calendar-alt"></i>
          <LabelandDatePicker>
            <DatePickerLabel>Parking from</DatePickerLabel>
            <DatePicker
              className="datepicker"
              selected={startDate}
              onChange={(date) => {
                setStartDate(date);
              }}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              timeCaption="time"
              dateFormat="MMMM d yyyy h:mm aa"
            />
          </LabelandDatePicker>
        </DatePickerWrapper>

        <DatePickerWrapper>
          <i className="fas fa-calendar-alt"></i>
          <LabelandDatePicker>
            <DatePickerLabel>Parking to</DatePickerLabel>
            <DatePicker
              className="datepicker"
              selected={endDate}
              onChange={(date) => {
                setEndDate(date);
              }}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              timeCaption="time"
              dateFormat="MMMM d yyyy h:mm aa"
            />
          </LabelandDatePicker>
        </DatePickerWrapper>
      </BothDateDivs>

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
