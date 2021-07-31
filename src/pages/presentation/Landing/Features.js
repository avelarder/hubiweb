import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Button, Box, Container, Grid, Typography } from "@material-ui/core";

import { spacing } from "@material-ui/system";

import FeatureCard from "./components/FeatureCard";

const Wrapper = styled.div`
  ${spacing};
  background: ${(props) => props.theme.palette.background.paper};
  text-align: center;
`;
const Subtitle = styled(Typography)`
  font-size: ${(props) => props.theme.typography.h6.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  font-family: ${(props) => props.theme.typography.fontFamily};
  margin: ${(props) => props.theme.spacing(2)}px 0;
`;
const Feature = ({ image, title, description }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <FeatureCard
        image={image}
        title={title}
        description={description}
      ></FeatureCard>
    </Grid>
  );
};

function Features() {
  return (
    <Wrapper py={20}>
      <Container>
        <Typography variant="h2" component="h3" gutterBottom>
          Qué ofrecemos?
        </Typography>
        <Grid container justify="center" spacing={4}>
          <Grid item xs={12} lg={10}>
            <Subtitle color="textSecondary">
              Hubi, es una poderosa herramienta basada en la nube que aporta
              soluciones creativas para el manejo de condominios y edificios que
              optimizan tu propiedad creando lugares de bienestar y comunidad.
            </Subtitle>
            <Subtitle color="textSecondary">
              Aquí algunos de los servicios que ofrecemos.
            </Subtitle>
          </Grid>
        </Grid>
        <Box mb={8} />
        <Grid container spacing={6}>
          <Feature
            image="/static/img/features/visitors.jpg"
            title="Registro de Visitantes"
            description="Acelere el proceso de registro de visitantes al tiempo que garantiza que se cumplan los protocolos de seguridad y protección."
          />
          <Feature
            image="/static/img/features/services.jpg"
            title="Solicitud de Servicios"
            description="Ayudamos a inquilinos a comuinicarse con sus administradores de edificios, coordinar órdenes de trabajo, servicios de limpieza y más."
          />
          <Feature
            image="/static/img/features/access-control.jpg"
            title="Control de Acceso"
            description="Permita que los inquilinos accedan a sus edificios con sólo un toque en su teléfono."
          />
          <Feature
            image="/static/img/features/emergency.jpg"
            title="Comunicaciones de Emergencia"
            description="Comunique información de seguridad crítica a los ocupantes de su edificio."
          />
          <Feature
            image="/static/img/features/package.jpg"
            title="Trackings de paquetes"
            description="Avisos de seguimiento de paquetes."
          />
          <Feature
            image="/static/img/features/sell.jpg"
            title="Avisos de Venta y Alquiler de Propiedades."
            description="Ayudamos a que tu propiedad se venda rápidamente."
          />
          <Feature
            image="/static/img/features/analytics.jpg"
            title="Otros"
            description="Analítica de ahorro y sostenibilidad, plataforma en la nube, integración con otras apps."
          />
        </Grid>

        <Box mt={4}>
          <Button
            component={NavLink}
            to="/documentation/welcome"
            variant="contained"
            color="secondary"
            size="large"
            target="_blank"
          >
            Open Documentation
          </Button>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Features;
