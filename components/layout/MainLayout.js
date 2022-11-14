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
          <Grid item md={3} sx={{marginTop: '-1rem'}}>
            <MainSidebar />
          </Grid>
          <Grid item md={6}>
            {children}
          </Grid>
          <Grid item md={3}>
            {/* calculator */}
            <Box sx={{backgroundColor: 'common.black', minHeight: '90vh', width: '100%'}}></Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default MainLayout;
