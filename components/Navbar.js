// Importing files from Material-UI
import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Stack, Button} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDrawerContext } from '../context/DrawerContext';

export const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{mr: 2}}
					onClick={() => useDrawerContext().toggleDrawerOpen()}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" component="div" sx={{flexGrow: 1}}>
					JunkChipper
				</Typography>
				<Stack direction="row" spacing={2}>
					<Button color="inherit">Login</Button>
					<Button color="inherit">Cadastro</Button>
				</Stack>
				
			</Toolbar>
		</AppBar>
	);
}