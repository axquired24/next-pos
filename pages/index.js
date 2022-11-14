import { Grid, Paper, Typography } from '@mui/material'
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import MainLayout from '../components/layout/MainLayout'
import LocalDB from '../utils/LocalDB'

const BoxForItem = (props) => {
  const {name='', stock=10} = props
  const stockStr = stock + ' items'
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
      <Typography variant='subtitle1' sx={{fontSize: '0.9rem'}}>{stockStr}</Typography>
    </Box>
  </Box>
}

export default function Home() {
  const [state, setState] = useState({
    hasInit: false
  });
  const juices = ['Manggo', 'Apple', 'Berry', 'Papaya', 'Avocado', 'Melon', 'Orange', 'Pineapple', 'Peach']
  const randomNumber = () => {
    return Math.floor(Math.random() * 100)
  }

  useEffect(() => {
    if(! state.hasInit) {
      LocalDB.initTable()
      setState(prev => { return {...prev, hasInit: true}})
    } // endif
  }, []);

  return (
    <MainLayout title='Home'>
      <Grid container spacing={2}>
        {
          state.hasInit ?
          juices.map((ju, idx) => (
            <Grid item md={4} key={idx}>
              <BoxForItem name={ju} stock={randomNumber()} />
            </Grid>
          ))
          : <div></div>
        }
      </Grid>
    </MainLayout>
  )
}
