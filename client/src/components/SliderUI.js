
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 220,
    margin: 10,
    padding: 10
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function SliderUI({changeSlider}) {
  const classes = useStyles();
  const [value, setValue] = React.useState([1.00, 20.00]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    changeSlider(newValue)
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Price Range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        min={1}
        max={20}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}