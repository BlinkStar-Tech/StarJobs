import React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, AppBar, Toolbar, Typography } from '@mui/material';

const Sidebar = () => {
  const drawerWidth = 240;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            StarJobs Zim
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List>
          {['Dashboard', 'Job Management', 'Categories', 'Profile'].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Toolbar />
        <Typography paragraph>
          Main content goes here.
        </Typography>
      </Box> */}
    </Box>
  );
};

export default Sidebar;