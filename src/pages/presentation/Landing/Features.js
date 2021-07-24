import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Button, Box, Container, Grid, Typography } from "@material-ui/core";

import { spacing } from "@material-ui/system";

import {
  Mail as MailIcon,
  Code as CodeIcon,
  Users as UsersIcon,
  Figma as FigmaIcon,
  BookOpen as BookOpenIcon,
  PlusCircle as PlusCircleIcon,
} from "react-feather";

const Wrapper = styled.div`
  ${spacing};
  background: ${(props) => props.theme.palette.background.paper};
  text-align: center;
`;

const TypographyOverline = styled(Typography)`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const FeatureWrapper = styled.div`
  display: flex;
  text-align: left;
  padding: 18px 20px;
`;

const FeatureIcon = styled.div`
  svg {
    flex-shrink: 0;
    width: auto;
    height: 32px;
    width: 32px;
    color: ${(props) => props.theme.palette.primary.main};
  }
`;
const Subtitle = styled(Typography)`
  font-size: ${(props) => props.theme.typography.h6.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  font-family: ${(props) => props.theme.typography.fontFamily};
  margin: ${(props) => props.theme.spacing(2)}px 0;
`;
const Feature = ({ Icon, title, description }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <FeatureWrapper>
        <FeatureIcon>
          <Icon />
        </FeatureIcon>
        <Box ml={6}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
        </Box>
      </FeatureWrapper>
    </Grid>
  );
};

function Features() {
  return (
    <Wrapper py={20}>
      <Container>
        <TypographyOverline variant="body2" gutterBottom>
          Características
        </TypographyOverline>
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
            Icon={CodeIcon}
            title="Servicio 1"
            description="Hubi is built to make your life easier. Theme provider, build tooling, documentation, and 400+ components. "
          />
          <Feature
            Icon={PlusCircleIcon}
            title="Servicio 2"
            description="Various third-party plugins are fully integrated, like Chart.js, FullCalendar, WYSIWYG Editors, Formik and Yup."
          />
          <Feature
            Icon={MailIcon}
            title="Servicio 3"
            description="Our themes are supported by specialists who provide quick and effective support. Usually an email reply takes <24h."
          />
          <Feature
            Icon={UsersIcon}
            title="Servicio 4"
            description="The package comes with fully working authentication examples, using Redux, Axios and Axios Mock Adapter."
          />
          <Feature
            Icon={BookOpenIcon}
            title="Servicio 5"
            description="We've written extensive documentation for the plugins and tools we're using, varying from Redux to ESLint."
          />
          <Feature
            Icon={FigmaIcon}
            title="Servicio 6"
            description="Designers, we've got you covered. Sketch & Figma files are available in the Standard Plus and Extended License."
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
