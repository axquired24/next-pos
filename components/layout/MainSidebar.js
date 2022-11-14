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
import LocalDB from '../../utils/LocalDB';
import { useEffect } from 'react';

const MainSidebar = () => {
  const [state, setState] = useState({
    categories: []
  });

  const setCategory = () => {
    const categories = LocalDB.lib.queryAll(LocalDB.Collection.Categories).map(cat => {
      return {
        ...cat,
        url: '#category-' + cat.ID
      }
    })
    setState(prev => { return {...prev, categories} })
  }

  const menuCollection = [
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

  useEffect(() => {
    setCategory()
  }, []);

  return (
    <Box sx={{height: '90vh', overflowY: 'auto', paddingBottom: '1rem'}}>
      <List
        sx={{ width: '100%', bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Categories
          </ListSubheader>
        }
      >
        {
          state.categories.map((menuItem, menuItemIdx) => (
            <ListItemButton key={menuItemIdx}
              selected={menuItem.label == 'Juice'}>
              <ListItemIcon>
                <CircleRoundedIcon fontSize='10' />
              </ListItemIcon>
              <ListItemText primary={menuItem.label} />
            </ListItemButton>
          ))
        }
      </List>
      {
        menuCollection.map((menu, menuIdx) => (
          <List
            key={menuIdx}
            sx={{ width: '100%', bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                {menu.label}
              </ListSubheader>
            }
          >
            {
              menu.items.map((menuItem, menuItemIdx) => (
                <ListItemButton key={menuItemIdx}>
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
