/* eslint-disable prettier/prettier */
import React from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";



import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";


import MoreIcon from "@material-ui/icons/MoreVert";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { Button as MuiButton } from "@material-ui/core";
import { HashLink as Link } from "react-router-hash-link";
const Button = styled(MuiButton)(spacing);

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
}));

export default function PrimarySearchAppBar() {
    const classes = useStyles();
  
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        // setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };


    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

   

    const mobileMenuId = "primary-search-account-menu-mobile";
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Button ml={2} color="inherit" component={Link} to="#introduction" onClick={handleMobileMenuClose}>
                    Inicio
                </Button>
            </MenuItem>
            <MenuItem>
                <Button ml={2} color="inherit" component={Link} to="#WhyHubi"  onClick={handleMobileMenuClose}>
                    Por qué Hubi?
                </Button>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <Button ml={2} color="inherit" component={Link} to="#Features" onClick={handleMobileMenuClose}>
                    Plataforma
                </Button>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <Button ml={2} color="inherit" component={Link} to="#joinUs" onClick={handleMobileMenuClose}>
                    Únete a nosotros
                </Button>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="static">
                <Toolbar>
                   <img src="hubi-white-logo.png" alt="logo" width="50px"></img>
                   

                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <Button ml={2} color="inherit" component={Link} to="#introduction">
                            Inicio
                        </Button>
                        <Button ml={2} color="inherit" component={Link} to="#WhyHubi">
                            Por qué Hubi?
                        </Button>
                        <Button ml={2} color="inherit" component={Link} to="#Features">
                            Plataforma
                        </Button>
                        <Button ml={2} color="inherit" component={Link} to="#joinUs">
                            Únete a nosotros
                        </Button>

                    </div>
                    <Button
                        ml={2}
                        color="secondary"
                        variant="contained"
                        href="https://hubiapp.vercel.app/login"
                        target="_blank"
                    >
                        Inicia sesión
                    </Button>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {/* {renderMenu} */}
        </div>
    );
}
