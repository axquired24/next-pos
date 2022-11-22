import { Box, Container, Grid } from '@mui/material';
import Head from 'next/head'
import MainSidebar from './MainSidebar';
import MainTopBar from './MainTopBar';

const MainLayout = ({children, title=''}) => {
  const titleHead = title + ' - PoS'
  return (
    <div>
      <Head>
        <title>{ titleHead }</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="Point of Sale Application" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Box sx={{backgroundColor: 'common.white', color: 'common.black'}}>
        <MainTopBar />
        <Grid container sx={{marginTop: '4rem'}} spacing={3}>
          <Grid item sx={{marginTop: '-1rem', flex: 1}}>
            <MainSidebar />
          </Grid>
          <Grid item sx={{flex: 3}}>
            {children}
          </Grid>
          <Grid item sx={{flex: 1}}>
            {/* calculator */}
            <Box sx={{backgroundColor: 'common.black', minHeight: '90vh', width: '100%'}}></Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default MainLayout;
