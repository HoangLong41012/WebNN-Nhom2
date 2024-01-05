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
import CpuItem from './CpuItem';
import RamItem from './RamItem';
import ScreenItem from './ScreenItem';
import HardDriveItem from './HardDriveItem';
import { 
  getSmartDevicesAction
} from '../../state-manager/action';
const PriceItem = ({setPrice}) => {
  const handleChange = (event) => {
    const priceStr = event.target.value;
    const price = {
      min: parseInt(priceStr.substring(0,2)),
      max: parseInt(priceStr.substring(3, 5))
    }
    setPrice(price);
  }
  return(
    <Stack>
      <FormControl sx={{
        marginTop: "10px",
        marginLeft: "10px",
      }}>
        <FormLabel>Price:</FormLabel>
        <RadioGroup
          name="radio-buttons-group"
          onChange={handleChange}
        >
          <FormControlLabel value="00-99" control={<Radio size="small"/>} label="All" />
          <FormControlLabel value="00-10" control={<Radio size="small"/>} label="<10 m" />
          <FormControlLabel value="10-15" control={<Radio size="small"/>} label="10-15 m" />
          <FormControlLabel value="15-20" control={<Radio size="small"/>} label="15-20 m" />
          <FormControlLabel value="20-99" control={<Radio size="small"/>} label=">20 m" />
        </RadioGroup>
      </FormControl>

    </Stack>
  )
}
const Filter = ({
  setCpu,
  setRam,
  setPrice,
  price,
  setHardDrive,
  setScreen,
  setSmartDeviceProducts,
  ram,
  cpu,
  screen,
  hardDrive,
  brand
}) => {
  const handleClick = async () => {
    const products = await getSmartDevicesAction({
      price, 
      ram,
      cpu,
      screen,
      hardDrive,
      brand
    });
    setSmartDeviceProducts(products);
  }
  return (
    <Stack 
      sx={{ width: "20%", minHeight: "100%", borderRight: "1px solid black" }}
    >
      <Button variant="outlined" onClick={handleClick}>Find</Button>
      <PriceItem setPrice={setPrice}/>
      <CpuItem setCpu={setCpu}/>
      <RamItem setRam={setRam}/>
      <ScreenItem setScreen={setScreen}/>
      <HardDriveItem setHardDrive={setHardDrive}/>
    </Stack>
  )
}

export default Filter;