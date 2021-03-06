import React from "react";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { HashLink as Link } from "react-router-hash-link";

import {
  AppBar,
  Button as MuiButton,
  Container,
  Grid,
  Hidden,
  Toolbar,
} from "@material-ui/core";

import { ReactComponent as Logo } from "../../../vendor/logo.svg";

const Button = styled(MuiButton)(spacing);

const Brand = styled.div`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const BrandIcon = styled(Logo)`
  margin-right: ${(props) => props.theme.spacing(2)}px;
  margin-top: -2px;
  color: ${(props) => props.theme.sidebar.header.brand.color};
  fill: ${(props) => props.theme.sidebar.header.brand.color};
  width: 32px;
  height: 32px;

  vertical-align: middle;
  display: inline;
`;

const AppBarComponent = () => (
  <React.Fragment>
    <AppBar position="relative" color="transparent" elevation={0}>
      <Toolbar>
        <Container>
          <Grid container alignItems="center">
            <Grid item>
              <Brand>
                <BrandIcon />
                Hubi
              </Brand>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Hidden smDown>
                <Button
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="#introduction"
                >
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
              </Hidden>
              <Button
                ml={2}
                color="primary"
                variant="contained"
                href="https://hubiapp.vercel.app/login"
                target="_blank"
              >
                Inicia sesión
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  </React.Fragment>
);

export default AppBarComponent;
