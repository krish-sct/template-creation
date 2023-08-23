import * as React from "react";
import Container from "@mui/material/Container";
import MenuBar from "../FillUp/MenuBar";
import Slider from "../FillUp/Slider";
import { Grid, Typography } from "@mui/material";
import CarouselComponent from "../FillUp/CarouselComponent";
import CardList from "../FillUp/CardList";

const images = [
  "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg",
  "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg",
  "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg",
  // Add more image URLs here
];

export default function TemplateOne() {
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <MenuBar />
        <br />
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <Typography variant="h4" m={2}>
              An all-in-one camera
            </Typography>
            <Typography m={2} variant="body">
              Since 2003, e-con Systems™ has been addressing the embedded camera
              needs of different types of markets across the world. Over the
              years, we have 'been there and done that' with consistency and
              commitment to accelerating product development that, in turn,
              create world-class industry experiences.
            </Typography>
          </Grid>
          <Grid item>
            <Slider />
          </Grid>
          <Grid item>
            <CardList />
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
