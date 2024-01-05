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

const CpuItem = ({setCpu}) => {
  const handleChange = (event) => {
    const cpuStr= event.target.value;
    const cpu = {
      min: parseInt(cpuStr.substring(0,1)),
      max: parseInt(cpuStr.substring(2,3))
    }
    setCpu(cpu);
  }
  return(
    <Stack>
      <FormControl sx={{
        marginTop: "10px",
        marginLeft: "10px",
      }}>
        <FormLabel>CPU speed:</FormLabel>
        <RadioGroup
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel value="0-5" control={<Radio size="small"/>} label="All" />
          <FormControlLabel value="0-3" control={<Radio size="small"/>} label="<3 Ghz" />
          <FormControlLabel value="3-5" control={<Radio size="small"/>} label=">3 Ghz" />
        </RadioGroup>
      </FormControl>

    </Stack>
  )
}

export default CpuItem;