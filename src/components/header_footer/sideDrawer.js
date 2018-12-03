import React from 'react';
import { Drawer, List, ListItem } from '@material-ui/core';

const SideDrawer = (props) => {
    return (
        <Drawer anchor='right' open={props.open} onClose={() => props.onClose(false)}>
            <List component='nav'>
                <ListItem button onClick={() => console.log('About Me')}>
                    About Me
                </ListItem>
                <ListItem button onClick={() => console.log('Portfolio')}>
                    Portfolio
                </ListItem>
                <ListItem button onClick={() => console.log('Resume')}>
                    Resume
                </ListItem>
                <ListItem button onClick={() => console.log('Blog')}>
                    Blog
                </ListItem>
                <ListItem button onClick={() => console.log('Contact Me')}>
                    Contact Me
                </ListItem>
            </List>
        </Drawer>
    );
}

export default SideDrawer;