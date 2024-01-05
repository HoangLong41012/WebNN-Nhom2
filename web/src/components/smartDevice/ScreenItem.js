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

const ScreenItem = ({setScreen}) => {
  const handleChange = (event) => {
    setScreen(parseInt(event.target.value));
  }
  return(
    <Stack>
      <FormControl sx={{
        marginTop: "10px",
        marginLeft: "10px",
      }}>
        <FormLabel>Screen:</FormLabel>
        <RadioGroup
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel value="0" control={<Radio size="small"/>} label="All" />
          <FormControlLabel value="12" control={<Radio size="small"/>} label="<13 inches" />
          <FormControlLabel value="13" control={<Radio size="small"/>} label="~13 inches" />
          <FormControlLabel value="14" control={<Radio size="small"/>} label="~14 inches" />
          <FormControlLabel value="15" control={<Radio size="small"/>} label=">15 inches" />
        </RadioGroup>
      </FormControl>

    </Stack>
  )
}

export default ScreenItem;