import React from "react";
import styled from "styled-components/macro";

import {
  Button,
  Container,
  Grid,
  TextField,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const Spacer = styled.div(spacing);

const Typography = styled(MuiTypography)(spacing);

const Wrapper = styled.div`
  ${spacing};
  text-align: center;
  position: relative;
  background: #181d2d;
  color: ${(props) => props.theme.palette.common.white};
`;

const Subtitle = styled(Typography)`
  font-size: ${(props) => props.theme.typography.h6.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  font-family: ${(props) => props.theme.typography.fontFamily};
  opacity: 0.75;
`;

function JoinUs() {
  return (
    <Wrapper pt={16} pb={16}>
      <Container>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} lg={6} xl={6}>
            <Typography variant="h2" gutterBottom>
              Únete a Nosotros
            </Typography>
            <Subtitle variant="h5" gutterBottom>
              Ingresa a la comunidad, gestiona tu propiedad, vende artículos
              rápido y fácil.
            </Subtitle>
            <Spacer mb={4} />
            <TextField
              id="standard-basic"
              label="Email"
              placeholder="tu@email.com"
            />
            <Spacer mb={4} />
            <Button
              href="#"
              variant="contained"
              color="primary"
              size="large"
              target="_blank"
            >
              Registrar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default JoinUs;
