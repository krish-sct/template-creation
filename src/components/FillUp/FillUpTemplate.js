import * as React from "react";
import Grid from "@mui/material/Grid";
import { Context } from "../../Provider";
import { template } from "../templateData";
import ImageGallery from "./ImageGallery";

export default function FillUpTemplate() {
  const { template1, setTemplate1 } = React.useContext(Context);

  return (
    <Grid
      container
      spacing={2}
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
            </div>
          );
        })}
    </Grid>
  );
}
