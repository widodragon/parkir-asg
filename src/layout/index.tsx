"use client"

import { AppBar, Box, IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import AccountCircle from '@mui/icons-material/AccountCircle';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box
            sx={{
                minHeight: "100vh",
                width: "100%"
            }}>
            <AppBar
                position="static"
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    bgcolor: "#2B3499",
                    height: "80px",
                    alignItems: "center",
                    paddingX: "1rem"
                }}
            >
                <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle sx={{ width: "3rem", height: "3rem" }} />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu>
                </div>
            </AppBar>
            {children}
        </Box>
    )
}

export default MainLayout;