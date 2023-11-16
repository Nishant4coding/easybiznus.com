import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';
import Image from 'next/image';
import MobileNavIcon from './MobileNavIcon';
import MobileNavSearch from './MobileNavSearch';
import BottomTabs from './BottomTabs.jsx';
import styles from "./mobileNav.module.css";
import { Logo, Search } from '@/assets/svg';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0.1),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function DrawerL() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = useState(false);
  const [searchIcon, setSearchIcon] = useState(true)
  const [userMenu, setUserMenu] = useState(false);
  const handleClose = () => setUserMenu(false);
  const handleOpen = () => setUserMenu(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', }} >
      <CssBaseline />
      <AppBar position="fixed" open={open} style={{ backgroundColor: '#0D1A26' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />

          </IconButton>

          {!open && <Box className={styles.navbar}>
            {searchIcon && <Link href="/">
              <Image src={Logo} alt={"logo"} width={65} />
            </Link>}

            {!searchIcon && <MobileNavSearch search={search} setSearch={setSearch} searchIcon={searchIcon} setSearchIcon={setSearchIcon} />}
            <div className={styles.navRight}>
              {searchIcon && <Image src={Search} alt={"cart"} width={15} onClick={() => setSearchIcon(!searchIcon)}></Image>}
              {searchIcon && <MobileNavIcon handleClose={handleClose} userMenu={userMenu} handleOpen={handleOpen} />}
            </div>
          </Box>}

        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          position: 'relative',
          width: '100vw',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '100vw',
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['New & Trending', 'Women', 'Men', 'Kids', 'Sports', 'Offers'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <BottomTabs handleDrawerClose={handleDrawerClose}/>
      </Drawer>

      {/* <Main open={open}>
        <DrawerHeader />
      </Main> */}

    </Box>
  );
}
