import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Link, Outlet, useLocation } from 'react-router-dom';

//import icons

import PersonAddIcon from '@mui/icons-material/PersonAdd';
import EventNoteIcon from '@mui/icons-material/EventNote';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import GroupsIcon from '@mui/icons-material/Groups';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import RouteIcon from '@mui/icons-material/Route';



//appbar related imports


import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const drawerWidth = 240;

function SideBar(props) {

  const location = useLocation();
  const path = location.pathname;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />

      <Divider />
      <List>


        
      <ListItem key='Home' disablePadding component={Link} to={'/'} button selected={"/" === path}>
          <ListItemButton>
            <ListItemIcon>
              <EventNoteIcon/>
            </ListItemIcon>
            <ListItemText>
              Home
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem key='addCustomer' disablePadding component={Link} to={'/addCustomer'} button selected={"/addCustomer" === path}>
          <ListItemButton>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText>
              Add Customer
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem key='customers' disablePadding component={Link} to={'/customers'} button selected={"/customers" === path}>
          <ListItemButton>
            <ListItemIcon>
              <GroupsIcon />
            </ListItemIcon>
            <ListItemText>
              Customers
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <Divider />


        <ListItem key='newOrder' disablePadding component={Link} to={'/neworder'} button selected={"/neworder" === path}>
          <ListItemButton>
            <ListItemIcon>
              <NoteAddIcon/>
            </ListItemIcon>
            <ListItemText>
              New Order
            </ListItemText>
          </ListItemButton>
        </ListItem>


        <ListItem key='orders' disablePadding component={Link} to={'/orders'} button selected={"/orders" === path}>
          <ListItemButton>
            <ListItemIcon>
              <TextSnippetIcon/>
            </ListItemIcon>
            <ListItemText>
              View Orders
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <Divider />

        
        <ListItem key='map' disablePadding component={Link} to={'/map'} button selected={"/map" === path}>
          <ListItemButton>
            <ListItemIcon>
              <RouteIcon/>
            </ListItemIcon>
            <ListItemText>
              Route Planning
            </ListItemText>
          </ListItemButton>
        </ListItem>
      
      

      </List>











    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },

        }}
      >
        
        <Toolbar  sx={{ justifyContent: "space-between" }}>
       
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
  

     
          <Typography variant="h6" component="div">
            Tom's Florist
          </Typography>
      
        </Toolbar>
        

      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        <Outlet />
      </Box>
    </Box>
  );
}


export default SideBar;