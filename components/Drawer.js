import React from 'react';
import Drawer from '@mui/material/Drawer';
import { WithStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { Box, Container, Grid, Link, Button } from '@mui/material';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
    },
});

const useStyles = makeStyles((theme) =>
    createStyles({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
    }),
);

class DrawerComponent extends React.Component {
    state = {
        left: false,
    };

    render(){
        const classes  = this.props;
        const { left } = this.state;
        const sideList = () => (
            <Box
                className={classes.list}
                role="presentation"
                onClick={this.props.toggleDrawerHandler}
                onKeyDown={this.props.toggleDrawerHandler}
            >
                <List>
                    {['Início', 'Sobre nós', 'Contato'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        );

        return (
            <div>
                <React.Fragment key={'left'}>
                    <Button onClick={this.props.toggleDrawer('left', true)}>Menu</Button>
                    <Drawer anchor={'left'} open={left} onClose={this.props.toggleDrawer('left', false)}>
                        {sideList('left')}
                    </Drawer>
                </React.Fragment>
            </div>
        );

    }
} 

export default DrawerComponent;