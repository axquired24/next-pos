import { Grid, Paper, Typography } from '@mui/material'
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import MainLayout from '../components/layout/MainLayout'
import Helper from '../utils/Helper'
import LocalDB from '../utils/LocalDB'
import ModGrocery from '../utils/models/ModGrocery'

const BoxForItem = (props) => {
  const {label='', stock=10, price=0, categoryId, ID} = props
  const stockStr = stock + ' items'
  return <Box sx={
    {
      width: '100%',
      height: '110px',
      backgroundColor: 'grey.100',
      borderRadius: '10px',
      position: 'relative',
      cursor: 'pointer',
      padding: '0.6rem 1rem',
      '&:hover': {
        backgroundColor: 'grey.200'
      }
    }
  }>
    <Box sx={{textAlign: 'right'}}>
      <Typography color='common.black' sx={{fontSize: '1.3rem', fontWeight: '500'}}>{label}</Typography>
      <Typography variant='subtitle1' sx={{fontSize: '0.9rem'}}>{Helper.formatRupiah(price)}</Typography>
    </Box>
    <Box sx={{position: 'absolute', bottom: 0, left: 0, padding: '1rem'}}>
      <Typography variant='subtitle1' sx={{fontSize: '0.9rem'}}>{stockStr}</Typography>
    </Box>
  </Box>
}

export default function Home() {
  const [state, setState] = useState({
    hasInit: false,
    groceries: []
  });

  useEffect(() => {
    if(! state.hasInit) {
      LocalDB.initTable()
      setState(prev => { return {...prev, hasInit: true}})
    } // endif

    if(ModGrocery.tableExists()) {
      setState(prev => {
        return {
          ...prev,
          groceries: ModGrocery.queryAll()
        }
      })
    } // endif
  }, []);

  return (
    <MainLayout title='Home'>
      <Grid container spacing={2}>
        {
          state.hasInit ?
          state.groceries.map((grocery, idx) => (
            <Grid item md={4} key={idx}>
              <BoxForItem {...grocery} />
            </Grid>
          ))
          : <div></div>
        }
      </Grid>
    </MainLayout>
  )
}
