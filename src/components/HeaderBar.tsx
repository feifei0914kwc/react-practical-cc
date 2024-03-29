import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { AddReaction } from "@mui/icons-material";


export const HeaderBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <AddReaction />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        To-do Application
                    </Typography>
                    <Button color="inherit"><Link to="/" >Top</Link></Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};