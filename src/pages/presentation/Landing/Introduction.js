import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import {
  Box,
  Container,
  Grid,
  Typography as MuiTypography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const Typography = styled(MuiTypography)(spacing);

const Wrapper = styled.div`
  padding-top: 3.5rem;
  position: relative;
  text-align: center;
  overflow: hidden;
`;

const Content = styled.div`
  padding: ${(props) => props.theme.spacing(6)}px 0;
  line-height: 150%;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  box-shadow: 0 6px 18px 0 rgba(18, 38, 63, 0.075);
  border-radius: 5px;
  transform: perspective(2000px) rotateX(25deg);
  z-index: 0;
  position: relative;
  image-rendering: optimizequality;
  image-rendering: -webkit-optimize-contrast;
  margin-bottom: -100px;
  margin-top: -35px;
  ${(props) => props.theme.breakpoints.up("md")} {
    margin-top: -50px;
  }
`;

const ImageWrapper = styled.div`
  &:before {
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.02));
    bottom: 0;
    left: 0;
    position: absolute;
    content: " ";
    z-index: 1;
    display: block;
    width: 100%;
    height: 75px;
    pointer-events: none;
  }
`;

const Title = styled(Typography)`
  opacity: 0.9;
  line-height: 1.4;
  font-size: 1.75rem;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};

  ${(props) => props.theme.breakpoints.up("sm")} {
    font-size: 2rem;
  }

  ${(props) => props.theme.breakpoints.up("md")} {
    font-size: 2.5rem;
  }

  span {
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

const Subtitle = styled(Typography)`
  font-size: ${(props) => props.theme.typography.h6.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  font-family: ${(props) => props.theme.typography.fontFamily};
  margin: ${(props) => props.theme.spacing(2)}px 0;
`;

const Feature = styled.div`
  display: inline-block;
  padding: 0 ${(props) => props.theme.spacing(3)}px;
  text-align: left;
`;

const FeatureText = styled(Typography)`
  color: ${(props) => props.theme.palette.secondary.main};
`;

function Introduction() {
  return (
    <Wrapper>
      <Container>
        <Grid container alignItems="center" justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={9} md={8} lg={7}>
            <Content>
              <Title variant="h1" gutterBottom>
                <span>Hubi</span> Tu comunidad en l??nea.
              </Title>
              <Grid container justifyContent="center" spacing={4}>
                <Grid item xs={12} lg={10}>
                  <Subtitle color="textSecondary">
                    Hubi tiene la misi??n de generar un comunidad de propietarios
                    e inquilinos, servicios, compra/venta, mensajer??a entre
                    otros. Encuentra de todo, genera relaciones, vende/compra
                    tus propiedades o cualquier art??culo que creas tenga valor
                    para alguien m??s en la comunidad.
                  </Subtitle>
                </Grid>
              </Grid>

              <Box my={6}>
                <Feature>
                  <FeatureText component="span" variant="h2" mb={1}>
                    400+
                  </FeatureText>
                  <Typography variant="body1">Miembros</Typography>
                </Feature>
                <Feature>
                  <FeatureText component="span" variant="h2" mb={1}>
                    1200+
                  </FeatureText>
                  <Typography variant="body1">Operaciones</Typography>
                </Feature>
                <Feature>
                  <FeatureText component="span" variant="h2" mb={1}>
                    50+
                  </FeatureText>
                  <Typography variant="body1">Publicaciones</Typography>
                </Feature>
                <Feature>
                  <FeatureText component="span" variant="h2" mb={1}>
                    250+
                  </FeatureText>
                  <Typography variant="body1">Propiedades</Typography>
                </Feature>
              </Box>
            </Content>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={10} md={9} lg={9}>
            <ImageWrapper>
              <NavLink to="/dashboard/analytics" target="_blank">
                <Image
                  alt="Hubi - React Admin Template"
                  src={`/static/img/unsplash/people.jpg`}
                />
              </NavLink>
            </ImageWrapper>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default Introduction;
