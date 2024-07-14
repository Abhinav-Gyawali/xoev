import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const PriceSlider = () => {
  const [value, setValue] = useState([50, 50000]); // Initial min and max values

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography id="range-slider" gutterBottom>
        Price Range
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        min={50}
        max={50000}
      />
      <Typography gutterBottom>
        Range: ${value[0]} - ${value[1]}
      </Typography>
    </Box>
  );
};

export default PriceSlider;