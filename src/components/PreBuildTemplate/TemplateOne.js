import React, { useContext, useState } from "react";
import Container from "@mui/material/Container";
import MenuBar from "../FillUp/MenuBar";
import Slider from "../FillUp/Slider";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Context } from "../../Provider";
import { AddCircleOutline, Close } from "@mui/icons-material";
import CustomCompHome from "../CustomComponent/CustomCompHome";
//import CardList from "../FillUp/CardList";

const images = [
  "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg",
  "https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg",
  "https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg",
  // Add more image URLs here
];
const headingSize = ["h1", "h2", "h3", "h4", "h5", "h6"];
export default function TemplateOne() {
  const {
    tempOne,
    edits,
    handleEdits,
    handleOnChange,
    handleSubmit,
    setTempOne,
  } = useContext(Context);
  return (
    <React.Fragment>
      <Container maxWidth="md">
        <MenuBar />
        <br />
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item sx={{ display: "flex" }}>
            <Typography variant={tempOne?.heading?.variant} m={2}>
              {!edits.heading
                ? tempOne?.heading?.text ||
                  "Heading " + tempOne?.heading?.variant
                : "Heading " + tempOne?.heading?.variant}
            </Typography>
            {edits.heading ? (
              <>
                <TextField
                  label="Heading"
                  variant="outlined"
                  value={tempOne?.heading?.text}
                  onChange={(e) =>
                    handleOnChange({
                      key: "heading",
                      type: "text",
                      value: e.target.value,
                    })
                  }
                />
                <FormControl sx={{ m: 1, minWidth: 60 }} size="small">
                  <Select
                    value={tempOne?.heading?.variant}
                    label="Size"
                    onChange={(e) =>
                      handleOnChange({
                        key: "heading",
                        type: "variant",
                        value: e.target.value,
                      })
                    }
                  >
                    {headingSize.map((e, i) => (
                      <MenuItem key={i} value={e}>
                        {e}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </>
            ) : (
              ""
            )}
            <IconButton color="primary" onClick={() => handleEdits("heading")}>
              {!edits.heading ? <EditIcon /> : <CheckCircleOutlineIcon />}
            </IconButton>
          </Grid>

          <Grid sx={{ display: "flex", width: "100%" }} item>
            <Typography m={2} variant="body">
              {!edits.para
                ? tempOne?.para?.text || "Paragraph... "
                : "Paragraph "}
            </Typography>
            {edits.para ? (
              <TextField
                label="Paragraph "
                variant="outlined"
                value={tempOne?.para?.text}
                multiline
                rows={4}
                fullWidth
                onChange={(e) =>
                  handleOnChange({
                    key: "para",
                    type: "text",
                    value: e.target.value,
                  })
                }
              />
            ) : (
              ""
            )}
            <IconButton color="primary" onClick={() => handleEdits("para")}>
              {!edits.para ? <EditIcon /> : <CheckCircleOutlineIcon />}
            </IconButton>
          </Grid>
          <Grid item>
            <Slider />
          </Grid>
          <Grid item sx={{ float: "left", width: "100%" }}>
            <br />
            <Button
              size="small"
              variant="outlined"
              onClick={() => {
                setTempOne((prev) => {
                  return { ...prev, customComponent: {} };
                });
                handleEdits("customComponent");
              }}
            >
              {edits?.customComponent ? "Remove" : "Add"} Custom Components
              <IconButton color="primary">
                {edits?.customComponent ? <Close /> : <AddCircleOutline />}
              </IconButton>
            </Button>
            <br />
            {edits?.customComponent ? <CustomCompHome /> : ""}
          </Grid>
          <Grid item sx={{ float: "right", width: "100%" }}>
            <Button
              sx={{ float: "right" }}
              onClick={handleSubmit}
              variant="outlined"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
