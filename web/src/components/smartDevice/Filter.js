import { Stack, Link } from '@mui/material';

const Filter = () => {
  return (
    <Stack 
      sx={{ width: "20%", minHeight: "100%", borderRight: "1px solid black" }}
    >
      <Link href="#">Smart Device</Link>
      <Link href="#">Household</Link>
      <Link href="#">Accessory</Link>
    </Stack>
  )
}

export default Filter;