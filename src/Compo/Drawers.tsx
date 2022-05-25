import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles(() => ({
    link: {
        textDecoration: "none",
        color: "blue",
        fontSize: "20px",
    },
    icon: {
        color: "white"
    }
}))

const Drawers: FC<any> = () => {
    const [openDrawer, setOpenDrawer] = useState<any>(false);
    const classes = useStyle();
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                anchor={"right"}>
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/" className={classes.link}>Home</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/about" className={classes.link}>About</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/contact" className={classes.link}>Contact</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/faq" className={classes.link}>Faq</Link>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                </List>

            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                className={classes.icon}
            >
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default Drawers