
import 'date-fns';
import React, { useState } from "react"
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  TimePicker
} from '@material-ui/pickers';
import Button from '@material-ui/core/Button';

export default function DateSelection({getQuote}) {
  // The first commit of Material-UI

  const [startDate, setStartDate] = React.useState(new Date());
  const [startTime, setStartTime] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [endTime, setEndTime] = React.useState(new Date());

  const handleStartDateChange = date => {
    setStartDate(date);
  };
  const handleEndDateChange = date => {
    setEndDate(date);
  };
  const handleStartTimeChange = date => {
    setStartTime(date);
  };
  const handleEndTimeChange = date => {
    setEndTime(date);
  };

  const handleSubmit = e => {
    e.preventDefault();
   //  (URL_STRING, METHOD)
     
   let stTime = new Date()
   console.log(startDate);
      
      console.log(startDate.getDate());

      stTime.setDate(startDate.getDate());
      
      console.log( startTime.getHours() );
     
      stTime.setHours(startTime.getHours());
      stTime.setMinutes(startTime.getMinutes());
      // stTime.setTime();

      let eTime = new Date()
      eTime.setDate(endDate.getDate());
      eTime.setHours(endTime.getHours());
      eTime.setMinutes(endTime.getMinutes());
  
      stTime = stTime.toISOString()
      eTime = eTime.toISOString()

       console.log(stTime)
       console.log(eTime);

      let qString = `?start_time=${stTime}&end_time=${eTime}` 
      console.log('qString',qString);

      getQuote(qString,'GET')
     // go through all 4 and set the dates to now******************

  };

  return (

    <form onSubmit={handleSubmit}>
  
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
     
         <div className="date-selection">
        <div>
      <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="Parking from"
        format="dd/MM/yyyy"

        value={startDate}
        name="start_date"

        InputAdornmentProps={{ position: "start" }}
        onChange={handleStartDateChange}
      />
        </div>
        <div>
      <TimePicker
        variant="inline"
        inputVariant="outlined"
        label="entry time"
        value={startTime}
        name="start_time"

        onChange={handleStartTimeChange}
      />
        </div>
        <div>
        <KeyboardDatePicker
        autoOk
        variant="inline"
        inputVariant="outlined"
        label="Parking to"
        format="dd/MM/yyyy"
        value={endDate}
        name="end_date"

        InputAdornmentProps={{ position: "start" }}
        onChange={handleEndDateChange}
      />
      </div>
      <div>
      <TimePicker
        variant="inline"
        inputVariant="outlined"
        label="exit time"
        value={endTime}
        name="end_time"

        onChange={handleEndTimeChange}
      />
      </div>
      <div>
      <Button 
      variant="contained" 
      type="submit" 
      value="Create" 
      color="primary" 
      >
        Search for parking
      </Button>
      </div>

      </div>
     
    </MuiPickersUtilsProvider>

    </form>
    
    
  );
}