import * as React from "react";
import Grid from "@mui/material/Grid";
import { Context } from "../../Provider";
import { template } from "../templateData";
import ImageGallery from "./ImageGallery";
import ModalPopUp from "./ModalPopUp";
import Grids from "./Grids";
import TabsComponent from "./TabsComponent";
import Buttons from "./Buttons";
import Tables from "./Tables";
import Cards from "./Cards";
import Slider from "./Slider";

export default function FillUpTemplate() {
  const { template1, setTemplate1 } = React.useContext(Context);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      {template1?.template?.length > 0 &&
        template1?.template?.map((tempId) => {
          return (
            <div>
              <h3>{template?.menu[tempId]}</h3>
              {template?.menu[tempId] === "Image Gallery" ? (
                <ImageGallery />
              ) : (
                ""
              )}
              {template?.menu[tempId] === "Form" ? <p>Coming soon..</p> : ""}
              {template?.menu[tempId] === "Modal Popup" ? <ModalPopUp /> : ""}
              {template?.menu[tempId] === "Grid" ? <Grids /> : ""}
              {template?.menu[tempId] === "Video" ? <p>Coming soon..</p> : ""}
              {template?.menu[tempId] === "Text on Image" ? (
                <p>Coming soon..</p>
              ) : (
                ""
              )}
              {template?.menu[tempId] === "Tabs" ? <TabsComponent /> : ""}
              {template?.menu[tempId] === "Button" ? <Buttons /> : ""}
              {template?.menu[tempId] === "Table" ? <Tables /> : ""}
              {template?.menu[tempId] === "Cards" ? <Cards /> : ""}
              {template?.menu[tempId] === "Slider" ? <Slider /> : ""}
            </div>
          );
        })}
    </Grid>
  );
}
