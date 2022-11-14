import { Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import MainLayout from '../components/layout/MainLayout'

const BoxForItem = (props) => {
  const {name='', stock=10} = props
  return <Box sx={
    {
      width: '100%',
      height: '110px',
      backgroundColor: 'grey.100',
      borderRadius: '10px',
      position: 'relative',
      cursor: 'pointer',
      padding: '1rem',
      '&:hover': {
        backgroundColor: 'grey.200'
      }
    }
  }>
    <Box sx={{position: 'absolute', bottom: 0, left: 0, padding: '1rem'}}>
      <Typography color='common.black' sx={{fontSize: '1rem', fontWeight: '500'}}>{name}</Typography>
      <Typography variant='subtitle1' sx={{fontSize: '0.9rem'}}>{stock + ' items'}</Typography>
    </Box>
  </Box>
}

export default function Home() {
  const juices = ['Manggo', 'Apple', 'Berry', 'Papaya', 'Avocado', 'Melon', 'Orange', 'Pineapple', 'Peach']
  const randomNumber = () => {
    return Math.floor(Math.random() * 100)
  }
  return (
    <MainLayout title='Home'>
      <Grid container spacing={2}>
        {
          juices.map((ju, idx) => (
            <Grid item md={4} key={idx}>
              <BoxForItem name={ju} stock={randomNumber()} />
            </Grid>
          ))
        }
      </Grid>
    </MainLayout>
  )
}
