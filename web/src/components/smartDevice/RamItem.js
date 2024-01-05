import { Stack, 
  Link, 
  Typography, 
  FormControl, 
  FormLabel, 
  RadioGroup, 
  FormControlLabel, 
  Radio,
  Button
} from '@mui/material';

const RamItem = ({setRam}) => {
  const handleChange = (event) => {
    setRam(parseInt(event.target.value));
  }
  return(
    <Stack>
      <FormControl sx={{
        marginTop: "10px",
        marginLeft: "10px",
      }}>
        <FormLabel>RAM:</FormLabel>
        <RadioGroup
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel value="0" control={<Radio size="small"/>} label="All" />
          <FormControlLabel value="4" control={<Radio size="small"/>} label="4 GB" />
          <FormControlLabel value="8" control={<Radio size="small"/>} label="8 GB" />
          <FormControlLabel value="16" control={<Radio size="small"/>} label="16 GB" />
        </RadioGroup>
      </FormControl>

    </Stack>
  )
}

export default RamItem;