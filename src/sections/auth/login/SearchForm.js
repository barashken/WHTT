import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, MenuItem, Menu, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';
import { ChooseDestination } from '../../@dashboard/products';


// ----------------------------------------------------------------------

export default function SearchForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };

  return (
    <>
      <Stack spacing={3}>
        
      <ChooseDestination />

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Trip length</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="short"
          name="radio-buttons-group"
        >
          <FormControlLabel value="short" control={<Radio />} label="Short (3-5 days)" />
          <FormControlLabel value="medium" control={<Radio />} label="Medium (6-9 days)" />
          <FormControlLabel value="long" control={<Radio />} label="Long (10-16 days)" />
        </RadioGroup>
      </FormControl>


      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Generate Trip
      </LoadingButton>

      </Stack>
    </>
  );
}
