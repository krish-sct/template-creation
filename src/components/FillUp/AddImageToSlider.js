import React, { useContext, useState } from "react";
import { Context } from "../../Provider";
import { Grid, IconButton, TextField } from "@mui/material";
import { CheckCircleOutline, Edit } from "@mui/icons-material";

const AddImageToSlider = () => {
  const { edits, handleEdits, setTempOne } = useContext(Context);
  const [newImg, setNewImg] = useState({ label: "", imgPath: "" });
  const handleAddImg = () => {
    if (newImg.label !== "" && newImg.imgPath !== "") {
      setTempOne((prev) => {
        return {
          ...prev,
          slider: {
            count: prev?.slider?.count + 1 || 1,
            images: [...prev?.slider?.images, newImg] || [...newImg],
          },
        };
      });
    }
    handleEdits("slider");
  };
  return (
    <Grid item sx={{ display: "flex", width: "100%" }}>
      <>
        <TextField
          size="small"
          sx={{ m: 2 }}
          fullWidth
          label="Image Title"
          variant="outlined"
          value={newImg?.label}
          onChange={(e) =>
            setNewImg((prev) => {
              return { ...prev, label: e.target.value };
            })
          }
        />
        <TextField
          size="small"
          sx={{ m: 2 }}
          fullWidth
          label="Image URL"
          variant="outlined"
          value={newImg?.imgPath}
          onChange={(e) =>
            setNewImg((prev) => {
              return { ...prev, imgPath: e.target.value };
            })
          }
        />
      </>
      <IconButton color="primary" onClick={handleAddImg}>
        <CheckCircleOutline />
      </IconButton>
    </Grid>
  );
};

export default AddImageToSlider;
