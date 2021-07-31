import React from "react";
import styled from "styled-components/macro";

import {
  CardActionArea,
  CardActions,
  CardContent,
  Button as MuiButton,
  Card as MuiCard,
  CardMedia as MuiCardMedia,
  Typography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);
const Button = styled(MuiButton)(spacing);
const CardMedia = styled(MuiCardMedia)`
  height: 220px;
`;

function FeatureCard({ image, title, description }) {
  return (
    <Card mb={6}>
      <CardActionArea>
        <CardMedia image={image} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography component="p">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
}

export default FeatureCard;
