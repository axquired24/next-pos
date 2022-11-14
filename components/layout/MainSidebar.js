import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { useState } from 'react';
import { Box } from '@mui/system';

const MainSidebar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const menuCollection = [
    {
      label: 'Categories',
      items: [
        {
          label: 'Coffee',
          url: '#coffee'
        },
        {
          label: 'Milk',
          url: '#milk'
        },
        {
          label: 'Juice',
          url: '#juice'
        },
        {
          label: 'Snack',
          url: '#snack'
        },
        {
          label: 'Main Course',
          url: '#maincourse'
        }
      ]
    },
    {
      label: 'Reports',
      items: [
        {
          label: 'Stock',
          url: '#stock'
        },
        {
          label: 'Sales',
          url: '#sales'
        },
      ]
    },
    {
      label: 'Administration',
      items: [
        {
          label: 'Category Editor',
          url: '#categoryEdit'
        },
        {
          label: 'Item Editor',
          url: '#itemEdit'
        },
        {
          label: 'Application Setting',
          url: '#appSetting'
          // Admin Login, Expire Login, AppName
        },
      ]
    }
  ]

  return (
    <Box sx={{height: '90vh', overflowY: 'auto', paddingBottom: '1rem'}}>
      {
        menuCollection.map(menu => (
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                {menu.label}
              </ListSubheader>
            }
          >
            {
              menu.items.map(menuItem => (
                <ListItemButton>
                  <ListItemIcon>
                    <CircleRoundedIcon fontSize='10' />
                  </ListItemIcon>
                  <ListItemText primary={menuItem.label} />
                </ListItemButton>
              ))
            }
          </List>
        ))
      }
    </Box>
  )
}

export default MainSidebar;
