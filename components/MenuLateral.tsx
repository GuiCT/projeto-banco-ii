import {Divider, Drawer, Icon, List, ListItem, ListItemIcon, ListItemButton, ListItemText, Typography, useTheme, useMediaQuery} from '@mui/material';
import { Box} from '@mui/system';
import { useDrawerContext} from '../context/DrawerContext';

interface MenuLateralProps {
    children: React.ReactNode;
}

export const MenuLateral: React.FC<MenuLateralProps> = ({children}) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    
    const {isDrawerOpen} = useDrawerContext();

    return(
        <>
            <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'}>
                <Box width={theme.spacing(30)} height="100%" bgcolor="primary.main" color="primary.contrastText" display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
                </Box>
            </Drawer>

            <Box width="100%" height="100%" bgcolor="primary.light" display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
                {children}
            </Box>
        </>
    )
    
}