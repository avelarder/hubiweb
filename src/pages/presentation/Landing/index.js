import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography as MuiTypography,
} from "@material-ui/core";
import styled from "styled-components/macro";
import AppBar from "./AppBar";
import Introduction from "./Introduction";
import Features from "./Features";
import FAQ from "./FAQ";
import JoinUs from "./JoinUs";
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

const Subtitle = styled(Typography)`
  font-size: ${(props) => props.theme.typography.h6.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  font-family: ${(props) => props.theme.typography.fontFamily};
  margin: ${(props) => props.theme.spacing(2)}px 0;
`;

function Presentation() {
  return (
    <React.Fragment>
      <AppBar />
      <section id="introduction">
        <Introduction />
      </section>
      <section id="WhyHubi">
        <Wrapper py={20}>
          <Grid container alignItems="center" justify="center" spacing={4}>
            <Grid item xs={12} sm={9} md={8} lg={7}>
              <Content>
                <Typography variant="h2" component="h3" gutterBottom>
                  Por qué Hubi?
                </Typography>
                <Grid container justify="center" spacing={4}>
                  <Grid item xs={12} lg={10}>
                    <Subtitle color="textSecondary">
                      <span>Hubi</span>, es el centro de tu comunidad que mejora
                      la satisfacción, la productividad y el bienestar de las
                      personas en los edificios al tiempo que mejoran los
                      resultados. Creemos todos estos componentes pueden
                      cultivar entornos más amablaes y empáticos.
                    </Subtitle>
                  </Grid>
                </Grid>
                <Box mb={8} />
              </Content>
            </Grid>
          </Grid>
        </Wrapper>
      </section>
      <section id="Features">
        <Features />
      </section>
      <section>
        <FAQ />
      </section>
      <section id="joinUs">
        <JoinUs />
      </section>
    </React.Fragment>
  );
}

export default Presentation;
