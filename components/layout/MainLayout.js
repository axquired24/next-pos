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
        <Grid container sx={{marginTop: '4rem'}}>
          <Grid item sx={{flexGrow: 1}}>
            <MainTopBar />
            <Grid container>
              <Grid item md={3}>
                <MainSidebar />
              </Grid>
              <Grid item sx={{px: '1rem', paddingBottom: '1rem'}}>
                {children}
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={3} sx={{backgroundColor: 'common.black', minHeight: '90vh'}}>
            {/* calculator */}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default MainLayout;
