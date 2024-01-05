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

const HardDriveItem = ({setHardDrive}) => {
  const handleChange = (event) => {
    setHardDrive(parseInt(event.target.value));
  }
  return(
    <Stack>
      <FormControl sx={{
        marginTop: "10px",
        marginLeft: "10px",
      }}>
        <FormLabel>Hard Drive:</FormLabel>
        <RadioGroup
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel value="0" control={<Radio size="small"/>} label="All" />
          <FormControlLabel value="256" control={<Radio size="small"/>} label="256 GB" />
          <FormControlLabel value="512" control={<Radio size="small"/>} label="512 GB" />
        </RadioGroup>
      </FormControl>

    </Stack>
  )
}

export default HardDriveItem;