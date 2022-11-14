import AssuredWorkloadRoundedIcon from '@mui/icons-material/AssuredWorkloadRounded';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';

const MainTopBar = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="fixed" elevation={0} sx={{backgroundColor: 'transparent', color: 'primary.main'}}>
        <Toolbar>
          <IconButton size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
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
