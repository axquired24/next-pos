import AssuredWorkloadRoundedIcon from '@mui/icons-material/AssuredWorkloadRounded';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import LocalDB from '../../utils/LocalDB';

const MainTopBar = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="fixed" elevation={0} variant="outlined" sx={{backgroundColor: 'common.white', color: 'primary.main'}}>
        <Toolbar>
          <IconButton size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => LocalDB.seedDummy()}
            sx={{ mr: 2 }}>
            <AssuredWorkloadRoundedIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Your Restaurant
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainTopBar;
